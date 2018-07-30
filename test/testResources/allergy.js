export default {
    "resourceType": "AllergyIntolerance",
    "id": "1726380",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2018-03-26T07:48:40.027+00:00",
        "profile": [
            "http://standardhealthrecord.org/fhir/StructureDefinition/shr-allergy-AllergyIntolerance"
        ]
    },
    "modifierExtension": [
        {
            "url": "http://standardhealthrecord.org/fhir/StructureDefinition/shr-base-NonOccurrenceModifier-extension"
        }
    ],
    "clinicalStatus": "active",
    "verificationStatus": "confirmed",
    "type": "allergy",
    "severity": "moderate",
    "note" : [{"text": "The patient reports that the onset of urticaria was within 15 minutes of eating cashews."}],
    "category": [
        "food"
    ],
    "criticality": "low",
    "code": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "91934008",
                "display": "Allergy to nut"
            }
        ]
    },
    "patient": {
        "reference": "Patient/1726131"
    },
    "onsetDateTime": "2002-07-30T15:00:34",
    "assertedDate": "2002-07-30T15:00:34",
    "lastOccurance" : "2002-07-30T15:00:34"
}