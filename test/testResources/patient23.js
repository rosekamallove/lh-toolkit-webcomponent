export default {
    "resourceType": "Patient",
    "meta": {
        "versionId": "10",
        "lastUpdated": "2018-05-24T19:48:30.719+00:00"
    },
    "active": false,
    "name": [
        {
            "given": [
                "James"
            ],
            "prefix": "Sr",
            "family": "Bond"
        }
    ],
    "telecom": [
        {
            "system": "phone",
            "value": "734 483 8464",
            "use": "home",
            "_use": {
                "fhir_comments": [
                    " thông tin liên lạc qua điện thoại cố định với hộ gia đình không có "
                ]
            },
            "rank": 1
        },
        {
            "system": "phone",
            "value": "0982344522",
            "use": "home",
            "rank": 1
        },
        {
            "system": "phone",
            "value": "0168354123",
            "use": "mobile",
            "rank": 2
        },
        {
            "system": "phone",
            "value": "05784752234",
            "use": "mobile",
            "period": {
                "end": "2014"
            }
        },
        {
            "system": "phone",
            "value": "856-555-1212",
            "use": "home"
        },
        {
            "system": "phone",
            "value": "856-555-1212",
            "use": "home"
        }
    ],
    "gender": "male",
    "birthDate": "2000-02-10",
    "deceasedBoolean": false,
    "address": [
        {
            "use": "home",
            "type": "both",
            "text": "Heloo Bhavesh",
            "line": [
                "489 Láng"
            ],
            "city": "Hà Nội",
            "district": "Đống Đa",
            "period": {
                "start": "1974-12-25",
                "end": "2018-01-01"
            }
        }
    ],
    "contact": [
        {
            "relationship": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/v2/0131",
                            "code": "N"
                        }
                    ]
                }
            ],
            "name": {
                "family": "Vũ",
                "given": [
                    "Thị Hậu"
                ]
            },
            "telecom": [
                {
                    "system": "phone",
                    "value": "0973123456"
                }
            ],
            "address": {
                "use": "home",
                "type": "both",
                "line": [
                    "489 Láng"
                ],
                "city": "Hà Nội",
                "district": "Đống Đa",
                "period": {
                    "start": "1974-12-25",
                    "end": "2018-01-01"
                }
            },
            "gender": "female",
            "period": {
                "start": "2012"
            }
        }
    ]
}