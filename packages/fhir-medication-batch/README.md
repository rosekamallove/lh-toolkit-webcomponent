# fhir-medication-batch

The fhir-medication-batch component adds lot number and expiration date information of a medication package to the page. ises mwc-textfield, moment and iron-ajax. Date in mm/dd/yyyy format. In typical use, just use `<fhir-medication-batch url=""></fhir-medication-batch>`

### Functionality
  Default : shows a empty mwc-textfield field for `display`. 

##### a.GET
 * It has two mwc-textfields which receives a value. `value` is passed as an Object that hold the input values for all the fields.
 * It can also receive value from a 'url' which can be passed as property "url". The `batch` key value is checked for in key-value pair of data.
  * If it does not receive any value, it shows blank.
 * Setting `lotField` and `expiryField`property as true or false shows or hide the `lot` and `expiration date` values respectively.

 ###### b. SET:
 * Typing in the value in textfield sets the value of the component used for posting purposes.

### Properties of fhir-medication-batch
* `value`:`Object` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `lotField`:`String` - the lotField shows the value of the lot number of a medication package. This property is used to show/hide field. Default is true
 * `expiryField`: `String` - the expiryField shows the expiry date of a medication package. This property is used to show/hide field. Default is true.
 
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-medication-batch url=""></fhir-medication-batch>`
 * Without url:
  `<fhir-medication-batch></fhir-medication-batch>`
