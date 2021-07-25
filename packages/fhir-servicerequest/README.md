# `fhir-appointment`

ServiceRequest is a record of a request for a procedure or diagnostic or other service to be planned, proposed, or performed, as distinguished by the `ServiceRequest.intent` field value, with or on a patient.

This element is used to represent servicerequest resource value. This components used the `reference` and `codeable-concept` datatypes to represent some property values.

---

### `Properties of fhir-servicerequest`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value:

```javascript
{
      identifier: [{}],
      status: '', 
      intent: '',
      code: {coding: [{ system: "", code: "", display: ""}],text: ""},
      performer: [{reference: "", display: "", type: ""}],
      subject: {reference: "", display: "", type: ""},
      encounter: {reference: "", display: "", type: ""},
      occurrenceDateTime: moment().format('YYYY-MM-DDThh:mm:ss'),
}
```

- `showOccurrenceDateTime`:`String` - Used to decide if the OccurrenceDateTime value will be visible, This will be used as an attribute. default value: `'true'`
- `showEncounter`:`String` - Used to decide if the encounter value will be visible, This will be used as an attribute. default value: `'true'`
- `showSubject`:`String` - Used to decide if the subject value will be visible, This will be used as an attribute. default value: `'true'`
- `showPerformer`:`String` - Used to decide if the performer value will be visible, This will be used as an attribute. default value: `'true'`
- `showCode`:`String` - Used to decide if the code value will be visible, This will be used as an attribute. default value: `'true'`
- `showIdentifier`:`String` - Used to decide if the identifier value will be visible, This will be used as an attribute. default value: `'true'`
- `showIntent`:`String` - Used to decide if the intent value will be visible, This will be used as an attribute. default value: `'true'`
- `showStatus`:`String` - Used to decide if the status value will be visible, This will be used as an attribute. default value: `'true'`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :
<fhir-servicerequest value='{
      "resourceType": "ServiceRequest",
      "id": "lipid",
      "identifier": [
        {
          "type": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                "code": "PLAC"
              }
            ],
            "text": "Placer"
          },
          "system": "urn:oid:1.3.4.5.6.7",
          "value": "2345234234234"
        }
      ],
      "status": "active",
      "intent": "original-order",
      "code": {
        "coding": [
          {
            "system": "http://acme.org/tests",
            "code": "LIPID"
          }
        ],
        "text": "Lipid Panel"
      },
      "subject": {
        "reference": "Patient/example"
      },
      "encounter": {
        "reference": "Encounter/example"
      },
      "occurrenceDateTime": "2013-05-02T16:16:00-07:00",
      "requester": {
        "reference": "Practitioner/example"
      },
      "performer": [
        {
          "reference": "Practitioner/f202"
        }
      ],
      "reasonCode": [
        {
          "coding": [
            {
              "system": "http://hl7.org/fhir/sid/icd-9",
              "code": "V173",
              "display": "Fam hx-ischem heart dis"
            }
          ]
        }
      ],
      "supportingInfo": [
        {
          "reference": "#fasting",
          "display": "Fasting status"
        }
      ],
      "specimen": [
        {
          "reference": "#serum",
          "display": "Serum specimen"
        }
      ],
      "note": [
        {
          "text": "patient is afraid of needles"
        }
      ]
    }' ></fhir-servicerequest>

----------------------------------------------

Default element which can be used to create entries : 

<fhir-servicerequest></fhir-servicerequest>
```
