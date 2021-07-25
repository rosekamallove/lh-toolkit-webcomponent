export default {
  "resourceType": "ServiceRequest",
  "id": "lipid",
  "identifier": [
    {
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
            "code": "PLAC"
          }
        ],
        "text": "Placer"
      },
      "system": "urn:oid:1.3.4.5.6.7",
      "value": "2345234234234"
    }
  ],
  "status": "active",
  "intent": "original-order",
  "code": {
    "coding": [
      {
        "system": "http://acme.org/tests",
        "code": "LIPID"
      }
    ],
    "text": "Lipid Panel"
  },
  "subject": {
    "reference": "Patient/example"
  },
  "encounter": {
    "reference": "Encounter/example"
  },
  "occurrenceDateTime": "2013-05-02T16:16:00-07:00",
  "requester": {
    "reference": "Practitioner/example"
  },
  "performer": [
    {
      "reference": "Practitioner/f202"
    }
  ],
  "reasonCode": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/icd-9",
          "code": "V173",
          "display": "Fam hx-ischem heart dis"
        }
      ]
    }
  ],
  "supportingInfo": [
    {
      "reference": "#fasting",
      "display": "Fasting status"
    }
  ],
  "specimen": [
    {
      "reference": "#serum",
      "display": "Serum specimen"
    }
  ],
  "note": [
    {
      "text": "patient is afraid of needles"
    }
  ]
}