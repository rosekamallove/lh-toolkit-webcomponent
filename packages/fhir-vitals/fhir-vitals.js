import { LitElement, html, css } from 'lit-element';
import moment from 'moment';
import '@material/mwc-textarea/mwc-textarea';
import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-codeable-concept/fhir-codeable-concept.js';
import '@lh-toolkit/fhir-active-status/fhir-active-status.js';
import '@lh-toolkit/fhir-person-identifier/fhir-person-identifier.js';
import '@lh-toolkit/fhir-reference/fhir-reference.js';
import '@lh-toolkit/fhir-quantity/fhir-quantity.js';

class FhirVitals extends LitElement {

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
      .component{
        margin: 1%
      }
    `;
  }

  static get properties() {
    return {
      value: { type: Object, reflect: true },
      showComponent: { type: String},
      showEffectiveDateTime: { type: String},
      showEncounter: { type: String},
      showSubject: { type: String},
      showCode: { type: String},
      showCategory: { type: String},
      showBodySite: { type: String},
      showDataAbsentReason: { type: String},
      showIdentifier: { type: String},
      showValueQuantity: { type: String},
      showStatus: {type: String}
    }
  }

  constructor() {
    super();
    this.value = {
      identifier: [{}],
      status: '', 
      dataAbsentReason: {coding: [{ system: "", code: "", display: ""}],text: ""},
      bodySite: {coding: [{ system: "", code: "", display: ""}],text: ""}, 
      category: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
      code: {coding: [{ system: "", code: "", display: ""}],text: ""},
      subject: {reference: "", display: "", type: ""},
      encounter: {reference: "", display: "", type: ""},
      effectiveDateTime: moment().utc().format('YYYY-MM-DDThh:mm:ss'),
      valueQuantity: {value: "", unit: "", code: ""},
      component: Array(6).fill({code : {coding: [{ system: "", code: "", display: ""}],text: ""}, valueQuantity: {value: "", unit: "", code: ""}})
    };
    this.showComponent = "true";
    this.showEffectiveDateTime = "true";
    this.showEncounter = "true";
    this.showSubject = "true";
    this.showCode = "true";
    this.showCategory = "true";
    this.showBodySite = "true";
    this.showDataAbsentReason = "true";
    this.showStatus = "true";
    this.showIdentifier = "true";
    this.showValueQuantity = "true"
  }

  // handling the input event to reflect the property change back on attribute

  setCategoryValue(e, index) {
    this.value.category[index] = e.target.value;
  }

  // templates to render the component
  dataAbsentReasonTemplate() {
    this.value.dataAbsentReason = this.value.dataAbsentReason || {coding: [{ system: "", code: "", display: ""}],text: ""};

    return this.showDataAbsentReason !== "false" ? html`
      <fhir-codeable-concept class="dataAbsentReason" label="Data-Absent-Reason :" .value='${this.value.dataAbsentReason}' @input="${e => this.value.dataAbsentReason = e.target.value}"></fhir-codeable-concept>
  ` : "";
  }

  bodySiteTemplate() {
    this.value.bodySite = this.value.bodySite || {coding: [{ system: "", code: "", display: ""}],text: ""};

    return this.showBodySite !== "false" ? html`
      <fhir-codeable-concept class="bodySite" label="BodySite :" .value='${this.value.bodySite}' @input="${e => this.value.bodySite = e.target.value}"></fhir-codeable-concept>
  ` : "";
  }

  categoryTemplate() {
    this.value.category = this.value.category  || [{coding: [{ system: "", code: "", display: ""}],text: ""}];
    
    return this.showCategory !== "false" ? html`
    ${this.value.category.map((item, index) => html`
      <fhir-codeable-concept class="category" label="Category :" .value='${item}' @input="${e => this.setCategoryValue(e, index)}"></fhir-codeable-concept>
    `)}
  ` : "";
  }

  codeTemplate() {
    this.value.code = this.value.code || {coding: [{ system: "", code: "", display: ""}],text: ""};

    return this.showCode !== "false" ? html`
      <fhir-codeable-concept class="code" label="Code :" .value='${this.value.code}' @input="${e => this.value.code = e.target.value}"></fhir-codeable-concept>
  ` : "";
  }

  identifierTemplate() {
    this.value.identifier = this.value.identifier || [{}];

    return this.showIdentifier !== "false" ? html`
    <mwc-formfield class="field">
      <fhir-person-identifier class="identifier" .value="${this.value.identifier}" @input="${e => this.value.identifier = e.target.value}"></fhir-person-identifier>
    </mwc-formfield>
  ` : "";
  }

  effectiveDateTimeTemplate() {
    let effectiveDateTime = this.value.effectiveDateTime ? moment(this.value.effectiveDateTime).format('YYYY-MM-DDTHH:mm:ss') : "";

    return this.showEffectiveDateTime !== "false" ? html`
    <mwc-formfield class="field" label="EffectiveDateTime : " alignEnd>
      <mwc-textfield type ='datetime-local' class="effectiveDateTime" value="${effectiveDateTime}" @input="${e => this.value.effectiveDateTime = moment(e.target.value).format('YYYY-MM-DDThh:mm:ss')}"></mwc-textfield>
    </mwc-formfield>
  `: "";
  }

  subjectTemplate() {
    this.value.subject = this.value.subject || {reference: "", display: "", type: ""};

    return this.showSubject !== "false" ? html`
      <fhir-reference class="subject" .value="${this.value.subject}" label="Subject:" @input="${e => this.value.subject = e.target.value}"></fhir-reference>
    ` : "";
  }

  encounterTemplate() {
    this.value.encounter = this.value.encounter || {reference: "", display: "", type: ""};

    return this.showEncounter !== "false" ? html`
      <fhir-reference class="encounter" .value="${this.value.encounter}" label="Encounter:" @input="${e => this.value.encounter = e.target.value}"></fhir-reference>
    ` : "";
  }

  valueQuantityTemplate() {
    this.value.valueQuantity = this.value.valueQuantity || {value: "", unit: "", code: ""};

    return this.showValueQuantity !== "false" ? html`
      <fhir-quantity class="valueQuantity" .value="${this.value.valueQuantity}" label="ValueQuantity:" @input="${e => this.value.valueQuantity = e.target.value}"></fhir-quantity>
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

