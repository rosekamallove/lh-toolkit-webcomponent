/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-contact>` adds fields to capture contact deatils and rank for usage. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-human-contact url=""></fhir-human-contact>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-contact.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@lh-toolkit/fhir-period/fhir-period.js';

class FhirHumanContact extends LitElement {
    /**function to check if object is undefined. If undefined show blank else returns obj value*/
    static undefinedToBlank(obj) {
        if (obj == undefined) {
            return '';
        }
        else {
            return obj;
        }
    }

    static get properties() {
        return {
            /**useField is a selectable option for use of contact. Use this property to show/hide. Default: true */
            useField: Boolean,
            /**systemField is to select system of contact. Use this property to show/hide. Default: true */
            systemField: Boolean,
            /**contNumb is to display contact number. Use this property to show/hide. Default: true */
            contNumb: Boolean,
            /**rankVal is to show ranking of preference of numbers. Use this property to show/hide. Default: true */
            rankVal: Boolean,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    constructor() {
        super();
        this.useField = true;
        this.systemField = true;
        this.contNumb = true;
        this.rankVal = true;
        this.periodField = false;
        this.value = [];
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
            for (let telecom of data) {
                var child = this.shadowRoot.childNodes[1];
                if (i > 0) {
                    var child = this.shadowRoot.childNodes[1].cloneNode(true);
                    this.shadowRoot.appendChild(child);
                }
                child.querySelectorAll('.systemField')[0].value = data[i].system;
                child.querySelectorAll('.useField')[0].value = data[i].use;
                child.querySelectorAll('.contNumb')[0].value = FhirHumanContact.undefinedToBlank(data[i].value);
                child.querySelectorAll('.rankVal')[0].value = FhirHumanContact.undefinedToBlank(data[i].rank);
                i++;
            }
        }
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.telecom != undefined) {
                this.parentNode.host.value = e.detail.response.telecom;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.telecom == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setValue();
        }
    }

    _render({systemField, useField, contNumb, rankVal, periodField, url, value}) {
        return html`
     <div>
     <label>TELECOM DETAILS:</label>
     ${systemField ? html`
     System:<select class="systemField" on-change="${e => this.value.system = e.target.value}">
         <option value="phone">Phone</option>
         <option value="fax">Fax</option>
         <option value="email">Email</option>
         <option value="Pager">Pager</option>
         <option value="url">URL</option>
         <option value="sms">SMS</option>
         <option value="other">Other</option>` : ''}
     ${useField ? html`
     </select>
     Use:<select class="useField" on-change="${e => this.value.use = e.target.value}">
         <option value="home">Home</option>
         <option value="work">Work</option>
         <option value="temp">Temp</option>
         <option value="home">Old</option>
         <option value="mobile">Mobile</option>
     </select>` : ''}
     ${contNumb ? html`<mwc-textfield outlined class="contNumb" on-input="${e => this.value.value = e.target._input.value}" label="ContactNumber:"></mwc-textfield>` : ''}
     ${rankVal ? html`<mwc-textfield outlined class="rankVal" on-input="${e => this.value.rank = e.target._input.value}" label="Rank:"></mwc-textfield>` : ''}
     ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     </div>
         <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
`;
    }
}

window.customElements.define('fhir-human-contact', FhirHumanContact);
