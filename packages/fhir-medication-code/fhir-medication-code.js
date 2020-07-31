/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-medication-code>` adds a code (or set of codes) that specify a medication, or a textual description if no code is availableto a page. 
 * In typical use, just use `<fhir-medication-code url=""></fhir-medication-code>` or `<fhir-medication-code value=""></fhir-medication-code>`
 * It uses a mwc-textfield input and iron-ajax.
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-medication-code.html
 *
 */

import { LitElement, html } from "lit-element"
import "@material/mwc-textfield/mwc-textfield.js"
import "@material/mwc-formfield/mwc-formfield.js"
import "@polymer/iron-ajax/iron-ajax.js"


class FhirMedicationCode extends LitElement {

    static get properties() {
        return {
            /**the codeField is used to show the code of a medication code. use this property to show/hide. Default  is false */
            codeField: { type: String },
            /**the systemField is used to show the system of a medication code. use this property to show/hide. Default  is false */
            systemField: { type: String },
            /**the displayField is used to show the textual description of a medication code. use this property to show/hide. Default  is true */
            displayField: { type: String },
            /**used to make AJAX calls to FHIR resource. Default is Null */
            url: { type: String },
            /**takes the input value of each field*/
            value: { type: Object }
        };
    };

    constructor() {
        super();
        this.codeField = "false";
        this.systemField = "false";
        this.displayField = "true";
        this.value = { coding: [{}] };

    };


    render() {
        if (typeof (this.value) == "string") {
            this.value = JSON.parse(this.value);
        }

        return html`
        <div id ="medCodedDiv">
        <mwc-formfield label ="Code:" alignEnd>
        ${this.value.coding.map((i, index) => html`
        ${this.displayField !== "false" ? html`<mwc-textfield id="displayFieldID" outlined .value =${i.display || ""} 
        @input = ${e => this.value.coding[index].display = e.target.value}></mwc-textfield>` : ""}
        ${this.codeField !== "false" ? html`<mwc-textfield id="codeFieldID" outlined label ="code" .value = ${i.code || ""} 
        @input = ${e => this.value.coding[index].code = e.target.value} ></mwc-textfield>` : ""}
        ${this.systemField !== "false" ? html`<mwc-textfield id="systemFieldID" outlined label ="system" .value= ${i.system || ""} 
        @input = ${e => this.value.coding[index].system = e.target.value} ></mwc-textfield>` : ""}
         
        `)}
        </mwc-formfield>
        </div>
        <iron-ajax id ="ajax" auto bubbles handle-as ="json" .url =${this.url}></iron-ajax>      
      `
    }


    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e) {
            let medCode = this.parentNode.host;
            if (e.detail.response.code !== undefined) {
                medCode.value = e.detail.response.code

            } else {
                this.parentNode.removeChild(this.parentNode.getElementById("medCodedDiv"));
            }
        })
    }


};
customElements.define("fhir-medication-code", FhirMedicationCode);

