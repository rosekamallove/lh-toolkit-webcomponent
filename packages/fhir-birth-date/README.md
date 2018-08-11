# fhir-birth-date

The fhir-birth-date adds input date to the page that displays the birthdate of an individual. It is commonly used 
 as a form field. It uses datetime input and iron-ajax. The display format is mm/dd/yyyy format.

### Functionality
  Default : shows an empty date input field for `display`
 ######a. GET:
 * It displays date time when it receives a value. `value` can be passed as a string.
 * It can also receive value from a 'url' which can be passed as property "url". The `birthDate` key value is checked for  in key-value pair of data.
 * Setting `birthDate` property as true or false can help show and hide this component.
 ######b. SET:
 * An input of date value is taken as its value and used for posting purposes.

### Properties of fhir-birth-date
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `birthDate`:`String` - used to show persons date of birth. Use this property to show/hide. Default: true.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 1. Import on the page.
 2. Use the below tags:
 * With url:
 `<fhir-allergy-birth-date url=""></fhir-allergy-birth-date>`
 * Without url:
  `<fhir-allergy-birth-date></fhir-allergy-birth-date>`