  componentTemplate() {
    this.value.component = this.value.component || Array(6).fill({code : {coding: [{ system: "", code: "", display: ""}],text: ""}, valueQuantity: {value: "", unit: "", code: ""}});

    this.value.component.forEach(element => {
      element.code = element.code || {coding: [{ system: "", code: "", display: ""}],text: ""};
      element.valueQuantity = element.valueQuantity || {value: "", unit: "", code: ""};
    });

    return html`
    <hr class="rule">
    ${this.value.component.map((item, index) => html`
      <fhir-codeable-concept class="comcode" label="Code :" .value='${item.code || {coding: [{ system: "", code: "", display: ""}],text: ""}}' @input="${e => this.value.component[index].code = e.target.value}"></fhir-codeable-concept>
      <fhir-quantity class="comvalueQuantity" .value="${item.valueQuantity || ""}" label="ValueQuantity:" @input="${e => this.value.component[index].valueQuantity = e.target.value}"></fhir-quantity>
      <hr class="rule">
    `)}
  `;
  }

  render() {
    return html`
      ${this.dataAbsentReasonTemplate()}
      ${this.statusTemplate()}
      ${this.valueQuantityTemplate()}
      ${this.encounterTemplate()}
      ${this.subjectTemplate()}
      ${this.effectiveDateTimeTemplate()}
      ${this.identifierTemplate()}
      ${this.codeTemplate()}
      ${this.bodySiteTemplate()}
      ${this.categoryTemplate()}
      ${this.showComponent !== "false" ? html`
        <div class="component">
          Component : ${this.componentTemplate()}
        </div>
      `: ""}  
    `
  }
}

customElements.define('fhir-vitals', FhirVitals);