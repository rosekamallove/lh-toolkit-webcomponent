# `fhir-allergyintolerance`

A record of a clinical assessment of an allergy or intolerance; a propensity, or a potential risk to an individual, to have an adverse reaction on future exposure to the specified substance, or class of substance.

This element is used to represent allergyintolerance resource value. This components used the `codeable-concept` datatype to represent some property values.

---

### `Properties of fhir-allergyintolerance`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value:

```javascript
 {
      identifier: [{}],
      type: '', 
      criticality: '',
      encounter: {reference: "", display: "", type: ""},
      patient: {reference: "", display: "", type: ""},
      clinicalStatus: {coding: [{ system: "", code: "", display: ""}],text: ""},
      verificationStatus: {coding: [{ system: "", code: "", display: ""}],text: ""}, 
      lastOccurrence: moment().format('YYYY-MM-DDThh:mm:ss[Z]'),
 }
```

- `showCriticality`:`String` - Used to decide if the Criticality value will be visible, This will be used as an attribute. default value: `'true'`
- `showType`:`String` - Used to decide if the Type value will be visible, This will be used as an attribute. default value: `'true'`
- `showVerficationStatus`:`String` - Used to decide if the VerficationStatus value will be visible, This will be used as an attribute. default value: `'true'`
- `showClinicalStatus`:`String` - Used to decide if the ClinicalStatus value will be visible, This will be used as an attribute. default value: `'true'`
- `showLastOccurrence`:`String` - Used to decide if the LastOccurrence value will be visible, This will be used as an attribute. default value: `'true'`
- `showIdentifier`:`String` - Used to decide if the identifier value will be visible, This will be used as an attribute. default value: `'true'`
- `showPatient`:`String` - Used to decide if the patient value will be visible, This will be used as an attribute. default value: `'true'`
- `showEncounter`:`String` - Used to decide if the encounter value will be visible, This will be used as an attribute. default value: `'true'`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :
<fhir-allergyintolerance value='{
      "resourceType": "AllergyIntolerance",
      "id": "example",
      "identifier": [
        {
          "system": "http://acme.com/ids/patients/risks",
          "value": "49476534"
        }
      ],
      "clinicalStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
            "code": "active",
            "display": "Active"
          }
        ]
      },
      "verificationStatus": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
            "code": "confirmed",
            "display": "Confirmed"
          }
        ]
      },
      "type": "allergy",
      "category": [
        "food"
      ],
      "criticality": "high",
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "227493005",
            "display": "Cashew nuts"
          }
        ]
      },
      "patient": {
        "reference": "Patient/example"
      },
      "onsetDateTime": "2004",
      "recordedDate": "2014-10-09T14:58:00+11:00",
      "recorder": {
        "reference": "Practitioner/example"
      },
      "asserter": {
        "reference": "Patient/example"
      },
      "lastOccurrence": "2012-06",
      "note": [
        {
          "text": "The criticality is high becasue of the observed anaphylactic reaction when challenged with cashew extract."
        }
      ],
      "reaction": [
        {
          "substance": {
            "coding": [
              {
                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                "code": "1160593",
                "display": "cashew nut allergenic extract Injectable Product"
              }
            ]
          },
          "manifestation": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "39579001",
                  "display": "Anaphylactic reaction"
                }
              ]
            }
          ],
          "description": "Challenge Protocol. Severe reaction to subcutaneous cashew extract. Epinephrine administered",
          "onset": "2012-06-12",
          "severity": "severe",
          "exposureRoute": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "34206005",
                "display": "Subcutaneous route"
              }
            ]
          }
        },
        {
          "manifestation": [
            {
              "coding": [
                {
                  "system": "http://snomed.info/sct",
                  "code": "64305001",
                  "display": "Urticaria"
                }
              ]
            }
          ],
          "onset": "2004",
          "severity": "moderate",
          "note": [
            {
              "text": "The patient reports that the onset of urticaria was within 15 minutes of eating cashews."
            }
          ]
        }
      ]
    }'></fhir-allergyintolerance>

----------------------------------------------

Default element which can be used to create entries : 

<fhir-allergyintolerance></fhir-allergyintolerance>
```
