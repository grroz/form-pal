# Form-Pal (Form Generator)

Form-Pal lets you create your own forms without losing time and tinkering with the details. 
Make sure to read the usage section for optimal usage.

# Installation

`npm i form-pal`

# Usage 
```
const fp = require('form-pal');

let form = fp.build({
    form_fields: [
        { type: 'text', value: 'firstname' },
        { type: 'number', value: 'age' },
        { type: 'email', value: 'email' },
        { type: 'textarea', value: 'msg' },
        { type: 'submit', value: 'Send' },
        { type: 'checkbox', value: 'good' },
        { type: 'radio', value: 'gender' },
        { type: 'select', ops: [
            { option: 'parameter0' }, 
            { option: 'parameter1' }] }
    ], 
    form_validate: true,
    form_method: 'post', 
    form_action: 'index.php', 
    form_class: 'myClass' 
});
```

* *form_fields* / *Array of Objects* / *Required*
* *form_method* / *string* / *Required*
* *form_action* / *string* / *Required*

