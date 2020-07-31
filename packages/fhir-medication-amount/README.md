# fhir-medication-amount

The fhir-medication-amount component adds the type of observation to the page. it is commonly used with a form field. It uses fhir-range and iron-ajax.

## Functionlity
Default : shows two text input fields that takes the value of the numerator and denominator of a ratio.

##### a.GET
* It has an fhir-ratio which receives a value. `value` can be passed as an object.
 * It can also receive value from a 'url' which can be passed as property "url". The `amount` key value is checked for  in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `valueField` property as true or false can help show and hide this component.
 ###### b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-medication-amount
 * `value`:`Object` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `valueField`:`String` - valueField help to fill in the the amount of a medication. Default: true 
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-medication-amount url=""></fhir-medication-amount>`
 * Without url:
  `<fhir-medication-amount></fhir-medication-amount>`
