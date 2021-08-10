import { LitElement, html, css } from 'lit-element';
import moment from 'moment';
import '@material/mwc-textarea/mwc-textarea';
import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-codeable-concept/fhir-codeable-concept.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-reference/fhir-reference.js';

class FhirAllergyIntolerance extends LitElement {

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
      showCriticality: { type: String},
      showType: { type: String},
      showVerficationStatus: { type: String},
      showClinicalStatus: { type: String},
      showLastOccurrence: { type: String},
      showIdentifier: { type: String},
      showPatient: { type: String},
      showEncounter: { type: String}
    }
  }

  constructor() {
    super();
    this.value = {
      identifier: [{}],
      type: '', 
      criticality: '',
      encounter: {reference: "", display: "", type: ""},
      patient: {reference: "", display: "", type: ""},
      clinicalStatus: {coding: [{ system: "", code: "", display: ""}],text: ""},
      verificationStatus: {coding: [{ system: "", code: "", display: ""}],text: ""}, 
      lastOccurrence: moment().utc().format('YYYY-MM-DDThh:mm:ss[Z]'),
    };
    this.showCriticality = "true";
    this.showType = "true";
    this.showVerficationStatus = "true";
    this.showClinicalStatus = "true";
    this.showLastOccurrence = "true";
    this.showIdentifier = "true";
    this.showPatient = "true";
    this.showEncounter = "true";
  }

  // handling the input event to reflect the property change back on attribute

  setLastOccurrenceValue(e) {
    this.value.lastOccurrence = moment(e.target.value).format('YYYY-MM-DDThh:mm:ss[Z]');
  }

  setIdentifierValue(e) {
    this.value.identifier = e.target.value;
  }

  setClinicalStatusValue(e) {
    this.value.clinicalStatus = e.target.value;
  }

  setVerficationStatusValue(e) {
    this.value.verificationStatus = e.target.value;
  }

  setTypeValue(e) {
    this.value.type = e.target.value;
  }

  setCriticalityValue(e) {
    this.value.criticality = e.target.value;
  }

  // templates to render the component
  clinicalStatusTemplate() {
    this.value.clinicalStatus = this.value.clinicalStatus || {coding: [{ system: "", code: "", display: ""}],text: ""};

    return this.showClinicalStatus !== "false" ? html`
      <fhir-codeable-concept class="clinicalStatus" label="Clinical-Status :" .value='${this.value.clinicalStatus}' @input="${this.setClinicalStatusValue}"></fhir-codeable-concept>
  ` : "";
  }

  verificationStatusTemplate() {
    this.value.verificationStatus = this.value.verificationStatus || {coding: [{ system: "", code: "", display: ""}],text: ""};

    return this.showVerficationStatus !== "false" ? html`
      <fhir-codeable-concept class="verificationStatus" label="Verification-Status :" .value='${this.value.verificationStatus}' @input="${this.setVerficationStatusValue}"></fhir-codeable-concept>
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

  lastOccurrenceTemplate() {
    let lastOccurrence = this.value.lastOccurrence ? moment(this.value.lastOccurrence).format('YYYY-MM-DDTHH:mm:ss') : "";

    return this.showLastOccurrence !== "false" ? html`
    <mwc-formfield class="field" label="LastOccurrence : " alignEnd>
      <mwc-textfield type ='datetime-local' outlined class="lastOccurrence" value="${lastOccurrence}" @input="${this.setLastOccurrenceValue}"></mwc-textfield>
    </mwc-formfield>
  `: "";
  }

  criticalityTemplate() {
    this.value.criticality = this.value.criticality || "";

    return this.showCriticality !== "false" ? html`
    <mwc-formfield label="Criticality :" class="field" alignEnd>
      <mwc-textfield label="Text" outlined class="criticality" .value='${this.value.criticality}' @input="${this.setCriticalityValue}"> </mwc-textfield>
    </mwc-formfield>
    ` : "";
  }

  patientTemplate() {
    this.value.patient = this.value.patient || {reference: "", display: "", type: ""};

    return this.showPatient !== "false" ? html`
        <fhir-reference class="patient" .value="${this.value.patient}" label="Patient:" @input="${e => this.value.patient = e.target.value}"></fhir-reference>
    ` : "";
  }

  encounterTemplate() {
    this.value.encounter = this.value.encounter || {reference: "", display: "", type: ""};

    return this.showEncounter !== "false" ? html`
        <fhir-reference class="encounter" .value="${this.value.encounter}" label="Encounter:" @input="${e => this.value.encounter = e.target.value}"></fhir-reference>
    ` : "";
  }

  typeTemplate() {
    this.value.type = this.value.type || "";

    return this.showType !== "false" ? html`
    <mwc-formfield label="Type :" class="field" alignEnd>
      <mwc-textfield label="Text" outlined class="type" .value='${this.value.type}' @input="${this.setTypeValue}"> </mwc-textfield>
    </mwc-formfield>
    ` : "";
  }

  render() {
    return html`
      ${this.typeTemplate()}
      ${this.clinicalStatusTemplate()}
      ${this.verificationStatusTemplate()}
      ${this.identifierTemplate()}
      ${this.criticalityTemplate()}
      ${this.lastOccurrenceTemplate()}
      ${this.patientTemplate()}
      ${this.encounterTemplate()}
    `
  }
}

customElements.define('fhir-allergyintolerance', FhirAllergyIntolerance);