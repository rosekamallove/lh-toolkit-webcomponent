/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-address>` adds address line1, line2, city,district and use fields to your page. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-human-address url=""></fhir-human-address>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-address.html
 *
 */
import { LitElement, html, css } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-formfield';
import '@polymer/iron-ajax/iron-ajax.js';
import '@lh-toolkit/fhir-period/fhir-period.js';



class FhirHumanAddress extends LitElement {
    static get properties() {
        return {
            /**useSelect is a selectable option for use of address. Use this property to show/hide. Default: true */
            useSelect: { type: String },
            /**typeSelect is a selectable option for type of address. Use this property to show/hide. Default: true */
            typeSelect: { type: String },
            /**add1Field is used to display address line 1. Use this property to show/hide. Default: true */
            add1Field: { type: String },
            /**add2Field is to display address line 2. Use this property to show/hide. Default: true */
            add2Field: { type: String },
            /**cityField is to display city. Use this property to show/hide. Default: true */
            cityField: { type: String },
            /**districtField is to display district. Use this property to show/hide. Default: true */
            districtField: { type: String },
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: { type: String },
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },
            /**value is used to take the input value of each field*/
            value: { type: Array }
        }
    }


    constructor() {
        super();
        this.useSelect = 'true';
        this.typeSelect = 'true';
        this.add1Field = 'true';
        this.add2Field = 'true';
        this.cityField = 'true';
        this.districtField = 'true';
        this.periodField = 'false';
        this.value = [{}];
    }
    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var address = this.parentNode.host;
            if (e.detail.response.address !== undefined) {
                address.value = e.detail.response.address;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#addressDiv'));
            }
        });
    }
    render() {

        if (typeof (this.value) == "string") {
            this.value = JSON.parse(this.value);
        }
        return html`${this.value.map((i, index) => html`
     <div id="addressDiv">
     <mwc-formfield label = "Address:" alignEnd>
     ${this.useSelect !== 'false' ? html`
     <mwc-select label ="Use" class="useSelect" .value="${i.use}" @change="${e => this.value[index].use = e.target.value}">
         <mwc-list-item value="home">Home</mwc-list-item>
         <mwc-list-item value="work">Work</mwc-list-item>
         <mwc-list-item value="temp">Temporary</mwc-list-item>
         <mwc-list-item value="old">Old</mwc-list-item>
     </mwc-select>` : ''}
     ${this.typeSelect !== 'false' ? html`
     <mwc-select label ="Type" class="typeSelect" .value="${i.type}" @change="${e => this.value[index].type = e.target.value}">
         <mwc-list-item value="postal">Postal</mwc-list-item>
         <mwc-list-item value="physical">Physical</mwc-list-item>
         <mwc-list-item value="both">Both</mwc-list-item>
     </mwc-select>` : ''}
     ${this.add1Field !== 'false' ? html`<mwc-textfield outlined class="add1Field" .value="${i.text || ""}" label="Address 1" @input="${e => this.value[index].text = e.target.value}"></mwc-textfield>` : ''}
     ${this.add2Field !== 'false' ? html`<mwc-textfield outlined class="add2Field" .value="${i.line || ""}" label="Address 2" @input="${e => this.value[index].line = e.target.value}"></mwc-textfield>` : ''}
     ${this.cityField !== 'false' ? html`<mwc-textfield outlined class="cityField" .value="${i.city || ""}" label="City" @input="${e => this.value[index].city = e.target.value}"></mwc-textfield>` : ''}
     ${this.districtField !== 'false' ? html`<mwc-textfield outlined class="districtField" .value="${i.district || ""}" label="District" @input="${e => this.value[index].district = e.target.value}"></mwc-textfield>` : ''}
     ${this.periodField !== 'false' ? html`<fhir-period class="periodField" .value="${i.period}" @input="${e => this.value[index].period = e.target.value}"></fhir-period>` : ''}
     </mwc-formfield>
    </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
`)}`;
    }
}

window.customElements.define('fhir-human-address', FhirHumanAddress);
