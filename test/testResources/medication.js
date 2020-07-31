export default {
    "resourceType": "Medication",
    "code": {
      "coding": [
        {
          "system": "http://hl7.org/fhir/sid/ndc",
          "code": "0069-2587-10",
          "display": "Vancomycin Hydrochloride (VANCOMYCIN HYDROCHLORIDE)"
        }
      ]
    },
    "status": "active",
    "manufacturer": {
      "reference": "#org4"
    },
    "amount":{
      "numerator": {
        "value": 500,
        "system": "http://unitsofmeasure.org",
        "code": "mg"
      },
      "denominator": {
        "value": 10,
        "system": "http://unitsofmeasure.org",
        "code": "mL"
      }
    },
    "form": {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "385219001",
          "display": "Injection Solution (qualifier value)"
        }
      ]
    },
    "ingredient": [
      {
        "itemCodeableConcept": {
          "coding": [
            {
              "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
              "code": "66955",
              "display": "Vancomycin Hydrochloride"
            }
          ]
        },
        "isActive": true,
        "strength": {
          "numerator": {
            "value": 500,
            "system": "http://unitsofmeasure.org",
            "code": "mg"
          },
          "denominator": {
            "value": 10,
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      }
    ],
    "batch": {
      "lotNumber": "9494788",
      "expirationDate": "2017-05-22"
    }
  }