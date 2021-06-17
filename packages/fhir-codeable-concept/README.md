# `fhir-codeable-concept`

A CodeableConcept represents a value that is usually supplied by providing a reference to one or more terminologies or ontologies but may also be defined by the provision of text. This is a common pattern in healthcare data. 

This element is used to represent CodeableConcept value. As this component is a datatype, this will always be used as a part of a resource property type.

---

### `Properties of fhir-codeable-concept`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value: `{coding: [{ system: "", code: "", display: ""}],text: ""}`
* `showText`:`String` - Used to decide if the text property will be visible, This will be used as an attribute. default value: `'false'`
* `label`:`String` - to provide the name of the resource property which uses this element. This will be used as an attribute. default value: `''`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :

<fhir-codeable-concept value='{
    "coding": [
      {
        "code": "57",
        "display": "Immunization"
      }
    ]
  }'></fhir-codeable-concept>

----------------------------------------------

Using the element to display text : 

<fhir-codeable-concept showText="true"></fhir-codeable-concept>
```
