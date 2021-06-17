# `fhir-schedule`

Schedule resources provide a container for time-slots that can be booked using an appointment. It provides the window of time (period) that slots are defined for and what type of appointments can be booked.

This element is used to represent Schedule resource value. This components used the `reference` and `codeable-concept` datatypes to represent some property values.

---

### `Properties of fhir-reference`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value:

```javascript
{
      identifier: [{}], 
      active: false, 
      serviceCategory: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      serviceType: [{coding: [{ system: "", code: "", display: ""}],text: ""}], 
      specialty: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      actor: [{reference: "", display: "", type: ""}],
      comment: '',
      planningHorizon: {start: moment().toISOString(), end: moment().toISOString()}
    }
```


- `showComment`:`String` - Used to decide if the comment value will be visible, This will be used as an attribute. default value: `'true'`
- `showActor`:`String` - Used to decide if the actor value will be visible, This will be used as an attribute. default value: `'true'`
- `showServiceCategory`:`String` - Used to decide if the serviceCategory value will be visible, This will be used as an attribute. default value: `'true'`
- `showServiceType`:`String` - Used to decide if the serviceType value will be visible, This will be used as an attribute. default value: `'true'`
- `showSpecialty`:`String` - Used to decide if the specialty value will be visible, This will be used as an attribute. default value: `'true'`
- `showPlanningHorizon`:`String` - Used to decide if the planningHorizon value will be visible, This will be used as an attribute. default value: `'true'`
- `showIdentifier`:`String` - Used to decide if the identifier value will be visible, This will be used as an attribute. default value: `'true'`
- `showActiveStatus`:`String` - Used to decide if the active value will be visible, This will be used as an attribute. default value: `'true'`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :

<fhir-schedule value='{
    "resourceType": "Schedule",
    "id": "example",
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      Burgers UMC, South Wing, second floor Physiotherapy Schedule\n    </div>"
    },
    "identifier": [
      {
        "use": "usual",
        "system": "http://example.org/scheduleid",
        "value": "45"
      }
    ],
    "active": true,
    "serviceCategory": [
      {
        "coding": [
          {
            "code": "17",
            "display": "General Practice"
          }
        ]
      }
    ],
    "serviceType": [
      {
        "coding": [
          {
            "code": "57",
            "display": "Immunization"
          }
        ]
      }
    ],
    "specialty": [
      {
        "coding": [
          {
            "code": "408480009",
            "display": "Clinical immunology"
          }
        ]
      }
    ],
    "actor": [
      {
        "reference": "Location/1",
        "display": "Burgers UMC, South Wing, second floor"
      }
    ],
    "planningHorizon": {
      "start": "2013-12-25T09:15:00Z",
      "end": "2013-12-25T09:30:00Z"
    },
    "comment": "The slots attached to this schedule should be specialized to cover immunizations within the clinic"
  }' ></fhir-schedule>
----------------------------------------------

Default element which can be used to create entries : 

<fhir-schedule></fhir-schedule>
```
