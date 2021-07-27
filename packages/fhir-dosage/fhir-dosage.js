import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-codeable-concept/fhir-codeable-concept.js';

class FhirDosage extends LitElement {

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
      label: { type: String }
    }
  }

  constructor() {
    super();
    this.value = {
      sequence: 0,
      text: '', 
      additionalInstruction: [{coding: [{ system: "", code: "", display: ""}],text: ""}],
    };
    this.label = " ";
  }

  // handling the input event to reflect the property change back on attribute
  setAdditionalInstructionValue(e, index) {
    this.value.additionalInstruction[index] = e.target.value;
  }

  // templates to render the component

  sequenceTemplate() {
    this.value.sequence = this.value.sequence || 0;

    return html`
    <mwc-formfield label="Sequence :" class="field" alignEnd>
      <mwc-textfield label="Number" type="Number" class="sequence" .value='${this.value.sequence}' @input="${e => this.value.sequence = e.target.value}"> </mwc-textfield>
    </mwc-formfield>
    `;
  }

  textTemplate() {
    this.value.text = this.value.text || "";

    return html`
    <mwc-formfield label="Text :" class="field" alignEnd>
      <mwc-textfield label="Text" class="text" .value='${this.value.text}' @input="${e => this.value.text = e.target.value}"> </mwc-textfield>
    </mwc-formfield>
    `;
  }

  additionalInstructionTemplate() {
    this.value.additionalInstruction = this.value.additionalInstruction || [{coding: [{ system: "", code: "", display: ""}],text: ""}];

    return html`
    ${this.value.additionalInstruction.map((item, index) => html`
        <fhir-codeable-concept class="additionalinstruction" label="Additional-Instruction :" .value='${item}' @input="${e => this.setAdditionalInstructionValue(e, index)}"></fhir-codeable-concept>
    `)}
  `;
  }

  render() {
    return html`
    <hr class="rule">
    ${this.label}
      <div class="participant">
        ${this.sequenceTemplate()}
        ${this.textTemplate()}
        ${this.additionalInstructionTemplate()}
      </div>
    `
  }
}

customElements.define('fhir-dosage', FhirDosage );