export default {
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
}