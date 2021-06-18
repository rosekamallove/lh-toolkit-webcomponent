/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-marital-status>` adds radio buttons to the page fro which ypu can select based on status.
 * In typical use, just use `<fhir-marital-status url=""></fhir-marital-status>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-marital-status.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-radio/mwc-radio.js';
import '@polymer/iron-ajax/iron-ajax.js';

/**converts between json and string attributes */
const jsonStringConverter = {
    toAttribute(val) {
        return JSON.stringify(val);
    },
    fromAttribute(str) {
        return JSON.parse(str);
    }
};
class FhirMaritalStatus extends LitElement {
    static get properties() {
        return {
            /**tableResponsive has radio buttons which is used to show marital status of person. Use this property to show/hide. Default: true */
            tableResponsive: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url:  {type: String},
            /**value is used to take the input value of each field*/
            value:  {type: jsonStringConverter, reflect: true}
        }
    }

    constructor() {
        super();
        this.tableResponsive = 'true';
        this.value = [];
    }

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var status = this.parentNode.host;
            if (e.detail.response.maritalStatus !== undefined) {
                status.value = e.detail.response.maritalStatus;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('.tableResponsive'));
            }
        });
    }

    render() {
        return html`
       ${this.tableResponsive !== 'false' ? html`
       <mwc-formfield label= "Marital Status:" alignEnd > 
       <table class="tableResponsive">        
       <form>
       <tr>
       <td><mwc-formfield label="Annulled"><mwc-radio id="annulled" @click="${e => this.value = e.target.value}" value="A" checked="${this.value == 'A' ? true : false}"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Divorced"><mwc-radio id="divorced" @click="${e => this.value = e.target.value}" value="D" checked="${this.value == 'D' ? true : false}"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Interlocutory"><mwc-radio id="interlocutory" @click="${e => this.value = e.target.value}" value="I" checked="${this.value == 'I' ? true : false}"></mwc-radio></mwc-formfield></td>          
       <td><mwc-formfield label="Legally Separated"><mwc-radio id="legallyseparated" @click="${e => this.value = e.target.value}" value="L" checked="${this.value == 'L' ? true : false}"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Widowed"><mwc-radio id="widowed" @click="${e => this.value = e.target.value}" value="W" checked="${this.value == 'W' ? true : false}"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Unmarried"><mwc-radio id="unmarried" @click="${e => this.value = e.target.value}" value="U" checked="${this.value == 'U' ? true : false}"></mwc-radio></mwc-formfield></td>
       </tr>
       <tr>
       <td><mwc-formfield label="Married"><mwc-radio id="married" @click="${e => this.value = e.target.value}" value="M" checked="${this.value == 'M' ? true : false}"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Polygamous"><mwc-radio id="polygamous" @click="${e => this.value = e.target.value}" value="P" checked="${this.value == 'P' ? true : false}"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Never Married"><mwc-radio id="nevermarried" @click="${e => this.value = e.target.value}" value="S" checked="${this.value == 'S' ? true : false}"></mwc-radio></mwc-formfield></td>             
       <td><mwc-formfield label="Domestic partner"><mwc-radio id="domesticpartner" @click="${e => this.value = e.target.value}" value="T" checked="${this.value == 'T' ? true : false}"></mwc-radio></mwc-formfield></td>
        <td><mwc-formfield label="Unknown"><mwc-radio id="unknown" @click="${e => this.value = e.target.value}" value="UNK" checked="${this.value == 'UNK' ? true : false}"></mwc-radio></mwc-formfield></td> 
       </tr> 
       </form>
    </table>
       </mwc-formfield>` : ''}
       <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-marital-status', FhirMaritalStatus);