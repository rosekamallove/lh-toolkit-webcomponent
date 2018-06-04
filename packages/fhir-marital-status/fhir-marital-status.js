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
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-birth-date.html
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
            url: String
        }
    }

    constructor() {
        super();
        this.tableResponsive = true;
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.maritalStatus != undefined) {
                var i = 0;
                while (true) {
                    if (e.target.parentNode.querySelectorAll("mwc-radio")[i].value == e.detail.response.maritalStatus) {
                        e.target.parentNode.querySelectorAll("mwc-radio")[i].checked = true;
                        break;
                    }
                    i++;
                }
            }
            else if (e.detail.response.maritalStatus == undefined) {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }

    _render({tableResponsive, url}) {
        return html`
       ${tableResponsive ? html`<table class="tableResponsive">
       <label>MARITAL STATUS:</label>
       <form>
       <tr>
       <td><mwc-formfield label="Annulled"><mwc-radio id="annulled" value="A"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Divorced"><mwc-radio id="divorced" value="D"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Interlocutory"><mwc-radio id="interlocutory" value="I"></mwc-radio></mwc-formfield></td>          
       <td><mwc-formfield label="Legally Separated"><mwc-radio id="legallyseparated" value="L"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Widowed"><mwc-radio id="widowed" value="W"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Unmarried"><mwc-radio id="unmarried" value="U"></mwc-radio></mwc-formfield></td>
       </tr>
       <tr>
       <td><mwc-formfield label="Married"><mwc-radio id="married" value="M"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Polygamous"><mwc-radio id="polygamous" value="P"></mwc-radio></mwc-formfield></td>
       <td><mwc-formfield label="Never Married"><mwc-radio id="nevermarried" value="S"></mwc-radio></mwc-formfield></td>             
       <td><mwc-formfield label="Domestic partner"><mwc-radio id="domesticpartner" value="T"></mwc-radio></mwc-formfield></td>
        <td><mwc-formfield label="Unknown"><mwc-radio id="unknown" value="UNK"></mwc-radio></mwc-formfield></td> 
       </tr> 
       </form>
       </table>` : ''}
       <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-marital-status', FhirMaritalStatus);