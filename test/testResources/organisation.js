export default {
    "resourceType": "Organization",
    "id": "359",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2019-09-18T08:14:09.530 00:00",
        "source": "#73a1dcaeaa64b276"
    },
    "identifier": [{
        "use": "official",
        "system": "Pharmacy CIP Code",
        "value": "2141253"
    }, {
        "use": "secondary",
        "system": "Pharmacy Finess Code",
        "value": "542025598"
    }],
    "active": true,
    "type": [{
        "coding": [{
            "system": "http://terminology.hl7.org/CodeSystem/organization-type",
            "code": "prov",
            "display": "Healthcare Provider"
        }]
    }],
    "name": "PHARMACIE DU GINKGO",
    "telecom": [{
        "system": "email",
        "value": "pharmacieduginkgo@yahoo.fr"
    }],
    "address": [{
        "city": "NANCY",
        "district": "North",
    }],
    "contact": [{
        "purpose": {
            "coding": [{
                "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
                "code": "ADMIN",
                "display": "Administrative"
            }]
        },
        "name": {
            "use": "official",
            "text": "Ivana Turner",
            "family": "Turner",
            "given": ["Ivana"]
        },
        "telecom": [{
            "extension": [{
                "url": "http://hl7.org/fhir/uv/vhdir/StructureDefinition/contactpoint-availabletime",
                "extension": [{
                    "url": "daysOfWeek",
                    "valueCode": "mon"
                }, {
                    "url": "daysOfWeek",
                    "valueCode": "tue"
                }, {
                    "url": "daysOfWeek",
                    "valueCode": "wed"
                }, {
                    "url": "daysOfWeek",
                    "valueCode": "thu"
                }, {
                    "url": "daysOfWeek",
                    "valueCode": "fri"
                }, {
                    "url": "availableStartTime",
                    "valueTime": "07:00:00"
                }, {
                    "url": "availableEndTime",
                    "valueTime": "18:00:00"
                }]
            }],
            "system": "phone",
            "value": "(496) 923-9751 x232",
            "use": "work"
        }],
        "address": {
            "use": "work",
            "type": "both",
            "text": "690 Asylum Avenue, Hartford, CT 06101",
            "line": ["690 Asylum Avenue"],
            "city": "Hartford",
            "state": "CT",
            "postalCode": "06101",
            "country": "USA"
        }
    }]
}