import { LitElement, html, css } from 'lit-element';
import moment from 'moment';
import '@material/mwc-textarea/mwc-textarea';
import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-codeable-concept/fhir-codeable-concept.js';
import '@lh-toolkit/fhir-active-status/fhir-active-status.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-reference/fhir-reference.js';

class FhirServiceRequest extends LitElement {

  static get styles() {
    return css`
      .field{
        margin-top: 1%;
        display: table;
      }
    `;
  }

  static get properties() {
    return {
      value: { type: Object, reflect: true },
      showOccurrenceDateTime: { type: String},
      showEncounter: { type: String},
      showSubject: { type: String},
      showPerformer: { type: String},
      showCode: { type: String},
      showIntent: { type: String},
      showIdentifier: { type: String},
      showStatus: {type: String}
    }
  }

  constructor() {
    super();
    this.value = {
      identifier: [{}],
      status: '', 
      intent: '',
      code: {coding: [{ system: "", code: "", display: ""}],text: ""},
      performer: [{reference: "", display: "", type: ""}],
      subject: {reference: "", display: "", type: ""},
      encounter: {reference: "", display: "", type: ""},
      occurrenceDateTime: moment().utc().format('YYYY-MM-DDThh:mm:ss'),
    };
    this.showOccurrenceDateTime = "true";
    this.showEncounter = "true";
    this.showSubject = "true";
    this.showPerformer = "true";
    this.showCode = "true";
    this.showIntent = "true";
    this.showStatus = "true";
    this.showIdentifier = "true"
  }

  // handling the input event to reflect the property change back on attribute

  setOccurrenceDateTimeValue(e) {
    this.value.occurrenceDateTime = moment(e.target.value).format('YYYY-MM-DDThh:mm:ss');
  }

  setSubjectValue(e) {
    this.value.appointmentType = e.target.value;
  }

  setEncounterValue(e) {
    this.value.encounter = e.target.value;
  }

  setPerformerValue(e, index) {
    this.value.performer[index] = e.target.value;
  }

  setIdentifierValue(e) {
    this.value.identifier = e.target.value;
  }

  setCodeValue(e) {
    this.value.code = e.target.value;
  }

  setStatusValue(e) {
    this.value.status = e.target.value;
  }

  setIntentValue(e) {
    this.value.intent = e.target.value;
  }

  // templates to render the component
  codeTemplate() {
    this.value.code = this.value.code || {coding: [{ system: "", code: "", display: ""}],text: ""};

    return this.showCode !== "false" ? html`
      <fhir-codeable-concept class="code" label="Code :" .value='${this.value.code}' @input="${e => this.setCodeValue}"></fhir-codeable-concept>
  ` : "";
  }

  identifierTemplate() {
    this.value.identifier = this.value.identifier || [{}];

    return this.showIdentifier !== "false" ? html`
    <mwc-formfield class="field">
      <fhir-person-identifier class="identifier" .value="${this.value.identifier}" @input="${this.setIdentifierValue}"></fhir-person-identifier>
    </mwc-formfield>
  ` : "";
  }

  occurrenceDateTimeTemplate() {
    let occurrenceDateTime = this.value.occurrenceDateTime ? moment(this.value.start).format('YYYY-MM-DDTHH:mm:ss') : "";

    return this.showOccurrenceDateTime !== "false" ? html`
    <mwc-formfield class="field" label="OccurrenceDateTime : " alignEnd>
      <mwc-textfield type ='datetime-local' class="occurrenceDateTime" value="${occurrenceDateTime}" @input="${this.setOccurrenceDateTimeValue}"></mwc-textfield>
    </mwc-formfield>
  `: "";
  }

  performerTemplate() {
    this.value.performer = this.value.performer || [{reference: "", display: "", type: ""}];

    return this.showPerformer !== "false" ? html`
      ${this.value.performer.map((item, index) => html`
        <fhir-reference class="performer" .value="${item}" label="Performer:" @input="${e => this.setPerformerValue(e, index)}"></fhir-reference>
      `)}
    ` : "";
  }

  subjectTemplate() {
    this.value.subject = this.value.subject || {reference: "", display: "", type: ""};

    return this.showSubject !== "false" ? html`
      <fhir-reference class="subject" .value="${this.value.subject}" label="Subject:" @input="${e => this.setSubjectValue}"></fhir-reference>
    ` : "";
  }

  encounterTemplate() {
    this.value.encounter = this.value.encounter || {reference: "", display: "", type: ""};

    return this.showEncounter !== "false" ? html`
      <fhir-reference class="encounter" .value="${this.value.encounter}" label="Encounter:" @input="${e => this.setEncounterValue}"></fhir-reference>
    ` : "";
  }

  statusTemplate() {
    this.value.status = this.value.status || "";

    return this.showStatus !== "false" ? html`
    <mwc-formfield label="Status :" class="field" alignEnd>
      <mwc-textfield label="Text" class="status" .value='${this.value.status}' @input="${this.setStatusValue}"> </mwc-textfield>
    </mwc-formfield>
    ` : "";
  }

  intentTemplate() {
    this.value.status = this.value.status || "";

    return this.showIntent !== "false" ? html`
    <mwc-formfield label="Intent :" class="field" alignEnd>
      <mwc-textfield label="Text" class="intent" .value='${this.value.intent}' @input="${this.setIntentValue}"> </mwc-textfield>
    </mwc-formfield>
    ` : "";
  }

  render() {
    return html`
      ${this.statusTemplate()}
      ${this.intentTemplate()}
      ${this.performerTemplate()}
      ${this.subjectTemplate()}
      ${this.encounterTemplate()}
      ${this.occurrenceDateTimeTemplate()}
      ${this.identifierTemplate()}
      ${this.codeTemplate()}
    `
  }
}

customElements.define('fhir-servicerequest', FhirServiceRequest);