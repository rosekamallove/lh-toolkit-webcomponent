# `fhir-observation`

Observations are a central element in healthcare, used to support diagnosis, monitor progress, determine baselines and patterns and even capture demographic characteristics. Most observations are simple name/value pair assertions with some metadata, but some observations group other observations together logically, or even are multi-component observations.

This element is used to represent observation resource value. This components used the `reference` and `codeable-concept` datatypes to represent some property values.

---

### `Properties of fhir-observation`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value:

```javascript
{
      identifier: [{}],
      status: '', 
      dataAbsentReason: {coding: [{ system: "", code: "", display: ""}],text: ""},
      bodySite: {coding: [{ system: "", code: "", display: ""}],text: ""}, 
      category: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      code: {coding: [{ system: "", code: "", display: ""}],text: ""},
      subject: {reference: "", display: "", type: ""},
      encounter: {reference: "", display: "", type: ""},
      effectiveDateTime: moment().format('YYYY-MM-DDThh:mm:ss'),
      valueQuantity: {value: "", unit: "", code: ""},
      component: Array(6).fill({code : {coding: [{ system: "", code: "", display: ""}],text: ""}, valueQuantity: {value: "", unit: "", code: ""}})
}
```

- `showComponent`:`String` - Used to decide if the component value will be visible, This will be used as an attribute. default value: `'true'`
- `showEffectiveDateTime`:`String` - Used to decide if the effectivedatetime value will be visible, This will be used as an attribute. default value: `'true'`
- `showEncounter`:`String` - Used to decide if the encounter value will be visible, This will be used as an attribute. default value: `'true'`
- `showSubject`:`String` - Used to decide if the subject value will be visible, This will be used as an attribute. default value: `'true'`
- `showCode`:`String` - Used to decide if the code value will be visible, This will be used as an attribute. default value: `'true'`
- `showCategory`:`String` - Used to decide if the category value will be visible, This will be used as an attribute. default value: `'true'`
- `showBodySite`:`String` - Used to decide if the bodysite value will be visible, This will be used as an attribute. default value: `'true'`
- `showDataAbsentReason`:`String` - Used to decide if the dataabsentreason value will be visible, This will be used as an attribute. default value: `'true'`
- `showStatus`:`String`- Used to decide if the status value will be visible, This will be used as an attribute. default value:`'true'`
- `showIdentifier`:`String`- Used to decide if the identifier value will be visible, This will be used as an attribute. default value:`'true'`
- `showValueQuantity`:`String`- Used to decide if the valuequantity value will be visible, This will be used as an attribute. default value:`'true'`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :
<fhir-observation value='{
    "resourceType":"Observation",
    "id":"1730440",
    "meta":{
       "versionId":"6",
       "lastUpdated":"2021-02-08T07:27:32.585+00:00",
       "source":"#sevbQmsyBYsU6Tis"
    },
    "identifier":[
       {
          "value":"9829C9DFB67B43C3B5"
       }
    ],
    "status":"final",
    "category":[
       {
          "coding":[
             {
                "system":"http://terminology.hl7.org/CodeSystem/observation-category",
                "code":"vital-signs",
                "display":"Vital Signs"
             }
          ]
       }
    ],
    "code":{
       "coding":[
          {
             "system":"http://loinc.org",
             "code":"85353-1",
             "display":"Vital signs, weight, height, head circumference, oxygen saturation and BMI panel"
          }
       ],
       "text":"Vital signs Panel"
    },
    "subject":{
       "reference":"Patient/1093760",
       "display":"James Miller"
    },
    "effectiveDateTime":"2020-08-08T00:00:00",
    "component":[
       {
          "code":{
             "coding":[
                {
                   "system":"http://loinc.org",
                   "code":"8302-2",
                   "display":"Height"
                }
             ]
          },
          "valueQuantity":{
             "value":167,
             "unit":"Inches",
             "system":"http://unitsofmeasure.org",
             "code":"[in_i]"
          },
          "referenceRange":[
             {
                "low":{
                   "unit":"Inches",
                   "system":"http://unitsofmeasure.org",
                   "code":"[in_i]"
                },
                "high":{
                   "value":78,
                   "unit":"Inches",
                   "system":"http://unitsofmeasure.org",
                   "code":"[in_i]"
                }
             }
          ]
       }
    ]
 }'></fhir-observation>

----------------------------------------------

Default element which can be used to create entries : 

<fhir-observation></fhir-observation>
```
