
import { LitElement, html, css } from "lit-element";
import "@polymer/iron-ajax/iron-ajax.js"
import "@lh-toolkit/fhir-range/fhir-range.js"
import "@material/mwc-textfield/mwc-textfield.js"
import "@material/mwc-formfield/mwc-formfield.js"
import "@lh-toolkit/fhir-coding/fhir-coding.js"


class FhirObservationReferencerange extends LitElement {

    static get properties() {
        return {
            /**the codeField is used to show the age at which the reference range is applicable. use this property to show/hide. Default  is true */ 
            ageField: { type: String },

            /**the textField shows text based reference range in an observation when the range is not quantitiative. use this property to show/hide. Default  is false */
            textField: { type: String },

            /**typeField shows the codes that indicates what part of the targeted reference population it applies to. use this property to show/hide. Default  is true  */ 
            typeField: { type: String },

            /**used to make AJAX call to FHIR resource. Default: null. */
            url: { type: String },

            /**used to take the input value of each field. */
            value: { type: Array }
        }
    }
    static get styles() {
        return css`
          div { border: solid; border-width: 1px; padding: 2px; display: inline-block;margin: 5px;}
          fhir-range { border: solid; border-width: 1px; padding: 0px 10px 0px 10px;; display: inline-block;margin: 5px;}

        `;
    }

    constructor() {
        super();
        this.ageField = "true";
        this.textField = "false";
        this.typeField = "true";
        this.value = [{
            "low": {}, 
            "high": {}, 
            "type": { coding: [{}] }, 
            "appliesTo": [{}], 
            "age": {}, 
            "text": "" 
        }];
    }

    render() {
        if (typeof (this.value) == "string") {
            this.value = JSON.parse(this.value)
        }
        return html`
        <div id ="rangeDiv">
        <label><b>Range</b></label><br>
        ${this.value.map((item, index) =>
            html`Value: <fhir-range id= "valueID" .value =${item || ""} @input= "${e => this.value[index] = e.target.value}"></fhir-range>
         ${this.ageField !== "false" ? html` Age:<fhir-range id ="ageFieldID" .value = "${item.age}" @input= "${e => this.value[index].age = e.target.value}"></fhir-range>` : ""}
         ${this.textField !== "false" ? html`Text: <mwc-textfield id="textFieldID"  outlined .value ="${item.text}" @input= "${e => this.value[index].text = e.target.value}"></mwc-textfield>` : ""}
        ${this.typeField !== "false" ?
                    html`<fhir-coding  id ="typeFieldID" labelOfDisplay ="Interpretation" .value = "${item.type.coding[0] || ""}" @input= "${e => item.type.coding[index] = e.target.value}"></fhir-coding>` : ""}
         `)}
            </div>
            <iron-ajax id= "ajax" bubbles auto handle-as ="json" .url =${this.url}></iron-ajax>
        `}

    updated() {
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e) {
            let range = this.parentNode.host;
            if (e.detail.response.referenceRange !== undefined) {
                range.value = e.detail.response.referenceRange;
            }
            else {
                this.parentNode.removeChild(this.parentNode.getElementById("rangeDiv"));
            }
        })
    }

}

customElements.define("fhir-observation-referencerange", FhirObservationReferencerange);



