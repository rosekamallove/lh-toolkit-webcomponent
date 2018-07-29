export default{
    "resourceType": "Bundle",
    "id": "7799c905-0125-41a0-9165-340763d59f",
    "meta": {
    "lastUpdated": "2018-07-12T18:52:36Z"
},
    "type": "searchset",
    "total": 11,
    "link": [
    {
        "relation": "self",
        "url": "http:\/\/test.fhir.org\/r3\/Patient?_format=application\/fhir+json&search-id=50656b2f-f18a-427b-be0c-cee42e8ba7&&name=par&_sort=_id"
    }
],
    "entry": [
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/277",
        "resource": {
            "resourceType": "Patient",
            "id": "277",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2017-11-28T08:33:33Z"
            },
            "text": {
                "status": "generated",
                "div": "<div xmlns=\"http:\/\/www.w3.org\/1999\/xhtml\">Parker, Francisco. MRN:&#10;          577596<\/div>"
            },
            "identifier": [
                {
                    "type": {
                        "coding": [
                            {
                                "system": "http:\/\/hl7.org\/fhir\/v2\/0203",
                                "code": "SS"
                            }
                        ]
                    },
                    "system": "https:\/\/github.com\/projectcypress\/cypress\/patient",
                    "value": "577596"
                }
            ],
            "active": true,
            "name": [
                {
                    "use": "official",
                    "family": "Parker",
                    "given": [
                        "Francisco"
                    ]
                }
            ],
            "gender": "male",
            "birthDate": "1973-12-04",
            "managingOrganization": {
                "reference": "Organization\/1"
            }
        },
        "search": {
            "mode": "match"
        }
    },
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/726881",
        "resource": {
            "resourceType": "Patient",
            "id": "726881",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2018-02-18T09:05:26Z"
            },
            "name": [
                {
                    "family": "Parker2",
                    "given": [
                        "Peter2"
                    ]
                }
            ]
        },
        "search": {
            "mode": "match"
        }
    },
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/726882",
        "resource": {
            "resourceType": "Patient",
            "id": "726882",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2018-02-18T09:10:09Z"
            },
            "name": [
                {
                    "family": "Parker2",
                    "given": [
                        "Peter2"
                    ]
                }
            ]
        },
        "search": {
            "mode": "match"
        }
    },
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/726913",
        "resource": {
            "resourceType": "Patient",
            "id": "726913",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2018-02-25T16:28:42Z"
            },
            "name": [
                {
                    "family": "Parker4",
                    "given": [
                        "Peter4"
                    ]
                }
            ]
        },
        "search": {
            "mode": "match"
        }
    },
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/726914",
        "resource": {
            "resourceType": "Patient",
            "id": "726914",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2018-02-25T16:30:04Z"
            },
            "identifier": [
                {
                    "use": "usual",
                    "system": "urn:oid:2.16.840.1.113883.2.9.4.3.2",
                    "value": "PRKPTR65M15C107R",
                    "period": {
                        "start": "1965-08-15"
                    },
                    "assigner": {
                        "display": "Ministero Economia e Finanze"
                    }
                }
            ],
            "name": [
                {
                    "family": "Parker4",
                    "given": [
                        "Peter4"
                    ]
                }
            ]
        },
        "search": {
            "mode": "match"
        }
    },
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/726915",
        "resource": {
            "resourceType": "Patient",
            "id": "726915",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2018-02-25T16:39:25Z"
            },
            "identifier": [
                {
                    "use": "usual",
                    "type": {
                        "coding": [
                            {
                                "system": "http:\/\/hl7.org\/fhir\/v2\/0203",
                                "code": "MR"
                            }
                        ]
                    },
                    "system": "urn:oid:2.16.840.1.113883.2.9.4.3.2",
                    "value": "PRKPTR65M15C107R",
                    "period": {
                        "start": "1965-08-15"
                    },
                    "assigner": {
                        "display": "Ministero Economia e Finanze"
                    }
                }
            ],
            "name": [
                {
                    "family": "Parker4",
                    "given": [
                        "Peter4"
                    ]
                }
            ]
        },
        "search": {
            "mode": "match"
        }
    },
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/726916",
        "resource": {
            "resourceType": "Patient",
            "id": "726916",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2018-02-25T16:40:36Z"
            },
            "identifier": [
                {
                    "use": "usual",
                    "type": {
                        "coding": [
                            {
                                "system": "http:\/\/hl7.org\/fhir\/v2\/0203",
                                "code": "MR"
                            }
                        ]
                    },
                    "system": "urn:oid:2.16.840.1.113883.2.9.4.3.2",
                    "value": "PRKPTR65M15C107R",
                    "period": {
                        "start": "1965-08-15"
                    },
                    "assigner": {
                        "display": "Ministero Economia e Finanze"
                    }
                }
            ],
            "name": [
                {
                    "family": "Parker4",
                    "given": [
                        "Peter4"
                    ]
                }
            ]
        },
        "search": {
            "mode": "match"
        }
    },
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/726917",
        "resource": {
            "resourceType": "Patient",
            "id": "726917",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2018-02-25T16:41:21Z"
            },
            "identifier": [
                {
                    "use": "usual",
                    "type": {
                        "coding": [
                            {
                                "system": "http:\/\/hl7.org\/fhir\/v2\/0203",
                                "code": "MR"
                            }
                        ]
                    },
                    "system": "urn:oid:2.16.840.1.113883.2.9.4.3.2",
                    "value": "PRKPTR65M15C107R",
                    "period": {
                        "start": "1965-08-15"
                    },
                    "assigner": {
                        "display": "Ministero Economia e Finanze"
                    }
                }
            ],
            "name": [
                {
                    "family": "Parker4",
                    "given": [
                        "Peter4"
                    ]
                }
            ]
        },
        "search": {
            "mode": "match"
        }
    },
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/726999",
        "resource": {
            "resourceType": "Patient",
            "id": "726999",
            "meta": {
                "versionId": "3",
                "lastUpdated": "2018-03-22T14:26:00Z",
                "tag": [
                    {
                        "system": "http:\/\/starfleet-hospital.ufp\/codes\/tags",
                        "display": "Patient-Info to be checked"
                    }
                ]
            },
            "identifier": [
                {
                    "use": "usual",
                    "type": {
                        "coding": [
                            {
                                "system": "http:\/\/blob.de\/uri_for_pid",
                                "code": "local_pid",
                                "display": "Lokale PatID",
                                "userSelected": true
                            }
                        ],
                        "text": "Lokale PatID aus uri_for_pid"
                    },
                    "system": "http:\/\/blob.de\/para-Starfleet-Hospital",
                    "value": "para - NCC-1032"
                },
                {
                    "use": "usual",
                    "type": {
                        "coding": [
                            {
                                "system": "http:\/\/blob.de\/uri_for_versicherung",
                                "code": "SBK_id",
                                "display": "SBK-Versicherungsnummer"
                            }
                        ],
                        "text": "SBK-Versicherungsnummer aus uri_for_versicherung"
                    },
                    "system": "http:\/\/blob.de\/SBK",
                    "value": "para - 9973264355"
                }
            ],
            "active": true,
            "name": [
                {
                    "use": "usual",
                    "text": "para - Michael Burnham",
                    "family": "para - Burnham",
                    "given": [
                        "para - Michael"
                    ]
                }
            ],
            "telecom": [
                {
                    "system": "phone",
                    "value": "+49(0)12345-123456",
                    "use": "home"
                }
            ],
            "gender": "female",
            "birthDate": "1985-10-24",
            "address": [
                {
                    "extension": [
                        {
                            "url": "http:\/\/fhir.ufp\/StructureDefinition\/planet",
                            "valueString": "Planet Erde"
                        }
                    ],
                    "use": "home",
                    "type": "postal",
                    "text": "para - Milchstrasse 42, 7297 Sp\u00f6ck, Deutschland, Planet Erde",
                    "line": [
                        "Milchstrasse 42"
                    ],
                    "city": "Sp\u00f6ck",
                    "postalCode": "7297",
                    "country": "Deutschland"
                }
            ],
            "maritalStatus": {
                "coding": [
                    {
                        "system": "http:\/\/hl7.org\/fhir\/v3\/MaritalStatus",
                        "code": "U",
                        "display": "unmarried"
                    }
                ],
                "text": "para - unverheiratet"
            },
            "contact": [
                {
                    "relationship": [
                        {
                            "coding": [
                                {
                                    "system": "http:\/\/hl7.org\/fhir\/v2\/0131",
                                    "code": "N",
                                    "display": "Next-of-Kin"
                                }
                            ],
                            "text": "para - Pflegevater"
                        }
                    ],
                    "name": {
                        "use": "usual",
                        "text": "para - Sarek",
                        "given": [
                            "Sarek"
                        ]
                    },
                    "telecom": [
                        {
                            "system": "email",
                            "value": "para-sarek@vsa.vc",
                            "rank": 1
                        }
                    ],
                    "gender": "male"
                }
            ]
        },
        "search": {
            "mode": "match"
        }
    },
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/727044",
        "resource": {
            "resourceType": "Patient",
            "id": "727044",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2018-04-03T17:10:13Z"
            },
            "identifier": [
                {
                    "use": "usual",
                    "type": {
                        "coding": [
                            {
                                "system": "http:\/\/hl7.org\/fhir\/v2\/0203",
                                "code": "MR"
                            }
                        ]
                    },
                    "system": "urn:oid:2.16.840.1.113883.2.9.4.3.2",
                    "value": "PRKPTR65M15C107R",
                    "period": {
                        "start": "1965-08-15"
                    },
                    "assigner": {
                        "display": "Ministero Economia e Finanze"
                    }
                }
            ],
            "name": [
                {
                    "family": "Parker4",
                    "given": [
                        "Peter4"
                    ]
                }
            ]
        },
        "search": {
            "mode": "match"
        }
    },
    {
        "fullUrl": "http:\/\/test.fhir.org\/r3\/Patient\/727113",
        "resource": {
            "resourceType": "Patient",
            "id": "727113",
            "meta": {
                "versionId": "1",
                "lastUpdated": "2018-04-11T15:15:07Z"
            },
            "active": true,
            "name": [
                {
                    "text": "Peter Parker",
                    "family": "Parker",
                    "given": [
                        "Peter"
                    ]
                }
            ],
            "gender": "male",
            "birthDate": "1980"
        },
        "search": {
            "mode": "match"
        }
    }
]
}