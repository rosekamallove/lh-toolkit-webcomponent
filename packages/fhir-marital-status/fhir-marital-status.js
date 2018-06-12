/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-marital-status>` adds radio buttons to the page for which ypu can select based on status.
 * In typical use, just use `<fhir-marital-status url=""></fhir-marital-status>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-marital-status.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-radio/mwc-radio.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirMaritalStatus extends LitElement {
    static get properties() {
        return {
            /**tableResponsive has radio buttons which is used to show marital status of person. Use this property to show/hide. Default: true */
            tableResponsive: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    constructor() {
        super();
        this.tableResponsive = true;
        this.value = {};
    }
    _setValue()
    {
        if (this.value.length != undefined){
            var i = 0;
            while (true) {
                if (this.shadowRoot.querySelectorAll("mwc-radio")[i].value == this.value) {
                    this.shadowRoot.querySelectorAll("mwc-radio")[i].checked = true;
                    break;
                }
                i++;
            }
        }

    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.maritalStatus != undefined) {
                this.parentNode.host.value = e.detail.response.maritalStatus;
                this.parentNode.host._setValue();

            }
            else if (e.detail.response.maritalStatus == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setValue();
        }
    }

    _render({tableResponsive, url, value}) {
        return html`
       ${tableResponsive ? html`<table class="tableResponsive">
       <label>MARITAL STATUS:</label>
       <form>
       <tr>
       <td><mwc-formfield label="Annulled"><mwc-radio id="annulled" on-click="${e => this.value.maritalStatus = e.target.value}" value="A"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Divorced"><mwc-radio id="divorced" on-click="${e => this.value.maritalStatus = e.target.value}" value="D"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Interlocutory"><mwc-radio id="interlocutory" on-click="${e => this.value.maritalStatus = e.target.value}" value="I"></mwc-radio></mwc-formfield></td>          
       <td><mwc-formfield label="Legally Separated"><mwc-radio id="legallyseparated" on-click="${e => this.value.maritalStatus = e.target.value}" value="L"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Widowed"><mwc-radio id="widowed" on-click="${e => this.value.maritalStatus = e.target.value}" value="W"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Unmarried"><mwc-radio id="unmarried" on-click="${e => this.value.maritalStatus = e.target.value}" value="U"></mwc-radio></mwc-formfield></td>
       </tr>
       <tr>
       <td><mwc-formfield label="Married"><mwc-radio id="married" on-click="${e => this.value.maritalStatus = e.target.value}" value="M"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Polygamous"><mwc-radio id="polygamous" on-click="${e => this.value.maritalStatus = e.target.value}" value="P"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Never Married"><mwc-radio id="nevermarried" on-click="${e => this.value.maritalStatus = e.target.value}" value="S"></mwc-radio></mwc-formfield></td>             
       <td><mwc-formfield label="Domestic partner"><mwc-radio id="domesticpartner" on-click="${e => this.value.maritalStatus = e.target.value}" value="T"></mwc-radio></mwc-formfield></td>
        <td><mwc-formfield label="Unknown"><mwc-radio id="unknown" on-click="${e => this.value.maritalStatus = e.target.value}" value="UNK"></mwc-radio></mwc-formfield></td> 
       </tr> 
       </form>
       </table>` : ''}
       <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-marital-status', FhirMaritalStatus);