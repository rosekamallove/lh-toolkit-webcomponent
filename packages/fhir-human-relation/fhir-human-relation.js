/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-relation>` adds Type of relation. Uses select
 * In typical use, just use `<fhir-human-relation url=""></fhir-human-relation>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-relation.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirHumanRelation extends LitElement {
    static get properties() {
        return {
            /**relationType is used to show type of relationship. Use this property to show/hide. Default: true */
            relationType: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.relationType = true;
        this.value = {};
    }

    _setValue() {
        let data;
        if (typeof(this.value) == "string") {
            data = JSON.parse(this.value);
        } else {
            data = this.value;
        }
        if (data.length != undefined) {
            var i = 0;
            for (let contact of data) {
                var child = this.shadowRoot.childNodes[1];
                if (i > 0) {
                    var child = this.shadowRoot.childNodes[1].cloneNode(true);
                    this.shadowRoot.appendChild(child);
                }
                child.querySelectorAll('.relationType')[0].value = data[0].relationship[0].coding[i].code;
                i++;
            }
        }
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.contact != undefined) {
                this.parentNode.host.value = e.detail.response.contact;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.contact == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setValue();
        }
    }

    _render({url, relationType, value}) {
        return html`
    <div>
    <label>CONTACT PERSON DETAILS:</label><br> 
    ${relationType ? html`
     Relation:<select class="relationType" on-change="${e => this.value.code = e.target.value}">
         <option value="BP">Billing Contact Person</option>
         <option value="C">Emergency Contact</option>
         <option value="CP">Contact Person</option>
         <option value="E">Employer</option>
         <option value="EP">Emergency Contact Person</option>
         <option value="F">Federal Agency</option>
         <option value="I">Insurance Company</option>
         <option value="N">Next-Of-Kin</option>
         <option value="O">Other</option>
         <option value="PR">Person Preparing Referral</option>
         <option value="S">State Agency</option>
         <option value="U">Unknown</option>
     </select>` : ''}
     </div>   
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-human-relation', FhirHumanRelation);
