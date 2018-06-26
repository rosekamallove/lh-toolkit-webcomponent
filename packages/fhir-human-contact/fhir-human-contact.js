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
    static get properties() {
        return {
            /**useField is a selectable option for use of contact. Use this property to show/hide. Default: true */
            useField: String,
            /**systemField is to select system of contact. Use this property to show/hide. Default: true */
            systemField: String,
            /**contNumb is to display contact number. Use this property to show/hide. Default: true */
            contNumb: String,
            /**rankVal is to show ranking of preference of numbers. Use this property to show/hide. Default: true */
            rankVal: String,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    constructor() {
        super();
        this.useField = 'true';
        this.systemField = 'true';
        this.contNumb = 'true';
        this.rankVal = 'true';
        this.periodField = 'false';
        this.value = [{}];
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var humanName = this.parentNode.host;
            if (e.detail.response.telecom !== undefined) {
                humanName.value = e.detail.response.telecom;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#humanNameDiv'));
            }
        });
    }

    _render({systemField, useField, contNumb, rankVal, periodField, url, value}) {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`${this.value.map((i, index) => html`
     <div id="humanNameDiv">
     <label>TELECOM DETAILS:</label>
     ${systemField !== 'false' ? html`
     System:<select class="systemField" value="${i.system}" on-change="${e => this.value[index].system = e.target.value}">
         <option value="phone">Phone</option>
         <option value="fax">Fax</option>
         <option value="email">Email</option>
         <option value="Pager">Pager</option>
         <option value="url">URL</option>
         <option value="sms">SMS</option>
         <option value="other">Other</option>` : ''}
     ${useField !== 'false' ? html`
     </select>
     Use:<select class="useField" value="${i.use}" on-change="${e => this.value[index].use = e.target.value}">
         <option value="home">Home</option>
         <option value="work">Work</option>
         <option value="temp">Temp</option>
         <option value="home">Old</option>
         <option value="mobile">Mobile</option>
     </select>` : ''}
     ${contNumb !== 'false' ? html`<mwc-textfield outlined class="contNumb" value="${i.value}" on-input="${e => this.value[index].value = e.target._input.value}" label="ContactNumber:"></mwc-textfield>` : ''}
     ${rankVal !== 'false' ? html`<mwc-textfield outlined class="rankVal" value="${i.rank}" on-input="${e => this.value[index].rank = e.target._input.value}" label="Rank:"></mwc-textfield>` : ''}
     ${periodField !== 'false' ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
`)}`;
    }
}

window.customElements.define('fhir-human-contact', FhirHumanContact);
