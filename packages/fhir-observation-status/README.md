# fhir-observation-status

The observation-status component adds the status of an observation to the page. it is commonly used with a form field. It uses mwc-select
and iron-ajax.

## Functionlity
Default : shows a selectable input field for `display`. Options includes registered,preliminary,final and amended.

##### a.GET
* It selects and option from available select options when it receives a value. value should be passed as a string.
* It can also receive value from a 'url' which can be passed as property "url". The status key value is checked for  in key-value pair of data.
* If it does not receive any matching value, it shows blank.
* Setting `obsStatus` property as true or false can help show and hide this component. 

##### b. SET
A selection of option sets the value of the component used for posting purposes.


### Properties of fhir-observation-status
 * `value`:`Array` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `obsStatus`:`String` - selectable option status of an observation. Use this property to show/hide. Default: true.
 
 #### Typical Use:
 * With url:
 `<fhir-observation-status url=""></fhir-observation-status>`
 * Without url:
  `<fhir-observation-status></fhir-observation-status>`

 #### License
 Mozilla Public License, v. 2.0.


