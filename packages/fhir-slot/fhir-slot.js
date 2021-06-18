import { LitElement, html, css } from 'lit-element';
import moment from 'moment';
import '@material/mwc-textarea/mwc-textarea';
import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-codeable-concept/fhir-codeable-concept.js';
import '@lh-toolkit/fhir-active-status/fhir-active-status.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-reference/fhir-reference.js';

class FhirSlot extends LitElement {

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
      showComment: { type: String},
      showSchedule: { type: String},
      showServiceCategory: { type: String},
      showServiceType: { type: String},
      showSpecialty: { type: String},
      showStart: { type: String},
      showEnd: { type: String},
      showIdentifier: { type: String},
      showStatus: {type: String}
    }
  }

  constructor() {
    super();
    this.value = {
      identifier: [{}],
      status: '', 
      serviceCategory: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      serviceType: [{coding: [{ system: "", code: "", display: ""}],text: ""}], 
      specialty: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      schedule: {reference: "", display: "", type: ""},
      comment: '',
      start: moment().format('YYYY-MM-DDThh:mm:ss[Z]'),
      end: moment().format('YYYY-MM-DDThh:mm:ss[Z]') 
    };
    this.showComment = "true";
    this.showSchedule = "true";
    this.showServiceCategory = "true";
    this.showServiceType = "true";
    this.showSpecialty = "true";
    this.showStart = "true";
    this.showEnd = "true";
    this.showStatus = "true";
    this.showIdentifier = "true"
  }

  // handling the input event to reflect the property change back on attribute
  setCommentValue(e) {
    this.value.comment = e.target.value;
  }

  setActiveState(e) {
    this.value.active = e.target.value;
  }

  setStartValue(e) {
    this.value.start = moment(e.target.value).format('YYYY-MM-DDThh:mm:ss[Z]');
  }

  setEndValue(e) {
    this.value.end = moment(e.target.value).format('YYYY-MM-DDThh:mm:ss[Z]');
  }

  setScheduleValue(e) {
    this.value.schedule = e.target.value;
  }

  setIdentifierValue(e) {
    this.value.identifier = e.target.value;
  }

  setSpecialtyValue(e, index) {
    this.value.specialty[index] = e.target.value;
  }

  setServiceCategoryValue(e, index) {
    this.value.serviceCategory[index] = e.target.value;
  }

  setServiceTypeValue(e, index) {
    this.value.serviceType[index] = e.target.value;
  }

  setStatusValue(e) {
    this.value.status = e.target.value;
  }

  // templates to render the component
  serviceCategoryTemplate() {
    this.value.serviceCategory = this.value.serviceCategory || [{coding: [{ system: "", code: "", display: ""}],text: ""}];

    return this.showServiceCategory !== "false" ? html`
    ${this.value.serviceCategory.map((item, index) => html`
      <fhir-codeable-concept label="Service-Category :" .value='${item}' @input="${e => this.setServiceCategoryValue(e, index)}"></fhir-codeable-concept>
    `)}
  ` : "";
  }

  serviceTypeTemplate() {
    this.value.serviceType = this.value.serviceType  || [{coding: [{ system: "", code: "", display: ""}],text: ""}];
    
    return this.showServiceType !== "false" ? html`
    ${this.value.serviceType.map((item, index) => html`
      <fhir-codeable-concept label="Service-Type :" .value='${item}' @input="${e => this.setServiceTypeValue(e, index)}"></fhir-codeable-concept>
    `)}
  ` : "";
  }

  specialtyTemplate() {
    this.value.specialty = this.value.specialty || [{coding: [{ system: "", code: "", display: ""}],text: ""}];

    return this.showSpecialty !== "false" ? html`
    ${this.value.specialty.map((item, index) => html`
        <fhir-codeable-concept label="Specialty :" .value='${item}' @input="${e => this.setSpecialtyValue(e, index)}"></fhir-codeable-concept>
    `)}
  ` : "";
  }

  identifierTemplate() {
    this.value.identifier = this.value.identifier || [{}];

    return this.showIdentifier !== "false" ? html`
    <mwc-formfield class="field">
      <fhir-person-identifier .value="${this.value.identifier}" @input="${this.setIdentifierValue}"></fhir-person-identifier>
    </mwc-formfield>
  ` : "";
  }

  startTemplate() {
    let start = this.value.start ? moment(this.value.start).format('YYYY-MM-DDTHH:mm:ss') : "";

    return this.showStart !== "false" ? html`
    <mwc-formfield class="field" label="Start : " alignEnd>
      <mwc-textfield type ='datetime-local' value="${start}" @input="${this.setStartValue}"></mwc-textfield>
    </mwc-formfield>
  `: "";
  }

  endTemplate() {
    let end = this.value.end ? moment(this.value.end).format('YYYY-MM-DDThh:mm:ss') : "";

    return this.showEnd !== "false" ? html`
    <mwc-formfield class="field" label="End : " alignEnd>
      <mwc-textfield type ='datetime-local' value="${end}" @input="${this.setEndValue}"></mwc-textfield>
    </mwc-formfield>
  `: "";
  }

  commentTemplate() {
    this.value.comment = this.value.comment || "";

    return this.showComment !== "false" ? html`
    <mwc-formfield label="Comment :" class="field" alignEnd>
      <mwc-textarea label="Text" rows="5" columns="5" .value='${this.value.comment}' @input="${this.setCommentValue}"> </mwc-textarea>
    </mwc-formfield>
    ` : "";
  }

  scheduleTemplate() {
    this.value.schedule = this.value.schedule || {reference: "", display: "", type: ""};

    return html`
      <fhir-reference .value="${this.value.schedule}" label="Schedule:" @input="${this.setScheduleValue}"></fhir-reference>
    `;
  }

  statusTemplate() {
    this.value.status = this.value.status || "";

    return this.showStatus !== "false" ? html`
    <mwc-formfield label="Status :" class="field" alignEnd>
      <mwc-textfield label="Text" .value='${this.value.status}' @input="${this.setStatusValue}"> </mwc-textfield>
    </mwc-formfield>
    ` : "";
  }

  render() {
    return html`
      ${this.statusTemplate()}
      ${this.serviceTypeTemplate()}
      ${this.specialtyTemplate()}
      ${this.serviceCategoryTemplate()}
      ${this.identifierTemplate()}
      ${this.scheduleTemplate()}
      ${this.startTemplate()}
      ${this.endTemplate()}
      ${this.commentTemplate()}
    `
  }
}

customElements.define('fhir-slot', FhirSlot);