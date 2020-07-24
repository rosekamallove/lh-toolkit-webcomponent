export default {
    "resourceType": "Observation",
    "id": "72",
    "meta": {
      "versionId": "1",
      "lastUpdated": "2019-09-17T22:10:10.973+00:00",
      "source": "#b8b4a0c7b0c5d231"
    },
    "status": "final",
    "code": {
      "coding": [ {
        "system": "http ://loinc.org",
        "code": "29463-7"
      } ]
    },
    "subject": {
      "reference": "Patient/66"
    },
    "encounter": {
      "reference": "Encounter/71"
    },
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "H",
            "display": "High"
          }
        ]
      }
    ],
    "category":[
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "laboratory",
            "display": "Laboratory"
          }
        ],
        "text": "Laboratory"
      }
    ],
    "effectivePeriod": {
      "start": "2013-04-02T10:30:10+01:00",
      "end": "2013-04-05T10:30:10+01:00"
    },
    "code": {
      "coding": [ {
        "system": "http://loinc.org",
        "code": "6299-2",
        "display": "Urea Nitrogen"
      } ],
      "text": "Urea Nitrogen"
    },
    "effectiveInstant": "2019-09-17T22:10:10.962+00:00",
    "issued": "2019-09-17T22:10:10.961+00:00",
    "valueDateTime": "2000-11-24T17:59:21",
    "effectiveDateTime": "2000-11-24T18:59:21",
    "valueString":"Made up value",
    "valueQuantity": {
      "value": 82.5,
      "unit": "kg",
      "system": "http://unitsofmeasure.org",
      "code": "kg"
    },
    "dataAbsentReason": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "125154007",
          "display": "Specimen unsatisfactory for evaluation"
        }
      ]
    },
    "referenceRange": [
      {
        "low": {
          "value": 64,
          "unit": "mmol/l",
          "system": "http://unitsofmeasure.org",
          "code": "mmol/L"
        },
        "high": {
          "value": 104,
          "unit": "mmol/l",
          "system": "http://unitsofmeasure.org",
          "code": "mmol/L"
        },
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/referencerange-meaning",
              "code": "normal",
              "display": "Normal Range"
            }
          ]
          
        },
          "text": "made up text",
          "age":{"low":{"value": 15}, "high":{"value": 25}}
  
      }
    ]
  }