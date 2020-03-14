function build(options){
    let markup = '';

    if (options.form_method && options.form_action){
        if (options.form_class){
            markup = '<form method="'+options.form_method+'" action="'+options.form_action+'" class="'+options.form_class+'">';
        } else {
            markup = '<form method="'+options.form_method+'" action="'+options.form_action+'">';   
        }
    } else {
        return console.error('You did not provide a form action and method');
    }
    if (options.form_fields.length > 0){
        options.form_fields.forEach(elem => {
        if (elem.type == 'textarea'){
            if (options.form_validate){
                markup += '<textarea style="width:100%;resize:none;height:300px;" placeholder="'+elem.value+'" name="'+elem.value+'" id="'+elem.value+'" class="form-control" required></textarea><br>';
            } else {
                markup += '<textarea style="width:100%;resize:none;height:300px;" placeholder="'+elem.value+'" name="'+elem.value+'" id="'+elem.value+'" class="form-control"></textarea><br>';
            }
        } else if (elem.type == 'select'){
            markup += '<select name="'+elem.type+'" class="form-control" id="'+elem.type+'"required>';
            elem.ops.forEach(e => {
                markup += '<option value="'+e.option+'">'+e.option+'</option>';
            });
            markup += '</select><br>';
        } else if (elem.type != 'submit') {
            if (options.form_validate){
                markup += '<input type="'+elem.type+'" name="'+elem.value+'" id="'+elem.value+'" class="form-control" placeholder="'+elem.value+'" required><br>';
            } else {
                markup += '<input type="'+elem.type+'" name="'+elem.value+'" id="'+elem.value+'" class="form-control" placeholder="'+elem.value+'"><br>';
            }
        }


        });
    } else {
        return console.error('No fields passed. Please read the usage docs');
    }

    if (elem.type == 'submit'){
        markup += '<input type="'+elem.type+'" name="'+elem.value+'" id="'+elem.value+'" value="'+elem.value+'" class="btn btn-primary"><br>';
    } else {
        markup += '<input type="submit" name="submit" id="submit" value="Submit" class="btn btn-primary"><br>';
    }

    markup += '</form>';
    return markup;
}

module.exports.build = build;