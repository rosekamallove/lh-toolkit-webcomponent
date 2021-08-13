import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@lh-toolkit/fhir-coding/fhir-coding.js';


class FhirCodeableConcept extends LitElement {

  static get styles() {
    return css`
      .field{
        margin-top: 1%;
        display: table
      }
    `;
  }

  static get properties() {
    return {
      value: { type: Object, reflect: true },
      showText: {type: String},
      label: {type: String}
    }
  }

  constructor() {
    super();
    this.value = {coding: [{ system: "", code: "", display: ""}],text: ""};
    this.showText = 'false';
    this.label = '';
  }

  // handling the input event to reflect the property change back on attribute
  setInput(e) {
    this.value.text = e.target.value;
  }


  // templates to render the component
  codingTemplate() {
    return html`
    ${this.value.coding.map((item) => html`
      <mwc-formfield class="field" alignEnd>
        <fhir-coding showCode="true" label="${this.label}" .value='${item}'></fhir-coding>
      </mwc-formfield>
    `)}
  `;
  }

  textTemplate() {
    return html`
    ${this.showText !== "false" ? (
      html`
        <mwc-formfield class="field">
          <mwc-textfield size=40 label="Text" type="text" outlined .value='${this.value.text || ""}' @input="${this.setInput}"> </mwc-textfield>
        </mwc-formfield>
      `) : ""}
    `
  }

  render() {
    return html`
      ${this.codingTemplate()}
      ${this.textTemplate()}
    `
  }
}

customElements.define('fhir-codeable-concept', FhirCodeableConcept);