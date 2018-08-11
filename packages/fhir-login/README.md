# fhir-login

The fhir-login adds login component asking username and password to login. It uses mwc-textfield, mwc-button and iron-ajax.
It helps login to the directed location only of authentication is successful.

### Functionality
 * Default : shows an empty mwc-textfield of username and password with mwc-button field for `display`. 
 * Typing in the value in textfield sets the value of the username and password used for loggin in purposes.
 * `url` can be passed as per where the component has to make a call foe authentication.
* `relocate url` can be passed as per the path it should be directed to after authentication.
### Properties of fhir-login
 * `value`:`String` - used to take the input value of each field.
 * `url`:`String` - used to make AJAX call to FHIR resource. Default: null.
 * `relocateurl`:`String` - used to used to give path for redirection after authentication.
 ### License
 Mozilla Public License, v. 2.0.
 
 ### Typical Use:
 * With url:
 `<fhir-login url="" relocateurl="""></fhir-login>`
 * Without url:
  `<fhir-login></fhir-login>`
