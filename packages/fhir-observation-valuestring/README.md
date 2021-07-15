# fhir-observation-valuestring

The observation-valuestring adds the actual observation result of a string type to page. it is commonly used with a form field. It uses mwc-textfield and iron-ajax.

## Functionlity
Default : shows a input field for `valuestring`.

##### a.GET
* It displays date time when it receives a value. `value` can be passed as a string.
* It can also receive value from a 'url' which can be passed as property "url". The `valueString` key value is checked for  in key-value pair of data.
* If it does not receive any matching value, it shows blank.
* Setting `valuestringField` property as true or false can help show and hide this component. 

##### b. SET
An input of a string value is taken as its value and used for posting purposes


### Properties of fhir-observation-valuestring
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `valuestringField`:`String` - shows the value of the observation valuestring. Used to hide/show the value. default value is "true" 
 
 #### Typical Use:
 * With url:
 `<fhir-observation-valuestring url=""></fhir-observation-valuestring>`
 * Without url:
  `<fhir-observation-valuestring></fhir-observation-valuestring>`

 #### License
 Mozilla Public License, v. 2.0.


