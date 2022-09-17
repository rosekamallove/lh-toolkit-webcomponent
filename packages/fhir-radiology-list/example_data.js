export const exampleRadiologyList = [
  {
    uuid: "189e9efa-f040-410b-a581-9ead56294b57",
    orderNumber: "ORD-1",
    accessionNumber: "1",
    patient: {
      uuid: "293dbf14-7a25-4866-b485-99884c121f8a",
      display: "31572 - Joyce Batz",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/patient/293dbf14-7a25-4866-b485-99884c121f8a",
        },
      ],
    },
    concept: {
      uuid: "161318AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "X-ray of left wrist, 2 views",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/161318AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    action: "NEW",
    careSetting: {
      uuid: "6f0c9a92-6f24-11e3-af88-005056821db0",
      name: "Outpatient",
      description: "Out-patient care setting",
      retired: false,
      careSettingType: "OUTPATIENT",
      display: "Outpatient",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0",
        },
        {
          rel: "full",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0?v=full",
        },
      ],
      resourceVersion: "1.10",
    },
    previousOrder: null,
    dateActivated: "2016-07-22T09:04:28.000+0000",
    dateStopped: null,
    autoExpireDate: null,
    encounter: {
      uuid: "05b262d2-53c8-11e6-beb8-9e71128cae77",
      display: "Radiology Order Encounter 22/07/2016",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/encounter/05b262d2-53c8-11e6-beb8-9e71128cae77",
        },
      ],
    },
    orderer: {
      uuid: "fe14a7ee-7af6-4217-b9d1-7101ac6c9c26",
      display: "10 - Susie Lowe",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/provider/fe14a7ee-7af6-4217-b9d1-7101ac6c9c26",
        },
      ],
    },
    orderReason: {
      uuid: "152662AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Fracture of Hand",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/152662AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    orderReasonNonCoded: "hurt her wrist due to falling from a chair",
    urgency: "ROUTINE",
    scheduledDate: null,
    instructions: null,
    commentToFulfiller: null,
    display: "1 - X-ray of left wrist, 2 views",
    auditInfo: {
      creator: {
        uuid: "4592ced3-7c55-4b2a-9a6b-bdea83a64e0e",
        display: "ref1",
        links: [
          {
            rel: "self",
            uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/user/4592ced3-7c55-4b2a-9a6b-bdea83a64e0e",
          },
        ],
      },
      dateCreated: "2016-07-22T09:04:29.000+0000",
      changedBy: null,
      dateChanged: null,
    },
    links: [
      {
        rel: "self",
        uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/radiologyorder/189e9efa-f040-410b-a581-9ead56294b57",
      },
    ],
    resourceVersion: "2.0",
  },
  {
    uuid: "91a7e860-0988-4289-8c89-dd82e48b28ea",
    orderNumber: "ORD-2",
    accessionNumber: "2",
    patient: {
      uuid: "12edf6d1-1898-4168-ad8a-4e4938aab474",
      display: "88400 - Carlos Wilderman",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/patient/12edf6d1-1898-4168-ad8a-4e4938aab474",
        },
      ],
    },
    concept: {
      uuid: "846AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "COMPUTED TOMOGRAPHY SCAN, HEAD",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/846AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    action: "NEW",
    careSetting: {
      uuid: "6f0c9a92-6f24-11e3-af88-005056821db0",
      name: "Outpatient",
      description: "Out-patient care setting",
      retired: false,
      careSettingType: "OUTPATIENT",
      display: "Outpatient",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0",
        },
        {
          rel: "full",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0?v=full",
        },
      ],
      resourceVersion: "1.10",
    },
    previousOrder: null,
    dateActivated: "2016-07-22T09:08:15.000+0000",
    dateStopped: null,
    autoExpireDate: null,
    encounter: {
      uuid: "ae1b6b12-53c8-11e6-beb8-9e71128cae77",
      display: "Radiology Order Encounter 22/07/2016",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/encounter/ae1b6b12-53c8-11e6-beb8-9e71128cae77",
        },
      ],
    },
    orderer: {
      uuid: "fe2fe78f-d545-4ac4-9131-fd800c43c1f8",
      display: "11 - Dimitri Christiansen",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/provider/fe2fe78f-d545-4ac4-9131-fd800c43c1f8",
        },
      ],
    },
    orderReason: {
      uuid: "152512AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Personal History of Stroke",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/152512AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    orderReasonNonCoded: "felt dizzy",
    urgency: "STAT",
    scheduledDate: null,
    instructions: null,
    commentToFulfiller: null,
    display: "2 - COMPUTED TOMOGRAPHY SCAN, HEAD",
    auditInfo: {
      creator: {
        uuid: "87feab09-25b7-476a-8aaf-c39c47818b90",
        display: "ref2",
        links: [
          {
            rel: "self",
            uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/user/87feab09-25b7-476a-8aaf-c39c47818b90",
          },
        ],
      },
      dateCreated: "2016-07-22T09:08:15.000+0000",
      changedBy: null,
      dateChanged: null,
    },
    links: [
      {
        rel: "self",
        uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/radiologyorder/91a7e860-0988-4289-8c89-dd82e48b28ea",
      },
    ],
    resourceVersion: "2.0",
  },
  {
    uuid: "ae59af5f-ddfe-4a5a-9268-f69d5ee31b96",
    orderNumber: "ORD-3",
    accessionNumber: "3",
    patient: {
      uuid: "b8cacf42-e7ed-46f9-be2d-84b612ec8992",
      display: "2408 - Eldora Hegmann",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/patient/b8cacf42-e7ed-46f9-be2d-84b612ec8992",
        },
      ],
    },
    concept: {
      uuid: "161313AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display:
        "Computerized tomography of right lower extremity without contrast",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/161313AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    action: "NEW",
    careSetting: {
      uuid: "6f0c9a92-6f24-11e3-af88-005056821db0",
      name: "Outpatient",
      description: "Out-patient care setting",
      retired: false,
      careSettingType: "OUTPATIENT",
      display: "Outpatient",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0",
        },
        {
          rel: "full",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0?v=full",
        },
      ],
      resourceVersion: "1.10",
    },
    previousOrder: null,
    dateActivated: "2016-07-22T09:09:32.000+0000",
    dateStopped: "2016-07-22T09:09:39.000+0000",
    autoExpireDate: null,
    encounter: {
      uuid: "becffba8-53c8-11e6-beb8-9e71128cae77",
      display: "Radiology Order Encounter 22/07/2016",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/encounter/becffba8-53c8-11e6-beb8-9e71128cae77",
        },
      ],
    },
    orderer: {
      uuid: "fe14a7ee-7af6-4217-b9d1-7101ac6c9c26",
      display: "10 - Susie Lowe",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/provider/fe14a7ee-7af6-4217-b9d1-7101ac6c9c26",
        },
      ],
    },
    orderReason: {
      uuid: "118022AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Fracture of Hip",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/118022AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    orderReasonNonCoded: "patient has fallen on her hip",
    urgency: "ROUTINE",
    scheduledDate: null,
    instructions: null,
    commentToFulfiller: null,
    display:
      "3 - Computerized tomography of right lower extremity without contrast",
    auditInfo: {
      creator: {
        uuid: "4592ced3-7c55-4b2a-9a6b-bdea83a64e0e",
        display: "ref1",
        links: [
          {
            rel: "self",
            uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/user/4592ced3-7c55-4b2a-9a6b-bdea83a64e0e",
          },
        ],
      },
      dateCreated: "2016-07-22T09:09:32.000+0000",
      changedBy: null,
      dateChanged: null,
    },
    links: [
      {
        rel: "self",
        uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/radiologyorder/ae59af5f-ddfe-4a5a-9268-f69d5ee31b96",
      },
    ],
    resourceVersion: "2.0",
  },
  {
    uuid: "8b48c8aa-824e-4d4f-b6f7-3ff7668dc46f",
    orderNumber: "ORD-5",
    accessionNumber: "4",
    patient: {
      uuid: "b8cacf42-e7ed-46f9-be2d-84b612ec8992",
      display: "2408 - Eldora Hegmann",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/patient/b8cacf42-e7ed-46f9-be2d-84b612ec8992",
        },
      ],
    },
    concept: {
      uuid: "161333AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "X-ray of right hip, 2 views",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/161333AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    action: "NEW",
    careSetting: {
      uuid: "6f0c9a92-6f24-11e3-af88-005056821db0",
      name: "Outpatient",
      description: "Out-patient care setting",
      retired: false,
      careSettingType: "OUTPATIENT",
      display: "Outpatient",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0",
        },
        {
          rel: "full",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0?v=full",
        },
      ],
      resourceVersion: "1.10",
    },
    previousOrder: null,
    dateActivated: "2016-07-22T09:10:45.000+0000",
    dateStopped: null,
    autoExpireDate: null,
    encounter: {
      uuid: "bed000b2-53c8-11e6-beb8-9e71128cae77",
      display: "Radiology Order Encounter 22/07/2016",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/encounter/bed000b2-53c8-11e6-beb8-9e71128cae77",
        },
      ],
    },
    orderer: {
      uuid: "fe14a7ee-7af6-4217-b9d1-7101ac6c9c26",
      display: "10 - Susie Lowe",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/provider/fe14a7ee-7af6-4217-b9d1-7101ac6c9c26",
        },
      ],
    },
    orderReason: {
      uuid: "118022AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Fracture of Hip",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/118022AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    orderReasonNonCoded: "patient has fallen on her hip",
    urgency: "ON_SCHEDULED_DATE",
    scheduledDate: "2016-07-25T14:50:00.000+0000",
    instructions: null,
    commentToFulfiller: null,
    display: "4 - X-ray of right hip, 2 views",
    auditInfo: {
      creator: {
        uuid: "4592ced3-7c55-4b2a-9a6b-bdea83a64e0e",
        display: "ref1",
        links: [
          {
            rel: "self",
            uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/user/4592ced3-7c55-4b2a-9a6b-bdea83a64e0e",
          },
        ],
      },
      dateCreated: "2016-07-22T09:10:45.000+0000",
      changedBy: null,
      dateChanged: null,
    },
    links: [
      {
        rel: "self",
        uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/radiologyorder/8b48c8aa-824e-4d4f-b6f7-3ff7668dc46f",
      },
    ],
    resourceVersion: "2.0",
  },
  {
    uuid: "f8e1e585-aae9-4822-8fda-bf30fdb25b16",
    orderNumber: "ORD-6",
    accessionNumber: "5",
    patient: {
      uuid: "b5078b51-85e9-4497-9939-80d23a3feb31",
      display: "46495 - Meaghan McGlynn",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/patient/b5078b51-85e9-4497-9939-80d23a3feb31",
        },
      ],
    },
    concept: {
      uuid: "161267AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "X-ray of right ankle, 2 views",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/161267AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    action: "NEW",
    careSetting: {
      uuid: "6f0c9a92-6f24-11e3-af88-005056821db0",
      name: "Outpatient",
      description: "Out-patient care setting",
      retired: false,
      careSettingType: "OUTPATIENT",
      display: "Outpatient",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0",
        },
        {
          rel: "full",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0?v=full",
        },
      ],
      resourceVersion: "1.10",
    },
    previousOrder: null,
    dateActivated: "2016-07-22T09:12:14.000+0000",
    dateStopped: null,
    autoExpireDate: null,
    encounter: {
      uuid: "becffe64-53c8-11e6-beb8-9e71128cae77",
      display: "Radiology Order Encounter 22/07/2016",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/encounter/becffe64-53c8-11e6-beb8-9e71128cae77",
        },
      ],
    },
    orderer: {
      uuid: "fe2fe78f-d545-4ac4-9131-fd800c43c1f8",
      display: "11 - Dimitri Christiansen",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/provider/fe2fe78f-d545-4ac4-9131-fd800c43c1f8",
        },
      ],
    },
    orderReason: {
      uuid: "118055AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Bone Fracture",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/118055AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    orderReasonNonCoded: "hurt ankle while rollerblading",
    urgency: "ROUTINE",
    scheduledDate: null,
    instructions: null,
    commentToFulfiller: null,
    display: "5 - X-ray of right ankle, 2 views",
    auditInfo: {
      creator: {
        uuid: "87feab09-25b7-476a-8aaf-c39c47818b90",
        display: "ref2",
        links: [
          {
            rel: "self",
            uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/user/87feab09-25b7-476a-8aaf-c39c47818b90",
          },
        ],
      },
      dateCreated: "2016-07-22T09:12:14.000+0000",
      changedBy: null,
      dateChanged: null,
    },
    links: [
      {
        rel: "self",
        uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/radiologyorder/f8e1e585-aae9-4822-8fda-bf30fdb25b16",
      },
    ],
    resourceVersion: "2.0",
  },
  {
    uuid: "d9cc866a-5089-4187-bc72-96f1008a32bd",
    orderNumber: "ORD-7",
    accessionNumber: "6",
    patient: {
      uuid: "b5078b51-85e9-4497-9939-80d23a3feb31",
      display: "46495 - Meaghan McGlynn",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/patient/b5078b51-85e9-4497-9939-80d23a3feb31",
        },
      ],
    },
    concept: {
      uuid: "161291AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      display: "Ultrasound of abdomen, limited",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/concept/161291AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        },
      ],
    },
    action: "NEW",
    careSetting: {
      uuid: "6f0c9a92-6f24-11e3-af88-005056821db0",
      name: "Outpatient",
      description: "Out-patient care setting",
      retired: false,
      careSettingType: "OUTPATIENT",
      display: "Outpatient",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0",
        },
        {
          rel: "full",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/caresetting/6f0c9a92-6f24-11e3-af88-005056821db0?v=full",
        },
      ],
      resourceVersion: "1.10",
    },
    previousOrder: null,
    dateActivated: "2016-07-22T09:14:28.000+0000",
    dateStopped: null,
    autoExpireDate: null,
    encounter: {
      uuid: "da14a1fc-53c8-11e6-beb8-9e71128cae77",
      display: "Radiology Order Encounter 22/07/2016",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/encounter/da14a1fc-53c8-11e6-beb8-9e71128cae77",
        },
      ],
    },
    orderer: {
      uuid: "fe2fe78f-d545-4ac4-9131-fd800c43c1f8",
      display: "11 - Dimitri Christiansen",
      links: [
        {
          rel: "self",
          uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/provider/fe2fe78f-d545-4ac4-9131-fd800c43c1f8",
        },
      ],
    },
    orderReason: null,
    orderReasonNonCoded: "abdominal pain",
    urgency: "STAT",
    scheduledDate: null,
    instructions: null,
    commentToFulfiller: null,
    display: "6 - Ultrasound of abdomen, limited",
    auditInfo: {
      creator: {
        uuid: "87feab09-25b7-476a-8aaf-c39c47818b90",
        display: "ref2",
        links: [
          {
            rel: "self",
            uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/user/87feab09-25b7-476a-8aaf-c39c47818b90",
          },
        ],
      },
      dateCreated: "2016-07-22T09:14:28.000+0000",
      changedBy: null,
      dateChanged: null,
    },
    links: [
      {
        rel: "self",
        uri: "http://127.0.0.1:8080/lh-toolkit/ws/rest/v1/radiologyorder/d9cc866a-5089-4187-bc72-96f1008a32bd",
      },
    ],
    resourceVersion: "2.0",
  },
];
