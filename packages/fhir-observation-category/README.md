# fhir-observation-category

The fhir-observation-category component adds the type of observation to the page. it is commonly used with a form field. It uses mwc-select
and iron-ajax.

## Functionlity
Default : shows a selectable input field for `display`. Options  Social-history,vital-signs, imaging, laboratory,Procedure, Survey,Exam, Theory and activity.

##### a.GET
* It selects and option from available select options when it receives a value. value should be passed as a string.
* It can also receive value from a 'url' which can be passed as property "url". The category key value is checked for  in key-value pair of data.
* If it does not receive any matching value, it shows blank.
* Setting `obsCat` property as true or false can help show and hide this component. 

##### b. SET
A selection of option sets the value of the component used for posting purposes.


### Properties of fhir-observation-category
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `obsCat`:`String` - selectable option category of an observation. Use this property to show/hide. Default: true.
 
 #### Typical Use:
 * With url:
 `<fhir-observation-category url=""></fhir-observation-category>`
 * Without url:
  `<fhir-observation-category></fhir-observation-category>`

 #### License
 Mozilla Public License, v. 2.0.


