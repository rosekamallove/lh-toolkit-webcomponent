# `fhir-reference`

Reference always point to another resource, which has a fixed and known type. If appropriate, this type can be specified in the reference itself. In principle, the type of the target reference can be determined by resolving the reference.

This element is used to represent Reference value. As this component is a datatype, this will always be used as a part of a resource property type.

---

### `Properties of fhir-reference`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value: `{reference: "", type: "", display: ""};`
* `showType`:`String` - Used to decide if the type property will be visible, This will be used as an attribute. default value: `'false'`
* `label`:`String` - to provide the name of the resource property which uses this element. This will be used as an attribute. default value: `''`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :

<fhir-reference value='
      {
        "reference": "Location/1",
        "display": "Burgers UMC, South Wing, second floor"
      }' label="Label:"></fhir-reference>

----------------------------------------------

Default element which can be used to create entries : 

<fhir-reference></fhir-reference>
```
