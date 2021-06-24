import { LitElement, html, css } from 'lit-element';
import moment from 'moment';
import '@material/mwc-textarea/mwc-textarea';
import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-codeable-concept/fhir-codeable-concept.js';
import '@lh-toolkit/fhir-active-status/fhir-active-status.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-reference/fhir-reference.js';

class FhirAppointment extends LitElement {

  static get styles() {
    return css`
      .field{
        margin-top: 1%;
        display: table;
      }
      .rule{
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, #0000, #b3a7a7bf, #0000);
        margin: 2%;
      }
      .participant{
        margin: 1%
      }
    `;
  }

  static get properties() {
    return {
      value: { type: Object, reflect: true },
      showComment: { type: String},
      showSlot: { type: String},
      showServiceCategory: { type: String},
      showAppointmentType: { type: String},
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
      appointmentType: {coding: [{ system: "", code: "", display: ""}],text: ""},
      slot: [{reference: "", display: "", type: ""}],
      comment: '',
      start: moment().format('YYYY-MM-DDThh:mm:ss[Z]'),
      end: moment().format('YYYY-MM-DDThh:mm:ss[Z]'),
      participant: [{type: [{coding: [{ system: "", code: "", display: ""}],text: ""}], status: '', actor: {reference: "", display: "", type: ""}}]
    };
    this.showComment = "true";
    this.showSlot = "true";
    this.showServiceCategory = "true";
    this.showServiceType = "true";
    this.showSpecialty = "true";
    this.showAppointmentType = "true";
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

  setAppointmentType(e) {
    this.value.appointmentType = e.target.value;
  }

  setSlotValue(e, index) {
    this.value.slot[index] = e.target.value;
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
      <fhir-codeable-concept class="serviceCategory" label="Service-Category :" .value='${item}' @input="${e => this.setServiceCategoryValue(e, index)}"></fhir-codeable-concept>
    `)}
  ` : "";
  }

  serviceTypeTemplate() {
    this.value.serviceType = this.value.serviceType  || [{coding: [{ system: "", code: "", display: ""}],text: ""}];
    
    return this.showServiceType !== "false" ? html`
    ${this.value.serviceType.map((item, index) => html`
      <fhir-codeable-concept class="serviceType" label="Service-Type :" .value='${item}' @input="${e => this.setServiceTypeValue(e, index)}"></fhir-codeable-concept>
    `)}
  ` : "";
  }

  specialtyTemplate() {
    this.value.specialty = this.value.specialty || [{coding: [{ system: "", code: "", display: ""}],text: ""}];

    return this.showSpecialty !== "false" ? html`
    ${this.value.specialty.map((item, index) => html`
        <fhir-codeable-concept class="specialty" label="Specialty :" .value='${item}' @input="${e => this.setSpecialtyValue(e, index)}"></fhir-codeable-concept>
    `)}
  ` : "";
  }

  appointmentTypeTemplate() {
    this.value.appointmentType = this.value.appointmentType || {coding: [{ system: "", code: "", display: ""}],text: ""};

    return this.showAppointmentType !== "false" ? html`
      <fhir-codeable-concept class="appointmentType" label="Appintment-Type :" .value='${this.value.appointmentType}' @input="${this.setAppointmentType}"></fhir-codeable-concept>
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

  startTemplate() {
    let start = this.value.start ? moment(this.value.start).utc().format('YYYY-MM-DDTHH:mm:ss') : "";

    return this.showStart !== "false" ? html`
    <mwc-formfield class="field" label="Start : " alignEnd>
      <mwc-textfield type ='datetime-local' class="start" value="${start}" @input="${this.setStartValue}"></mwc-textfield>
    </mwc-formfield>
  `: "";
  }

  endTemplate() {
    let end = this.value.end ? moment(this.value.end).utc().format('YYYY-MM-DDThh:mm:ss') : "";

    return this.showEnd !== "false" ? html`
    <mwc-formfield class="field" label="End : " alignEnd>
      <mwc-textfield type ='datetime-local' class="end" value="${end}" @input="${this.setEndValue}"></mwc-textfield>
    </mwc-formfield>
  `: "";
  }

  commentTemplate() {
    this.value.comment = this.value.comment || "";

    return this.showComment !== "false" ? html`
    <mwc-formfield label="Comment :" class="field" alignEnd>
      <mwc-textarea label="Text" class="comment" rows="5" columns="5" .value='${this.value.comment}' @input="${this.setCommentValue}"> </mwc-textarea>
    </mwc-formfield>
    ` : "";
  }

  slotTemplate() {
    this.value.slot = this.value.slot || [{reference: "", display: "", type: ""}];

    return this.showSlot !== "false" ? html`
      ${this.value.slot.map((item, index) => html`
        <fhir-reference class="slot" .value="${item}" label="Slot:" @input="${e => this.setSlotValue(e, index)}"></fhir-reference>
      `)}
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

  // template for participant backbone element

  participantTemplate() {
    this.value.participant = this.value.participant || [{type: [{coding: [{ system: "", code: "", display: ""}],text: ""}], status: '', actor: {reference: "", display: "", type: ""}}];

    this.value.participant.forEach(element => {
      element.actor = element.actor || {reference: "", display: "", type: ""};
      element.status = element.status || "";
      element.type = element.type || [{coding: [{ system: "", code: "", display: ""}],text: ""}];
      
    });

    return html`
    <hr class="rule">
    ${this.value.participant.map((item, index) => html`
      ${(item.type || [{coding: [{ system: "", code: "", display: ""}],text: ""}]).map((item1, index1) => html`
          <fhir-codeable-concept class="partype" label="Type :" .value='${item1}' @input="${e => item.type[index1] = e.target.value}"></fhir-codeable-concept>
      `)}

      <mwc-formfield label="Status :" class="field" alignEnd>
        <mwc-textfield class="parstatus" label="Text" .value='${item.status || ""}' @input="${e => this.value.participant[index].status = e.target.value}"> </mwc-textfield>
      </mwc-formfield>

      <fhir-reference class="paractor" .value="${item.actor || {reference: "", display: "", type: ""}}" label="Actor:" @input="${e => this.value.participant[index].actor = e.target.value}"></fhir-reference>
      <hr class="rule">
    `)}
  `;
  }

  render() {
    return html`
      ${this.statusTemplate()}
      ${this.serviceTypeTemplate()}
      ${this.specialtyTemplate()}
      ${this.serviceCategoryTemplate()}
      ${this.appointmentTypeTemplate()}
      ${this.identifierTemplate()}
      ${this.slotTemplate()}
      ${this.startTemplate()}
      ${this.endTemplate()}
      ${this.commentTemplate()}
      <div class="participant">
        Participant : ${this.participantTemplate()}
      </div> 
    `
  }
}

customElements.define('fhir-appointment', FhirAppointment);