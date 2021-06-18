import { LitElement, html, css } from 'lit-element';
import moment from 'moment';
import '@material/mwc-textarea/mwc-textarea';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-codeable-concept/fhir-codeable-concept.js';
import '@lh-toolkit/fhir-active-status/fhir-active-status.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-reference/fhir-reference.js';

class FhirSchedule extends LitElement {

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
      showActor: { type: String},
      showServiceCategory: { type: String},
      showServiceType: { type: String},
      showSpecialty: { type: String},
      showPlanningHorizon: { type: String},
      showIdentifier: { type: String},
      showActiveStatus: { type: String}
    }
  }

  constructor() {
    super();
    this.value = {
      identifier: [{}], 
      active: false, 
      serviceCategory: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      serviceType: [{coding: [{ system: "", code: "", display: ""}],text: ""}], 
      specialty: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      actor: [{reference: "", display: "", type: ""}],
      comment: '',
      planningHorizon: {start: moment().toISOString(), end: moment().toISOString()}
    };
    this.showComment = "true";
    this.showActor = "true",
    this.showServiceCategory = "true",
    this.showServiceType =  "true",
    this.showSpecialty =  "true",
    this.showPlanningHorizon = "true",
    this.showIdentifier = "true",
    this.showActiveStatus = "true"
  }

  // handling the input event to reflect the property change back on attribute
  setCommentValue(e) {
    this.value.comment = e.target.value;
  }

  setActiveState(e) {
    this.value.active = e.target.value;
  }

  setPlanningState(e) {
    e.target.value.start = moment(e.target.value.start).format('YYYY-MM-DDThh:mm:ss[Z]')
    e.target.value.end = moment(e.target.value.end).format('YYYY-MM-DDThh:mm:ss[Z]')
    
    this.value.planningHorizon = e.target.value;
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

  setActorValue(index) {
    this.value.actor[index] = e.target.value;
  }

  // templates to render the component
  serviceCategoryTemplate() {
    this.value.serviceCategory = this.value.serviceCategory  || [{coding: [{ system: "", code: "", display: ""}],text: ""}];

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
    this.value.specialty = this.value.specialty  || [{coding: [{ system: "", code: "", display: ""}],text: ""}];

    return this.showSpecialty !== "false" ? html`
    ${this.value.specialty.map((item, index) => html`
        <fhir-codeable-concept label="Specialty :" .value='${item}' @input="${e => this.setSpecialtyValue(e, index)}"></fhir-codeable-concept>
    `)}
  ` : "";
  }

  activeStatusTemplate() {
    this.value.active = this.value.active || false;

    return this.showActiveStatus !== "false" ? html`
    <mwc-formfield class="field">
      <fhir-active-status .value="${this.value.active}" @click="${this.setActiveState}"></fhir-active-status>
    </mwc-formfield>
  `: "";
  }

  identifierTemplate() {
    this.value.identifier = this.value.identifier || [{}];
    
    return this.showIdentifier !== "false" ? html`
    <mwc-formfield class="field">
      <fhir-person-identifier .value="${this.value.identifier}" @input="${this.setIdentifierValue}"></fhir-person-identifier>
    </mwc-formfield>
  ` : "";
  }

  planningHorizonTemplate() {
    this.value.planningHorizon = this.value.planningHorizon || {start: moment().toISOString(), end: moment().toISOString()};

    return this.showPlanningHorizon !== "false" ? html`
    <mwc-formfield class="field" label="Planning-Horizon : " alignEnd>
      <fhir-period end .value="${this.value.planningHorizon}" @input="${this.setPlanningState}"></fhir-period>
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

  actorTemplate() {
    this.value.actor = this.value.actor || [{reference: "", display: "", type: ""}];

    return html`
      ${this.value.actor.map((item, index) => html`
        <fhir-reference .value="${item}" label="Actor:" @input="${e => this.setActorValue(e, index)}"></fhir-reference>
      `)}
    `;
  }

  render() {
    return html`
      ${this.serviceTypeTemplate()}
      ${this.specialtyTemplate()}
      ${this.serviceCategoryTemplate()}
      ${this.identifierTemplate()}
      ${this.activeStatusTemplate()}
      ${this.actorTemplate()}
      ${this.planningHorizonTemplate()}
      ${this.commentTemplate()}
    `
  }
}

customElements.define('fhir-schedule', FhirSchedule);