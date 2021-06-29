# `fhir-medicationstatement`

A record of a medication that is being consumed by a patient. A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.

This element is used to represent medicationstatement resource value. This components used the `reference` and `codeable-concept` datatypes to represent some property values.

---

### `Properties of fhir-medicationstatement`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value:

```javascript
{
      identifier: [{}],
      status: '', 
      category: {coding: [{ system: "", code: "", display: ""}],text: ""},
      medicationCodeableConcept: {coding: [{ system: "", code: "", display: ""}],text: ""}, 
      subject: {reference: "", display: "", type: ""},
      dateAsserted: moment().format('YYYY-MM-DD'),
}
```

- `showCategory`:`String` - Used to decide if the category value will be visible, This will be used as an attribute. default value: `'true'`
- `showSubject`:`String` - Used to decide if the subject value will be visible, This will be used as an attribute. default value: `'true'`
- `showMedicationCodeableConcept`:`String` - Used to decide if the MedicationCodeableConcept value will be visible, This will be used as an attribute. default value: `'true'`
- `showDateAsserted`:`String` - Used to decide if the dateasserted value will be visible, This will be used as an attribute. default value: `'true'`
- `showStatus`:`String` - Used to decide if the status value will be visible, This will be used as an attribute. default value: `'true'`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :
<fhir-medicationstatement value='{
      "resourceType": "MedicationStatement",
      "id": "example001",
      "contained": [
        {
          "resourceType": "Medication",
          "id": "med0309",
          "code": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/sid/ndc",
                "code": "50580-506-02",
                "display": "Tylenol PM"
              }
            ]
          },
          "form": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "385057009",
                "display": "Film-coated tablet (qualifier value)"
              }
            ]
          },
          "ingredient": [
            {
              "itemCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                    "code": "315266",
                    "display": "Acetaminophen 500 MG"
                  }
                ]
              },
              "strength": {
                "numerator": {
                  "value": 500,
                  "system": "http://unitsofmeasure.org",
                  "code": "mg"
                },
                "denominator": {
                  "value": 1,
                  "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                  "code": "Tab"
                }
              }
            },
            {
              "itemCodeableConcept": {
                "coding": [
                  {
                    "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                    "code": "901813",
                    "display": "Diphenhydramine Hydrochloride 25 mg"
                  }
                ]
              },
              "strength": {
                "numerator": {
                  "value": 25,
                  "system": "http://unitsofmeasure.org",
                  "code": "mg"
                },
                "denominator": {
                  "value": 1,
                  "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                  "code": "Tab"
                }
              }
            }
          ],
          "batch": {
            "lotNumber": "9494788",
            "expirationDate": "2017-05-22"
          }
        }
      ],
      "identifier": [
        {
          "use": "official",
          "system": "http://www.bmc.nl/portal/medstatements",
          "value": "12345689"
        }
      ],
      "status": "active",
      "category": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/medication-statement-category",
            "code": "inpatient",
            "display": "Inpatient"
          }
        ]
      },
      "medicationReference": {
        "reference": "#med0309"
      },
      "subject": {
        "reference": "Patient/pat1",
        "display": "Donald Duck"
      },
      "effectiveDateTime": "2015-01-23",
      "dateAsserted": "2015-02-22",
      "informationSource": {
        "reference": "Patient/pat1",
        "display": "Donald Duck"
      },
      "derivedFrom": [
        {
          "reference": "MedicationRequest/medrx002"
        }
      ],
      "reasonCode": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "32914008",
              "display": "Restless Legs"
            }
          ]
        }
      ],
      "note": [
        {
          "text": "Patient indicates they miss the occasional dose"
        }
      ],
      "dosage": [
        {
          "sequence": 1,
          "text": "1-2 tablets once daily at bedtime as needed for restless legs",
          "additionalInstruction": [
            {
              "text": "Taking at bedtime"
            }
          ],
          "timing": {
            "repeat": {
              "frequency": 1,
              "period": 1,
              "periodUnit": "d"
            }
          },
          "asNeededCodeableConcept": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "32914008",
                "display": "Restless Legs"
              }
            ]
          },
          "route": {
            "coding": [
              {
                "system": "http://snomed.info/sct",
                "code": "26643006",
                "display": "Oral Route"
              }
            ]
          },
          "doseAndRate": [
            {
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/dose-rate-type",
                    "code": "ordered",
                    "display": "Ordered"
                  }
                ]
              },
              "doseRange": {
                "low": {
                  "value": 1,
                  "unit": "TAB",
                  "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                  "code": "TAB"
                },
                "high": {
                  "value": 2,
                  "unit": "TAB",
                  "system": "http://terminology.hl7.org/CodeSystem/v3-orderableDrugForm",
                  "code": "TAB"
                }
              }
            }
          ]
        }
      ]
    }' ></fhir-medicationstatement>

----------------------------------------------

Default element which can be used to create entries : 

<fhir-medicationstatement></fhir-medicationstatement>
```
