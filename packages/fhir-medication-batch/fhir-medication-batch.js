/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-medication-batch>` adds the lot number and expiry date information of a medication package to the page. Uses mwc-textfield, moment and iron-ajax. Date in mm/dd/yyyy format
 * In typical use, just use `<fhir-medication-batch url=""></fhir-medication-batch>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-medication-batch.html
 */


import { LitElement, html } from "lit-element";
import "@material/mwc-formfield/mwc-formfield.js";
import "@material/mwc-textfield/mwc-textfield.js";
import "@polymer/iron-ajax/iron-ajax.js";
import moment from "moment";


class FhirMedicationBatch extends LitElement {
    static get properties() {
        return {
            /**the lotField shows the value of the lot number of a medication package. This property is used to show/hide field. Default is true  */
            lotField: { type: String },
            /**the expiryField shows the expiry date of a medication package. This property is used to show/hide field. Default is true  */
            expiryField: { type: String },
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },
            /**value is used to take the input value of each field*/
            value: { type: Object }
        }
    }

    constructor() {
        super();
        this.lotField = "true";
        this.expiryField = "true";
        this.value = {
            "lotNumber": "",
            "expirationDate": moment("").format("YYYY-MM-DD")
        };
    }

    render() {
        return html`
        <div id="batchID">
        <mwc-formfield label ="Batch:" alignEnd>
        ${this.lotField !== "false" ? html`<mwc-textfield outlined id ="lotID" label ="lot" .value =${this.value.lotNumber} 
        @input = ${e => this.value.lotNumber = e.target.value}></mwc-textfield>` : ""}

        ${this.expiryField !== "false" ? html`<mwc-textfield label ="Expiration date" id ="expiryID" type ="date" outlined .value =${this.value.expirationDate}
        @input = ${e => this.value.expirationDate = e.target.value}></mwc-textfield>` : ""}
        </mwc-formfield>
        </div>
        <iron-ajax id="ajax" bubbles auto handle-as ="json" .url=${this.url}></iron-ajax>
        
        `
    }

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e) {
            let batch = this.parentNode.host;
            if (e.detail.response.batch !== undefined) {
                batch.value = e.detail.response.batch

            }
            else {
                this.parentNode.removeChild(this.parentNode.getElementById("batchID"));
            }
        });
    };

}
customElements.define("fhir-medication-batch", FhirMedicationBatch)