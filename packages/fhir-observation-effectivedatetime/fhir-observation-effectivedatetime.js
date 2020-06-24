/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-effectivedatetime>` adds observation effective date and time to the page. Uses input type datetime in mm/dd/yyyy hh:mm:ss format
 * In typical use, just use `<fhir-observation-effectivedatetime url=""></fhir-observation-effectivedatetime>`
 * It uses date-time input and iron-ajax.
 * @customElement
 * @litelement
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-observation-effectivedatetime.html
**/

const jsonStringConverter = {
    toAttribute(val) {
        return JSON.parse(val);
    },
    fromAttribute(str) {
        return JSON.stringify(str);
    }
}


import { LitElement, html } from "lit-element";
import '@material/mwc-textfield';
import '@material/mwc-formfield';
import moment from 'moment';
import '@polymer/iron-ajax'

class FhirObservationEffectivedatetime extends LitElement {

    static get properties() {
        return {

            /**obsDateTime is used to show persons effective observation date and time. Use this property to show/hide. Default: true */
            obsDateTime: { type: String },

            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },

            /**value is used to take the input value of each field*/
             value: { type: jsonStringConverter, reflect:true }
            
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.obsDateTime = "true";
        this.value = {};
    }

     /**updated() delivers only after render()*/
    updated() {
               this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            let obsDatetime = this.parentNode.host;
            if (e.detail.response.effectiveDateTime !== undefined) {
                obsDatetime.value = moment(e.detail.response.effectiveDateTime).format("YYYY-MM-DDThh:mm:ss");
            } else {
                this.parentNode.removechild(this.parentNode.querySelector("#obsDatetimeDiv"))
            }

        } );
    }


    render() {
        return html`
        <div id = "obsDatetimeDiv">
        ${this.obsDateTime !== "false" ?
                html`<mwc-formfield  class= "obsDateTime" label= "OBSERVATION TIME:" alignEnd>
        <mwc-textfield id="dateTime" outlined type ="datetime-local" .value =${this.value} @input= "${e => this.value = e.target.value}"></mwc-textfield>
        </mwc-formfield>` : ""}
        </div>
        <iron-ajax id="ajax" bubbles auto handle-as = "json" .url=${this.url}></iron-ajax>
        
        `
    }



}

customElements.define('fhir-observation-effectivedatetime', FhirObservationEffectivedatetime)