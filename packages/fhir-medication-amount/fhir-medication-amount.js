/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-medication-amount>` adds the specific amount of drug in a packaged medication product to the page. Uses fhir-ratio and iron-ajax.
 * In typical use, just use `<fhir-medication-amount url=""></fhir-medication-amount>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-medication-amount.html
 */


import { LitElement, html } from "lit-element";
import "@material/mwc-formfield/mwc-formfield.js"
import "@lh-toolkit/fhir-ratio/fhir-ratio.js";
import "@polymer/iron-ajax/iron-ajax.js";

class FhirMedicationAmount extends LitElement {
    static get properties() {
        return {
            /**valueField help to fill in the the amount of a medication. Use this property to show/hide. Default: true */
            valueField: { type: String },
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },
            /**value is used to take the input value of each field*/
            value: { type: Object }
        }
    }
    constructor() {
        super();
        this.valueField = "true";
        this.value = {};
    }

    render() {
        return html`
        <div id ="medAmtDiv">
        <mwc-formfield label ="Amount:" alignEnd>
        <fhir-ratio id="amountID" .value = "${this.value}" @input = ${e => this.value = e.target.value}></fhir-ratio>
        </mwc-formfield>
        </div>
        <iron-ajax id="ajax" bubbles auto handle-as ="json" .url="${this.url}"></iron-ajax>
        `
    }

    updated() {
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e) {
            let medAmount = this.parentNode.host;
            if (e.detail.response.amount != undefined) {
                medAmount.value = e.detail.response.amount;
            }
            else {
                this.parentNode.removeChild(this.parentNode.getElementById("medAmtID"))
            }
        })
    }
}
customElements.define("fhir-medication-amount", FhirMedicationAmount);