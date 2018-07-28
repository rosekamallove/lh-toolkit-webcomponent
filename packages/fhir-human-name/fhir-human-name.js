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
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirHumanName extends LitElement {
    static get properties() {
        return {
            /**useField is a selectable option for use of name. Use this property to show/hide. Default: true */
            useField: String,
            /**suffixField is show suffix. Use this property to show/hide. Default: true */
            suffixField: String,
            /**prefixField is used to show prefix. Use this property to show/hide. Default: true */
            prefixField: String,
            /**fName is to show first name of a person. Use this property to show/hide. Default: true */
            fName: String,
            /**lName is to show last name of a person. Use this property to show/hide. Default: true */
            lName: String,
            /**mName is to show mName name of a person. Use this property to show/hide. Default: false */
            mName: String,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
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
        this.value = [{given:[]}];
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var humanName = this.parentNode.host;
            if(e.detail.response.name !== undefined) {
                humanName.value = e.detail.response.name;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#humanNameDiv'));
            }
        });
    }

    _render({useField, suffixField, fName, mName, lName, periodField, url, prefixField, value}) {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`${this.value.map((i, index) => html`
   <div id="humanNameDiv">
   <label>Name:</label>
   ${useField !== 'false' ? html`
     <label>Use:</label>
     <select class="useField" value="${i.use}" on-change="${e => this.value[index].use = e.target.value}">
         <option value="usual">Usual</option>
         <option value="official">Official</option>
         <option value="temp">Temporary</option>
         <option value="nickname">Nickname</option>
         <option value="anonymous">Anonymous</option>
         <option value="old">Old</option>
         <option value="maiden">Maiden</option>
     </select>` : ''}
     ${prefixField !== 'false' ? html`<mwc-textfield outlined class="prefixField" value="${i.prefix}" on-input="${e => this.value[index].prefix = e.target._input.value}" id="prefix" label="Prefix"></mwc-textfield>` : ''}
     ${fName !== 'false' ? html`<mwc-textfield outlined class="fName" value="${mName !== 'false' ? i.given[0]:i.given}" on-input="${(e) => mName !== 'false' ? this.value[index].given[0] = e.target._input.value:this.value[index].given = e.target._input.value}" label="First Name:"></mwc-textfield>` : ''}
     ${mName !== 'false' ? html`<mwc-textfield outlined class="mName" value="${i.given[1]}" on-input="${e => this.value[index].given[1]= e.target._input.value}" label="Middle Name:"></mwc-textfield>` : ''}
     ${lName !== 'false' ? html`<mwc-textfield outlined class="lName" value="${i.family}" on-input="${e => this.value[index].family = e.target._input.value}" label="Last Name:"></mwc-textfield>` : ''}
     ${periodField !== 'false' ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     ${suffixField !== 'false' ? html`<mwc-textfield outlined class="suffixField" value="${i.suffix}" on-input="${e => this.value[index].suffix = e.target._input.value}" label="Suffix"></mwc-textfield>` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `)}`;
    }
}

window.customElements.define('fhir-human-name', FhirHumanName);