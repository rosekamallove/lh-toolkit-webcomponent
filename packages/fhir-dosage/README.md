# `fhir-dosage`

This element is used to represent dosage value. This will always be used as a part of a resource property type.

---

### `Properties of fhir-dosage`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value:

  ```javascript
  {
    sequence: 0,
    text: '', 
    additionalInstruction: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
  }
  ````
* `label`:`String` - to provide the name of the resource property which uses this element. This will be used as an attribute. default value: `''`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :

<fhir-dosage value='{
      "sequence": 1,
      "text": "Two tablets at once",
      "additionalInstruction": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "311504000",
              "display": "With or after food"
            }
          ]
        }
      ],
      "timing": {
        "repeat": {
          "frequency": 1,
          "period": 1,
          "periodUnit": "d"
        }
      },
      "route": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "26643006",
            "display": "Oral Route"
          }
        ]
      }
    }' ></fhir-dosage>
----------------------------------------------

Default element which can be used to create entries : 

<fhir-dosage></fhir-dosage>
```
