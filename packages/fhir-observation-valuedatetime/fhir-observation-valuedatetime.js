/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-valuedatetime>` adds the date and time  of an observation value to the page. Uses input type datetime in mm/dd/yyyy hh:mm:ss format
 * In typical use, just use `<fhir-observation-valuedatetime url=""></fhir-observation-valuedatetime>` or `<fhir-observation-valuedatetime value=""></fhir-observation-valuedatetime>`
 * It uses date-time input and iron-ajax.
 * @customElement
 * @litelement
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-observation-valuedatetime.html
**/


const deserializer  = {
    toAttribute(val) {
        return JSON.stringify(val);
    },
    fromAttribute(str) {
        return JSON.parse(str);
    }
}


import { LitElement, html } from "lit-element";
import "@material/mwc-textfield/mwc-textfield.js";
import "@material/mwc-formfield/mwc-formfield.js";
import moment from "moment";
import "@polymer/iron-ajax"

class FhirObservationValuedatetime extends LitElement {

    static get properties() {
        return {

            /**valDateTime is used to the time and date an observation value was obtained . Use this property to show/hide. Default: true */
            valDateTime: { type: String },

            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },

            /**value is used to take the input value of each field*/
             value: { type: deserializer , reflect:true }
            
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.valDateTime = "true";
        this.value = {};
    }

     /**updated() delivers only after render()*/
    updated() {
               this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e) {
            let valDateTime = this.parentNode.host;
            if (e.detail.response.valueDateTime !== undefined) {
                valDateTime.value = moment(e.detail.response.valueDateTime).format("YYYY-MM-DDTHH:mm:ss");
            } else {
                this.parentNode.removechild(this.parentNode.querySelector("#valDatetimeDiv"))
            }

        } );
    }


    render() {
        return html`
        <div id = "valDatetimeDiv">
        ${this.valDateTime !== "false" ?
                html`<mwc-formfield  class= "obsDateTime" label= "VALUE  TIME:" alignEnd>
        <mwc-textfield id="dateTime" outlined type ="datetime-local" .value ="${this.value}" @input= "${e => this.value = e.target.value}"></mwc-textfield>
        </mwc-formfield>` : ""}
        </div>
        <iron-ajax id="ajax" bubbles auto handle-as = "json" .url="${this.url}"></iron-ajax>
        
        `
    }
}

customElements.define("fhir-observation-valuedatetime", FhirObservationValuedatetime)