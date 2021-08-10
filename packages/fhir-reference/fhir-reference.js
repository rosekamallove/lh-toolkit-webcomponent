import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-formfield/mwc-formfield.js';


class FhirReference extends LitElement {

  static get styles() {
    return css`
      .field{
        margin-top: 1%;
        display: table
      }
      .textfield{
        margin: 1%;
      }
    `;
  }

  static get properties() {
    return {
      value: { type: Object, reflect: true },
      label: {type: String},
      showType: {type: String}
    }
  }

  constructor() {
    super();
    this.value = {reference: "", type: "", display: ""};
    this.label = "";
    this.showType = "false";
  }

  // handling the input event to reflect the property change back on attribute
  setReferenceInput(e) {
    this.value.reference = e.target.value;
  }

  setDisplayInput(e) {
    this.value.display = e.target.value;
  }

  setTypeInput(e) {
    this.value.type = e.target.value;
  }


  // templates to render the component
  referenceTemplate() {
    return html`
      <mwc-textfield size=20 label="Reference" class="textfield" outlined type="text" .value='${this.value.reference || ""}' @input="${this.setReferenceInput}"> </mwc-textfield>
  `;
  }

  displayTemplate() {
    return html`
      <mwc-textfield size=20 label="Display" class="textfield" outlined type="text" .value='${this.value.display || ""}' @input="${this.setDisplayInput}"> </mwc-textfield>
  `;
  }

  typeTemplate() {
    return this.showType !== "false" ? html`
      <mwc-textfield size=20 label="Type" class="textfield" outlined type="text" .value='${this.value.type || ""}' @input="${this.setTypeInput}"> </mwc-textfield>
  ` : "";
  }

  render() {
    return html`
    <mwc-formfield label="${this.label}" class="field" alignEnd>
      ${this.referenceTemplate()}
      ${this.displayTemplate()}
      ${this.typeTemplate()}
    </mwc-formfield>
    `
  }
}

customElements.define('fhir-reference', FhirReference);