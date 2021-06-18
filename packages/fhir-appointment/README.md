# `fhir-appointment`

Appointment resources are used to provide information about a planned meeting that may be in the future or past. This definition takes the concepts of appointments in a clinical setting and also extends them to be relevant in the community healthcare space, and to ease exposure to other appointment / calendar standards widely used outside of healthcare.

This element is used to represent Appointment resource value. This components used the `reference` and `codeable-concept` datatypes to represent some property values.

---

### `Properties of fhir-appointment`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value:

```javascript
{
      identifier: [{}],
      status: '', 
      serviceCategory: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      serviceType: [{coding: [{ system: "", code: "", display: ""}],text: ""}], 
      specialty: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      appointmentType: {coding: [{ system: "", code: "", display: ""}],text: ""},
      slot: [{reference: "", display: "", type: ""}],
      comment: '',
      start: moment().format('YYYY-MM-DDThh:mm:ss[Z]'),
      end: moment().format('YYYY-MM-DDThh:mm:ss[Z]'),
      participant: [{type: [{coding: [{ system: "", code: "", display: ""}],text: ""}], status: '', actor: {reference: "", display: "", type: ""}}]
}
```

- `showComment`:`String` - Used to decide if the comment value will be visible, This will be used as an attribute. default value: `'true'`
- `showStart`:`String` - Used to decide if the start value will be visible, This will be used as an attribute. default value: `'true'`
- `showServiceCategory`:`String` - Used to decide if the serviceCategory value will be visible, This will be used as an attribute. default value: `'true'`
- `showServiceType`:`String` - Used to decide if the serviceType value will be visible, This will be used as an attribute. default value: `'true'`
- `showSpecialty`:`String` - Used to decide if the specialty value will be visible, This will be used as an attribute. default value: `'true'`
- `showIdentifier`:`String` - Used to decide if the identifier value will be visible, This will be used as an attribute. default value: `'true'`
- `showEnd`:`String` - Used to decide if the end value will be visible, This will be used as an attribute. default value: `'true'`
- `showStatus`:`String` - Used to decide if the status value will be visible, This will be used as an attribute. default value: `'true'`
- `showSlot`:`String`- Used to decide if the slot value will be visible, This will be used as an attribute. default value:`'true'`
- `showAppointmentType`:`String`- Used to decide if the appointmentType value will be visible, This will be used as an attribute. default value:`'true'`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :
<fhir-appointment value='{
  "resourceType": "Appointment",
  "id": "1863246",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2021-02-23T15:02:48.970+00:00",
    "source": "#C9aEgDG4DGBfLkKu"
  },
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div>Investigate Angina</div><div>Clarence cardiology clinic</div></div>"
  },
  "status": "pending",
  "description": "Investigate Angina",
  "start": "2021-02-27T16:02:48+01:00",
  "end": "2021-02-27T16:17:48+01:00",
  "minutesDuration": 15,
  "participant": [ {
    "actor": {
      "display": "Clarence cardiology clinic"
    },
    "status": "accepted"
  }, {
    "actor": {
      "reference": "Patient/1863173"
    },
    "status": "accepted"
  } ]
}' ></fhir-appointment>

----------------------------------------------

Default element which can be used to create entries : 

<fhir-appointment></fhir-appointment>
```
