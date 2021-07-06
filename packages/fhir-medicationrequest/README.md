# `fhir-medicationrequest`

An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.

This element is used to represent medicationrequest resource value. This components used the`reference` datatype to represent some property values.

---

### `Properties of fhir-medicationrequest`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value:

```javascript
{
      identifier: [{}],
      status: '', 
      intent: '',
      subject: {reference: "", display: "", type: ""},
      encounter: {reference: "", display: "", type: ""},
      medicationReference: {reference: "", display: "", type: ""},
      authoredOn: moment().utc().format('YYYY-MM-DD'),
      dosageInstruction: [{sequence: 0, text: '', additionalInstruction: [{coding: [{ system: "", code: "", display: ""}],text: ""}]}]
}
```

- `showAuthoredOn`:`String` - Used to decide if the AuthoredOn value will be visible, This will be used as an attribute. default value: `'true'`
- `showEncounter`:`String` - Used to decide if the Encounter value will be visible, This will be used as an attribute. default value: `'true'`
- `showSubject`:`String` - Used to decide if the Subject value will be visible, This will be used as an attribute. default value: `'true'`
- `showIntent`:`String` - Used to decide if the Intent value will be visible, This will be used as an attribute. default value: `'true'`
- `showStatus`:`String` - Used to decide if the Status value will be visible, This will be used as an attribute. default value: `'true'`
- `showIdentifier`:`String` - Used to decide if the identifier value will be visible, This will be used as an attribute. default value: `'true'`
- `showMedicationReference`:`String` - Used to decide if the MedicationReference value will be visible, This will be used as an attribute. default value: `'true'`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :
<fhir-medicationrequest value='{
      "resourceType": "MedicationRequest",
      "id": "medrx002",
      "identifier": [
        {
          "use": "official",
          "system": "http://www.bmc.nl/portal/prescriptions",
          "value": "12345"
        }
      ],
      "status": "active",
      "intent": "order",
      "medicationReference": {
        "reference": "Medication/med0316",
        "display": "prescribed medication"
      },
      "subject": {
        "reference": "Patient/pat1",
        "display": "Donald Duck"
      },
      "encounter": {
        "reference": "Encounter/f001",
        "display": "encounter that leads to this prescription"
      },
      "authoredOn": "2015-03-01",
      "requester": {
        "reference": "Practitioner/f007",
        "display": "Patrick Pump"
      },
      "reasonCode": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "59621000",
              "display": "Essential hypertension (disorder)"
            }
          ]
        }
      ],
      "dosageInstruction": [
        {
          "sequence": 1,
          "text": "Take one tablet daily as directed"
        }
      ]
    }' ></fhir-medicationrequest>

----------------------------------------------

Default element which can be used to create entries : 

<fhir-medicationrequest ></fhir-medicationrequest >
```
