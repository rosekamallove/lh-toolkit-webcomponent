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
    this.value.planningHorizon = e.target.value;
  }


  // templates to render the component
  serviceCategoryTemplate() {
    return this.showServiceCategory !== "false" ? html`
    ${this.value.serviceCategory.map((item) => html`
      <fhir-codeable-concept label="Service-Category :" .value='${item}'></fhir-codeable-concept>
    `)}
  ` : "";
  }

  serviceTypeTemplate() {
    return this.showServiceType !== "false" ? html`
    ${this.value.serviceType.map((item) => html`
      <fhir-codeable-concept label="Service-Type :" .value='${item}'></fhir-codeable-concept>
    `)}
  ` : "";
  }

  specialtyTemplate() {
    return this.showSpecialty !== "false" ? html`
    ${this.value.specialty.map((item) => html`
        <fhir-codeable-concept label="Specialty :" .value='${item}'></fhir-codeable-concept>
    `)}
  ` : "";
  }

  activeStatusTemplate() {
    return this.showActiveStatus !== "false" ? html`
    <mwc-formfield class="field">
      <fhir-active-status .value="${this.value.active}" @click="${this.setActiveState}"></fhir-active-status>
    </mwc-formfield>
  `: "";
  }

  identifierTemplate() {
    return this.showIdentifier !== "false" ? html`
    <mwc-formfield class="field">
      <fhir-person-identifier .value="${this.value.identifier}"></fhir-person-identifier>
    </mwc-formfield>
  ` : "";
  }

  planningHorizonTemplate() {
    return this.showPlanningHorizon !== "false" ? html`
    <mwc-formfield class="field" label="Planning-Horizon : " alignEnd>
      <fhir-period end .value="${this.value.planningHorizon}" @input="${this.setPlanningState}"></fhir-period>
    </mwc-formfield>
  `: "";
  }

  commentTemplate() {
    return this.showComment !== "false" ? html`
    <mwc-formfield label="Comment :" class="field" alignEnd>
      <mwc-textarea label="Text" rows="5" columns="5" .value='${this.value.comment || ""}' @input="${this.setCommentValue}"> </mwc-textarea>
    </mwc-formfield>
    ` : "";
  }

  actorTemplate() {
    return html`
      ${this.value.actor.map((item) => html`
        <fhir-reference .value="${item}" label="Actor:"></fhir-reference>
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