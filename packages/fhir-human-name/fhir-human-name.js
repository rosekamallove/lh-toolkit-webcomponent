/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-name>` adds first, middle, last name form fields to your page. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-human-name url=""></fhir-human-name>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-name.html
 *
 */
import { LitElement, html } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@material/mwc-formfield'
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirHumanName extends LitElement {
    static get properties() {
        return {
            /**useField is a selectable option for use of name. Use this property to show/hide. Default: true */
            useField: { type: String },
            /**suffixField is show suffix. Use this property to show/hide. Default: true */
            suffixField: { type: String },
            /**prefixField is used to show prefix. Use this property to show/hide. Default: true */
            prefixField: { type: String },
            /**fName is to show first name of a person. Use this property to show/hide. Default: true */
            fName: { type: String },
            /**lName is to show last name of a person. Use this property to show/hide. Default: true */
            lName: { type: String },
            /**mName is to show mName name of a person. Use this property to show/hide. Default: false */
            mName: { type: String },
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: { type: String },
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },
            /**value is used to take the input value of each field*/
            value: { type: Array }
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.useField = 'true';
        this.suffixField = 'true';
        this.prefixField = 'true';
        this.fName = 'true';
        this.mName = 'false';
        this.lName = 'true';
        this.periodField = 'false';
        this.value = [{ given: [] }];
    }

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var humanName = this.parentNode.host;
            if (e.detail.response.name !== undefined) {
                humanName.value = e.detail.response.name;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#humanNameDiv'));
            }
        });
    }

    render() {
        if (typeof (this.value) == "string") {
            this.value = JSON.parse(this.value);
        }
        return html`${this.value.map((i, index) => html`
   <div id="humanNameDiv">
   <mwc-formfield label= "NAME:" alignEnd>
    ${this.useField !== 'false' ? html`
     <mwc-select label = "Use" class="useField" .value="${i.use}" @change="${e => this.value[index].use = e.target.value}">
         <mwc-list-item value="usual">Usual</mwc-list-item>
         <mwc-list-item value="official">Official</mwc-list-item>
         <mwc-list-item value="temp">Temporary</mwc-list-item>
         <mwc-list-item value="nickname">Nickname</mwc-list-item>
         <mwc-list-item value="anonymous">Anonymous</mwc-list-item>
         <mwc-list-item value="old">Old</mwc-list-item>
         <mwc-list-item value="maiden">Maiden</mwc-list-item>
     </mwc-select>
     ` : ''}
     ${this.prefixField !== 'false' ? html`<mwc-textfield outlined class="prefixField" .value="${i.prefix || ""}" @input="${e => this.value[index].prefix = e.target.value}" id="prefix" label="Prefix"></mwc-textfield>` : ''}
     ${this.fName !== 'false' ? html`<mwc-textfield outlined class="fName" .value="${this.mName !== 'false' ? i.given[0] : i.given || "" }" @input="${(e) =>this.mName !== 'false' ? this.value[index].given[0] = e.target.value : this.value[index].given = e.target.value}" label="First Name:"></mwc-textfield>` : ''}
     ${this.mName !== 'false' ? html`<mwc-textfield outlined class="mName" .value="${i.given[1]}" @input="${e => this.value[index].given[1] = e.target.value}" label="Middle Name:"></mwc-textfield>` : ''}
     ${this.lName !== 'false' ? html`<mwc-textfield outlined class="lName" .value="${i.family || ""}" @input="${e => this.value[index].family = e.target.value}" label="Last Name:"></mwc-textfield>` : ''}
     ${this.periodField !== 'false' ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     ${this.suffixField !== 'false' ? html`<mwc-textfield outlined class="suffixField" value="${i.suffix ||""}" @input="${e => this.value[index].suffix = e.target.value}" label="Suffix"></mwc-textfield>` : ''}
     </mwc-formfield>
     </div>
    `)}
    <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>`;
    }
}

window.customElements.define('fhir-human-name', FhirHumanName);