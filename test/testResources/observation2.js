export default {
    "resourceType": "Observation",
    "id": "72",
    "meta": {
      "versionId": "1",
      "lastUpdated": "2019-09-17T22:10:10.973+00:00",
      "source": "#b8b4a0c7b0c5d231"
    },"status": "entered-in-error",
    "category": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/observation-category",
            "code": "vital-signs",
            "display": "Vital Signs"
          }
        ]
      }
    ],
    "code": {
      "coding": [
        {
          "system": "http://acme.lab",
          "code": "BT",
          "display": "Body temperature"
        },
        {
          "system": "http://loinc.org",
          "code": "8310-5",
          "display": "Body temperature"
        },
        {
          "system": "http://loinc.org",
          "code": "8331-1",
          "display": "Oral temperature"
        },
        {
          "system": "http://snomed.info/sct",
          "code": "56342008",
          "display": "Temperature taking"
        }
      ],
      "text": "Temperature"
    },
    "subject": {
      "reference": "Patient/f201",
      "display": "Roel"
    },
    "issued": "2013-04-04T13:27:00+01:00",
    "performer": [
      {
        "reference": "Practitioner/f201"
      }
    ],
    "valueQuantity": {
      "value": 39,
      "unit": "degrees C",
      "system": "http://unitsofmeasure.org",
      "code": "Cel"
    },
    "interpretation": [
      {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
            "code": "H"
          }
        ]
      }
    ],
    "bodySite": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "74262004",
          "display": "Oral cavity"
        }
      ]
    },"dataAbsentReason": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "125154007",
          "display": "Specimen unsatisfactory for evaluation"
        }
      ]
    },
    "note": [
      {
        "text": "Tube broken in transit and sample leaked"
      }
    ],
    "method": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "89003005",
          "display": "Oral temperature taking"
        }
      ]
    },
    "referenceRange": [
      {
        "high": {
          "value": 38.2,
          "unit": "degrees C"
        }
      }
    ]
  }