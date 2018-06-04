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
            url: String
        }
    }

    constructor() {
        super();
        this.useField = true;
        this.systemField = true;
        this.contNumb = true;
        this.rankVal = true;
        this.periodField = false;
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.telecom != undefined) {
                var i = 0;
                for (let telecom of e.detail.response.telecom) {
                    if (i > 0) {
                        var child = e.target.parentNode.childNodes[1].cloneNode(true);
                        e.target.parentNode.appendChild(child);
                    }
                    e.target.parentNode.querySelectorAll('.systemField')[i].value = e.detail.response.telecom[i].system;
                    e.target.parentNode.querySelectorAll('.useField')[i].value = e.detail.response.telecom[i].use;
                    e.target.parentNode.querySelectorAll('.contNumb')[i].value = FhirHumanContact.undefinedToBlank(e.detail.response.telecom[i].value);
                    e.target.parentNode.querySelectorAll('.rankVal')[i].value = FhirHumanContact.undefinedToBlank(e.detail.response.telecom[i].rank);
                    i++;
                }
            }
            else if (e.detail.response.telecom == undefined) {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }

    _render({systemField, useField, contNumb, rankVal, periodField, url}) {
        return html`
     <div>
     <label>TELECOM DETAILS:</label>
     ${systemField ? html`
     System:<select class="systemField">
         <option value="phone">Phone</option>
         <option value="fax">Fax</option>
         <option value="email">Email</option>
         <option value="Pager">Pager</option>
         <option value="url">URL</option>
         <option value="sms">SMS</option>
         <option value="other">Other</option>` : ''}
     ${useField ? html`
     </select>
     Use:<select class="useField">
         <option value="home">Home</option>
         <option value="work">Work</option>
         <option value="temp">Temp</option>
         <option value="home">Old</option>
         <option value="mobile">Mobile</option>
     </select>` : ''}
     ${contNumb ? html`<mwc-textfield outlined class="contNumb" id="contact" label="ContactNumber:"></mwc-textfield>` : ''}
     ${rankVal ? html`<mwc-textfield outlined class="rankVal" id="rank" label="Rank:"></mwc-textfield>` : ''}
     ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     </div>
         <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
`;
    }
}

window.customElements.define('fhir-human-contact', FhirHumanContact);
