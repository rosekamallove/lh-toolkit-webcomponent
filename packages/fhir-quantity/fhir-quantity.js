import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-formfield/mwc-formfield.js';


class FhirQuantity extends LitElement {

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
      showComparator: {type: String},
      showSystem: {type: String}
    }
  }

  constructor() {
    super();
    this.value = {value: "", comparator: "", unit: "", system: "", code: ""};
    this.label = "";
    this.showComparator = "false";
    this.showSystem = "false";
  }


  // templates to render the component
  valueTemplate() {
    return html`
      <mwc-textfield size=20 label="Value" class="textfield" outlined type="text" .value='${this.value.value || ""}' @input="${e => this.value.value = e.target.value}"> </mwc-textfield>
  `;
  }

  comparatorTemplate() {
    return this.showComparator !== "false" ? html`
      <mwc-textfield size=20 label="Comparator" class="textfield" outlined type="text" .value='${this.value.comparator || ""}' @input="${e => this.value.comparator = e.target.value}"> </mwc-textfield>
  `: "";
  }

  unitTemplate() {
    return html`
      <mwc-textfield size=20 label="Unit" class="textfield" outlined type="text" .value='${this.value.unit || ""}' @input="${e => this.value.unit = e.target.value}"> </mwc-textfield>
  `;
  }

  systemTemplate() {
    return this.showSystem !== "false" ? html`
      <mwc-textfield size=20 label="System" class="textfield" outlined type="text" .value='${this.value.system || ""}' @input="${e => this.value.system = e.target.value}"> </mwc-textfield>
  ` : "";
  }

  codeTemplate() {
    return html`
      <mwc-textfield size=20 label="Code" class="textfield" outlined type="text" .value='${this.value.code || ""}' @input="${e => this.value.code = e.target.value}"> </mwc-textfield>
  `;
  }

  render() {
    return html`
    <mwc-formfield label="${this.label}" class="field" alignEnd>
      ${this.valueTemplate()}
      ${this.comparatorTemplate()}
      ${this.unitTemplate()}
      ${this.systemTemplate()}
      ${this.codeTemplate()}
    </mwc-formfield>
    `
  }
}

customElements.define('fhir-quantity', FhirQuantity);