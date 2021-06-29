import { LitElement, html, css } from 'lit-element';
import moment from 'moment';
import '@material/mwc-textarea/mwc-textarea';
import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-codeable-concept/fhir-codeable-concept.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-reference/fhir-reference.js';

class FhirMedicationStatement extends LitElement {

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
      showCategory: { type: String},
      showSubject: { type: String},
      showMedicationCodeableConcept: { type: String},
      showDateAsserted: { type: String},
      showStatus: { type: String},
      showIdentifier: { type: String}
    }
  }

  constructor() {
    super();
    this.value = {
      identifier: [{}],
      status: '', 
      category: {coding: [{ system: "", code: "", display: ""}],text: ""},
      medicationCodeableConcept: {coding: [{ system: "", code: "", display: ""}],text: ""}, 
      subject: {reference: "", display: "", type: ""},
      dateAsserted: moment().format('YYYY-MM-DD'),
    };
    this.showCategory = "true";
    this.showSubject = "true";
    this.showMedicationCodeableConcept = "true";
    this.showDateAsserted = "true";
    this.showStatus = "true";
    this.showIdentifier = "true"
  }

  // handling the input event to reflect the property change back on attribute
  setDateAssertedValue(e) {
    this.value.dateAsserted = moment(e.target.value).format('YYYY-MM-DD');
  }

  setSubjectValue(e) {
    this.value.subject = e.target.value;
  }

  setIdentifierValue(e) {
    this.value.identifier = e.target.value;
  }

  setCategoryValue(e) {
    this.value.category = e.target.value;
  }

  setMedicationCodeableConceptValue(e) {
    this.value.medicationCodeableConcept = e.target.value;
  }

  setStatusValue(e) {
    this.value.status = e.target.value;
  }

  // templates to render the component
  categoryTemplate() {
    this.value.category = this.value.category || {coding: [{ system: "", code: "", display: ""}],text: ""};

    return this.showCategory !== "false" ? html`
      <fhir-codeable-concept class="category" label="Category :" .value='${this.value.category}' @input="${this.setCategoryValue}"></fhir-codeable-concept>
  ` : "";
  }

  medicationCodeableConceptTemplate() {
    this.value.medicationCodeableConcept = this.value.medicationCodeableConcept || {coding: [{ system: "", code: "", display: ""}],text: ""};

    return this.showMedicationCodeableConcept !== "false" ? html`
      <fhir-codeable-concept class="medicationCodeableConcept" label="Medication-Codeable-Concept :" .value='${this.value.medicationCodeableConcept}' @input="${this.setMedicationCodeableConceptValue}"></fhir-codeable-concept>
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

  dateAssertedTemplate() {
    let dateAsserted = this.value.dateAsserted ? moment(this.value.dateAsserted).utc().format('YYYY-MM-DD') : "";

    return this.showDateAsserted !== "false" ? html`
    <mwc-formfield class="field" label="DateAsserted : " alignEnd>
      <mwc-textfield type ='date' class="dateAsserted" value="${dateAsserted}" @input="${this.setDateAssertedValue}"></mwc-textfield>
    </mwc-formfield>
  `: "";
  }

  subjectTemplate() {
    this.value.subject = this.value.subject || {reference: "", display: "", type: ""};

    return this.showSubject !== "false" ? html`
      <fhir-reference class="subject" .value="${this.value.subject}" label="Subject:" @input="${this.setSubjectValue}"></fhir-reference>
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

  render() {
    return html`
      ${this.statusTemplate()}
      ${this.subjectTemplate()}
      ${this.dateAssertedTemplate()}
      ${this.identifierTemplate()}
      ${this.medicationCodeableConceptTemplate()}
      ${this.categoryTemplate()}
    `
  }
}

customElements.define('fhir-medicationstatement', FhirMedicationStatement);