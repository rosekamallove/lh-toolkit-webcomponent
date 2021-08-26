import { LitElement, html, css } from 'lit-element';
import moment from 'moment';
import '@material/mwc-textarea/mwc-textarea';
import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-codeable-concept/fhir-codeable-concept.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-reference/fhir-reference.js';

class FhirEncounter extends LitElement {

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
      showReasonCode: { type: String},
      showAppointment: { type: String},
      showSubject: { type: String},
      showIdentifier: { type: String},
      showStatus: {type: String}
    }
  }

  constructor() {
    super();
    this.value = {
      identifier: [{}],
      status: '', 
      type: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      appointment: [{reference: "", display: "", type: ""}],
      subject: {reference: "", display: "", type: ""},
      participant: [{type: [{coding: [{ system: "", code: "", display: ""}],text: ""}], 
                    period: {start: moment().toISOString(), end: moment().toISOString()}, 
                    individual: {reference: "", display: "", type: ""}}]
    };
    this.showType = "true";
    this.showAppointment = "true";
    this.showSubject = "true";
    this.showIdentifier = "true";
    this.showStatus = "true";
  }

  // handling the input event to reflect the property change back on attribute

  setAppointmentValue(e, index) {
    this.value.appointment[index] = e.target.value;
  }

  setIdentifierValue(e) {
    this.value.identifier = e.target.value;
  }

  setSubjectValue(e) {
    this.value.subject = e.target.value;
  }

  setTypeValue(e, index) {
    this.value.type[index] = e.target.value;
  }

  setStatusValue(e) {
    this.value.status = e.target.value;
  }

  // templates to render the component
  reasonCodeTemplate() {
    this.value.type = this.value.type || [{coding: [{ system: "", code: "", display: ""}],text: ""}];

    return this.showType !== "false" ? html`
    ${this.value.type.map((item, index) => html`
      <fhir-codeable-concept class="type" label="Type :" .value='${item}' @input="${e => this.setTypeValue(e, index)}"></fhir-codeable-concept>
    `)}
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

  appointmentTemplate() {
    this.value.appointment = this.value.appointment || [{reference: "", display: "", type: ""}];

    return this.showSlot !== "false" ? html`
      ${this.value.appointment.map((item, index) => html`
        <fhir-reference class="appointment" .value="${item}" label="Appointment:" @input="${e => this.setAppointmentValue(e, index)}"></fhir-reference>
      `)}
    ` : "";
  }

  subjectTemplate() {
    this.value.subject = this.value.subject || {reference: "", display: "", type: ""};

    return this.showSubject !== "false" ? html`
        <fhir-reference class="subject" .value="${this.value.subject}" label="Subject:" @input="${e => this.setSubjectValue}"></fhir-reference>
    ` : "";
  }

  statusTemplate() {
    this.value.status = this.value.status || "";

    return this.showStatus !== "false" ? html`
    <mwc-formfield label="Status :" class="field" alignEnd>
      <mwc-textfield label="Text" class="status" outlined .value='${this.value.status}' @input="${this.setStatusValue}"> </mwc-textfield>
    </mwc-formfield>
    ` : "";
  }

  // template for participant backbone element

  participantTemplate() {
    this.value.participant = this.value.participant || [{type: [{coding: [{ system: "", code: "", display: ""}],text: ""}], period : {start: "", end: ""} , individual: {reference: "", display: "", type: ""}}];

    this.value.participant.forEach(element => {
      element.individual = element.individual || {reference: "", display: "", type: ""};
      element.period = element.period || {start: "", end: ""};
      element.type = element.type || [{coding: [{ system: "", code: "", display: ""}],text: ""}];
    });

    return html`
    <hr class="rule">
    ${this.value.participant.map((item, index) => html`
      ${(item.type || [{coding: [{ system: "", code: "", display: ""}],text: ""}]).map((item1, index1) => html`
          <fhir-codeable-concept class="partype" label="Type :" .value='${item1}' @input="${e => item.type[index1] = e.target.value}"></fhir-codeable-concept>
      `)}

      <mwc-formfield class="field" label="Planning-Horizon : " alignEnd>
        <fhir-period end class="parperiod" .value="${item.period || {start: "", end: ""}}" @input="${e => {
          e.target.value.start = moment(e.target.value.start).format('YYYY-MM-DDThh:mm:ss[Z]')
          e.target.value.end = moment(e.target.value.end).format('YYYY-MM-DDThh:mm:ss[Z]')
    
          item.period = e.target.value;
        }}"></fhir-period>
      </mwc-formfield>

      <fhir-reference class="parindividual" .value="${item.individual || {reference: "", display: "", type: ""}}" label="Individual:" @input="${e => this.value.participant[index].individual = e.target.value}"></fhir-reference>
      <hr class="rule">
    `)}
  `;
  }

  render() {
    return html`
      ${this.statusTemplate()}
      ${this.reasonCodeTemplate()}
      ${this.appointmentTemplate()}
      ${this.subjectTemplate()}
      ${this.identifierTemplate()}
      <div class="participant">
        Participant : ${this.participantTemplate()}
      </div> 
    `
  }
}

customElements.define('fhir-encounter', FhirEncounter);