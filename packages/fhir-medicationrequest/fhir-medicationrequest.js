import { LitElement, html, css } from 'lit-element';
import moment from 'moment';
import '@material/mwc-textarea/mwc-textarea';
import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-dosage/fhir-dosage.js';
import '@lh-toolkit/fhir-reference/fhir-reference.js';
class FhirMedicationRequest extends LitElement {

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
      showAuthoredOn : { type: String},
      showEncounter: { type: String},
      showSubject: { type: String},
      showIntent: { type: String},
      showIdentifier: { type: String},
      showStatus: {type: String},
      showMedicationReference: {type: String}
    }
  }

  constructor() {
    super();
    this.value = {
      identifier: [{}],
      status: '', 
      intent: '',
      subject: {reference: "", display: "", type: ""},
      encounter: {reference: "", display: "", type: ""},
      medicationReference: {reference: "", display: "", type: ""},
      authoredOn: moment().utc().format('YYYY-MM-DD'),
      dosageInstruction: [{sequence: 0, text: '', additionalInstruction: [{coding: [{ system: "", code: "", display: ""}],text: ""}]}]
    };
    this.showAuthoredOn = "true";
    this.showEncounter = "true";
    this.showSubject = "true";
    this.showMedicationReference = "true",
    this.showIntent = "true";
    this.showStatus = "true";
    this.showIdentifier = "true"
  }

  // handling the input event to reflect the property change back on attribute

  setAuthoredOnValue(e) {
    this.value.authoredOn = moment(e.target.value).format('YYYY-MM-DD');
  }

  setPerformerValue(e, index) {
    this.value.performer[index] = e.target.value;
  }

  // templates to render the component

  identifierTemplate() {
    this.value.identifier = this.value.identifier || [{}];

    return this.showIdentifier !== "false" ? html`
    <mwc-formfield class="field">
      <fhir-person-identifier class="identifier" .value="${this.value.identifier}" @input="${e => this.value.identifier = e.target.value}"></fhir-person-identifier>
    </mwc-formfield>
  ` : "";
  }

  authoredOnTemplate() {
    let authoredOn = this.value.authoredOn ? moment(this.value.authoredOn).format('YYYY-MM-DD') : "";

    return this.showAuthoredOn  !== "false" ? html`
    <mwc-formfield class="field" label="AuthoredOn  : " alignEnd>
      <mwc-textfield type ='date' class="authoredon" value="${authoredOn}" @input="${this.setAuthoredOnValue}"></mwc-textfield>
    </mwc-formfield>
  `: "";
  }

  subjectTemplate() {
    this.value.subject = this.value.subject || {reference: "", display: "", type: ""};

    return this.showSubject !== "false" ? html`
      <fhir-reference class="subject" .value="${this.value.subject}" label="Subject:" @input="${e => this.value.subject = e.target.value}"></fhir-reference>
    ` : "";
  }

  medicationReferenceTemplate() {
    this.value.medicationReference = this.value.medicationReference || {reference: "", display: "", type: ""};

    return this.showMedicationReference !== "false" ? html`
      <fhir-reference class="medicationreference" .value="${this.value.medicationReference}" label="MedicationReference:" @input="${e => this.value.medicationReference = e.target.value}"></fhir-reference>
    ` : "";
  }

  encounterTemplate() {
    this.value.encounter = this.value.encounter || {reference: "", display: "", type: ""};

    return this.showEncounter !== "false" ? html`
      <fhir-reference class="encounter" .value="${this.value.encounter}" label="Encounter:" @input="${e => this.value.encounter = e.target.value}"></fhir-reference>
    ` : "";
  }

  statusTemplate() {
    this.value.status = this.value.status || "";

    return this.showStatus !== "false" ? html`
    <mwc-formfield label="Status :" class="field" alignEnd>
      <mwc-textfield label="Text" class="status" .value='${this.value.status}' @input="${e => this.value.status = e.target.value}"> </mwc-textfield>
    </mwc-formfield>
    ` : "";
  }

  intentTemplate() {
    this.value.intent = this.value.intent || "";

    return this.showIntent !== "false" ? html`
    <mwc-formfield label="Intent :" class="field" alignEnd>
      <mwc-textfield label="Text" class="intent" .value='${this.value.intent}' @input="${e => this.value.intent = e.target.value}"> </mwc-textfield>
    </mwc-formfield>
    ` : "";
  }

  dosageInstructionTemplate() {
    this.value.dosageInstruction = this.value.dosageInstruction || [{sequence: 0, text: '', additionalInstruction: [{coding: [{ system: "", code: "", display: ""}],text: ""}]}];

    return html`
      ${this.value.dosageInstruction.map((item, index) => html`
      <fhir-dosage class="dosageinstruction" .value="${item}" label="Dosage-Instruction:" @input="${e => this.value.encounter = e.target.value}"></fhir-dosage>
      `)}
    `;
  }

  render() {
    return html`
      ${this.statusTemplate()}
      ${this.intentTemplate()}
      ${this.subjectTemplate()}
      ${this.encounterTemplate()}
      ${this.authoredOnTemplate()}
      ${this.identifierTemplate()}
      ${this.medicationReferenceTemplate()}
      ${this.dosageInstructionTemplate()}
    `
  }
}

customElements.define('fhir-medicationrequest', FhirMedicationRequest );