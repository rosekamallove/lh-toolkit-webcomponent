# `fhir-slot`

Slot resources are used to provide time-slots that can be booked using an appointment. They do not provide any information about appointments that are available, just the time, and optionally what the time can be used for. These are effectively spaces of free/busy time.

This element is used to represent Slot resource value. This components used the `reference` and `codeable-concept` datatypes to represent some property values.

---

### `Properties of fhir-slot`

* `value`:`Object` - the value that will be displayed through this component. This will be used as   an attribute. default value:

```javascript
{
      identifier: [{}],
      status: '', 
      serviceCategory: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      serviceType: [{coding: [{ system: "", code: "", display: ""}],text: ""}], 
      specialty: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      schedule: {reference: "", display: "", type: ""},
      comment: '',
      start: moment().format('YYYY-MM-DDThh:mm:ss[Z]'),
      end: moment().format('YYYY-MM-DDThh:mm:ss[Z]') 
}
```

- `showComment`:`String` - Used to decide if the comment value will be visible, This will be used as an attribute. default value: `'true'`
- `showStart`:`String` - Used to decide if the start value will be visible, This will be used as an attribute. default value: `'true'`
- `showServiceCategory`:`String` - Used to decide if the serviceCategory value will be visible, This will be used as an attribute. default value: `'true'`
- `showServiceType`:`String` - Used to decide if the serviceType value will be visible, This will be used as an attribute. default value: `'true'`
- `showSpecialty`:`String` - Used to decide if the specialty value will be visible, This will be used as an attribute. default value: `'true'`
- `showIdentifier`:`String` - Used to decide if the identifier value will be visible, This will be used as an attribute. default value: `'true'`
- `showEnd`:`String` - Used to decide if the end value will be visible, This will be used as an attribute. default value: `'true'
- `showStatus`:`String` - Used to decide if the status value will be visible, This will be used as an attribute. default value: `'true'`

---

### `License`

Mozilla Public License, v. 2.0.

## `Usage`

```html
Using the element with a value(sample) :
<fhir-slot value='{
      "resourceType": "Slot",
      "id": "1",
      "text": {
        "status": "generated",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t25 Dec 2013 9:00am - 9:15am: <b>Busy</b> Physiotherapy\n\t\t</div>"
      },
      "identifier": [
        {
          "system": "http://example.org/identifiers/slots",
          "value": "123132"
        }
      ],
      "serviceCategory": [
        {
          "coding": [
            {
              "code": "17",
              "display": "General Practice"
            }
          ]
        }
      ],
      "schedule": {
        "reference": "Schedule/example"
      },
      "status": "busy",
      "start": "2013-12-25T09:00:00Z",
      "end": "2013-12-25T09:15:00Z",
      "overbooked": true,
      "comment": "Assessments should be performed before requesting appointments in this slot."
    }' ></fhir-slot>

----------------------------------------------

Default element which can be used to create entries : 

<fhir-slot></fhir-slot>
```
