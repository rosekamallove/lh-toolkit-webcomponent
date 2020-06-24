# fhir-observation-valuequantity

The fhir-observation-valuequantity adds the obsevration value, unit, system and code to the page. It is commonly used 
 as a form field. It uses  mwc-textfield and iron-ajax.

### Functionality
  Default : shows empty mwc-textfields of valueQuantity : value, units, system and code for `display`. 
 ###### a. GET:
 * It has mwc-textfields which receives  value. `value` can be passed as a Array.
 * It can also receive value from a 'url' which can be passed as property "url". The `valueQuantity` key value is checked for  in key-value pair of data.
 * If it does not receive any value, it shows blank.
 * Setting `valueField` property as true or false can help show and hide  field.
 * Setting `unitField` property as true or false can help show and hide field.
 * Setting `systemField` property as true or false can help show and hide field.
 * Setting `codeField` property as true or false can help show and hide field.

 ###### b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-observation-valuequantity
 * `value`:`Array` - used to take the input value of each field.
 
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `valueField`:`String` - shows the result of an observation. Use this property to show/hide. Default: true.
 * `unitField`:`String` - shows the unit of an observation's reesult. Use this property to show/hide. Default: true.
 * `systemField`:`String` - shows the system of an of measurement of an observation. Use this property to show/hide. Default: true
 * `codeField`:`String` - shows the code of an observation result. Use this property to show/hide. Default: false.

 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-observation-valuequantity url=""></fhir-observation-valuequantity>`
 * Without url:
  `<fhir-observation-valuequantity></fhir-observation-valuequantity>`
