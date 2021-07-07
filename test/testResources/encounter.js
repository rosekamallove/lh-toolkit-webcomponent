export default {
  "resourceType": "Encounter",
  "id": "f201",
  "identifier": [
    {
      "use": "temp",
      "value": "Encounter_Roel_20130404"
    }
  ],
  "status": "finished",
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "AMB",
    "display": "ambulatory"
  },
  "type": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "11429006",
          "display": "Consultation"
        }
      ]
    }
  ],
  "priority": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "17621005",
        "display": "Normal"
      }
    ]
  },
  "subject": {
    "reference": "Patient/f201",
    "display": "Roel"
  },
  "participant": [
    {
      "individual": {
        "reference": "Practitioner/f201"
      }
    }
  ],
  "reasonCode": [
    {
      "text": "The patient had fever peaks over the last couple of days. He is worried about these peaks."
    }
  ],
  "serviceProvider": {
    "reference": "Organization/f201"
  }
}