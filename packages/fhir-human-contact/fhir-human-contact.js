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
import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-select';
import '@material/mwc-formfield';
import '@material/mwc-list/mwc-list-item';
import '@polymer/iron-ajax/iron-ajax.js';
import '@lh-toolkit/fhir-period/fhir-period.js';

class FhirHumanContact extends LitElement {
    /**function to check if object is undefined. If undefined show blank else returns obj value*/
    static get properties() {
        return {
            /**useField is a selectable option for use of contact. Use this property to show/hide. Default: true */
            useField:{type: String},
            /**systemField is to select system of contact. Use this property to show/hide. Default: true */
            systemField: {type: String},
            /**contNumb is to display contact number. Use this property to show/hide. Default: true */
            contNumb: {type: String},
            /**rankVal is to show ranking of preference of numbers. Use this property to show/hide. Default: true */
            rankVal: {type: String},
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of each field*/
            value: {type: String}
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

    /**updated() delivers only after render*/
    updated() {
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

    render() {
        if (typeof(this.value) == "string") {
            this.value = JSON.parse(this.value);
        }
        return html`${this.value.map((i, index) => html`
     <div id="humanNameDiv">
     <mwc-formfield label ="Telecom details" alignEnd>
     ${this.systemField !== 'false' ? html`
     <mwc-select label="System"  class="systemField" .value="${i.system}" @change="${e => this.value[index].system = e.target.value}">
         <mwc-list-item value="phone">Phone</mwc-list-item>
         <mwc-list-item value="fax">Fax</mwc-list-item>
         <mwc-list-item value="email">Email</mwc-list-item>
         <mwc-list-item value="Pager">Pager</mwc-list-item>
         <mwc-list-item value="url">URL</mwc-list-item>
         <mwc-list-item value="sms">SMS</mwc-list-item>
         <mwc-list-item value="other">Other</mwc-list-item>
    </mwc-select>` : ''}

     ${this.useField !== 'false' ? html`
     <mwc-select label = "Use" class="useField" .value="${i.use}" @change="${e => this.value[index].use = e.target.value}">
         <mwc-list-item value="home">Home</mwc-list-item>
         <mwc-list-item value="work">Work</mwc-list-item>
         <mwc-list-item value="temp">Temp</mwc-list-item>
         <mwc-list-item value="home">Old</mwc-list-item>
         <mwc-list-item value="mobile">Mobile</mwc-list-item>
     </mwc-select>
    ` : ''}
     ${this.contNumb !== 'false' ? html`<mwc-textfield outlined class="contNumb" value="${i.value || ""}" @input="${e => this.value[index].value = e.target.value}" label="Contact"></mwc-textfield>` : ''}
     ${this.rankVal !== 'false' ? html`<mwc-textfield  outlined class="rankVal" value="${i.rank || ""}" @input="${e => this.value[index].rank = e.target.value}" label="Rank:"></mwc-textfield>` : ''}
     ${this.periodField !== 'false' ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     </mwc-formfield>
     </div>
`)}
<iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>`;
    }
}

window.customElements.define('fhir-human-contact', FhirHumanContact);
