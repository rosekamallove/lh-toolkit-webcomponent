# `fhir-encounter`

A patient encounter is further characterized by the setting in which it takes place. Amongst them are ambulatory, emergency, home health, inpatient and virtual encounters.

This element is used to represent Schedule resource value. This components used the `reference` and `codeable-concept` datatypes to represent some property values.

---

### `Properties of fhir-reference`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value:

```javascript
{
      identifier: [{}],
      status: '', 
      type: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      appointment: [{reference: "", display: "", type: ""}],
      subject: {reference: "", display: "", type: ""},
      participant: [{type: [{coding: [{ system: "", code: "", display: ""}],text: ""}], 
                    period: {start: moment().toISOString(), end: moment().toISOString()}, 
                    individual: {reference: "", display: "", type: ""}}]
}
```

- `showType`:`String` - Used to decide if the type value will be visible, This will be used as an attribute. default value: `'true'`
- `showAppointment`:`String` - Used to decide if the appointment value will be visible, This will be used as an attribute. default value: `'true'`
- `showSubject`:`String` - Used to decide if the subject value will be visible, This will be used as an attribute. default value: `'true'`
- `showIdentifier`:`String` - Used to decide if the identifier value will be visible, This will be used as an attribute. default value: `'true'`
- `showStatus`:`String` - Used to decide if the status value will be visible, This will be used as an attribute. default value: `'true'`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :

<fhir-encounter value='{
      "resourceType": "Encounter",
      "id": "f201",
      "identifier": [
        {
          "use": "temp",
          "value": "Encounter_Roel_20130404"
        }
      ],
      "status": "finished",
      "class": {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        "code": "AMB",
        "display": "ambulatory"
      },
      "type": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "11429006",
              "display": "Consultation"
            }
          ]
        }
      ],
      "priority": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "17621005",
            "display": "Normal"
          }
        ]
      },
      "subject": {
        "reference": "Patient/f201",
        "display": "Roel"
      },
      "participant": [
        {
          "individual": {
            "reference": "Practitioner/f201"
          }
        }
      ],
      "reasonCode": [
        {
          "text": "The patient had fever peaks over the last couple of days. He is worried about these peaks."
        }
      ],
      "serviceProvider": {
        "reference": "Organization/f201"
      }
    }'></fhir-encounter>
----------------------------------------------

Default element which can be used to create entries : 

<fhir-encounter></fhir-encounter>
```
