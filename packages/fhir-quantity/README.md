# `fhir-quantity`

A measured amount (or an amount that can potentially be measured).

This element is used to represent quantity value. As this component is a datatype, this will always be used as a part of a resource property type.

---

### `Properties of fhir-quantity`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value: `{value: "", comparator: "", unit: "", system: "", code: ""}`
* `showComparator`:`String` - Used to decide if the comparator property will be visible, This will be used as an attribute. default value: `'false'`
* `showSystem`:`String` - Used to decide if the system property will be visible, This will be used as an attribute. default value: `'false'
* `label`:`String` - to provide the name of the resource property which uses this element. This will be used as an attribute. default value: `''`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :

  <fhir-quantity value='
      {
        "value":167,
        "unit":"Inches",
        "system":"http://unitsofmeasure.org",
        "code":"[in_i]"
    }' label="Label:"></fhir-quantity>

----------------------------------------------

Default element which can be used to create entries : 

<fhir-quantity></fhir-quantity>
```
