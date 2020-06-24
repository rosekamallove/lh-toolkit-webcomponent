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
    "effectiveInstant": "2019-09-17T22:10:10.962+00:00",
    "issued": "2019-09-17T22:10:10.961+00:00",
    "effectiveDateTime": "2000-11-24T18:59:21",
    "valueQuantity": {
      "value": 82.5,
      "unit": "kg",
      "system": "http://unitsofmeasure.org",
      "code": "kg"
    }
  }