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
            /**useField is a selectable option for use of name. Use this property to show/hide. Default: true */
            useField: Boolean,
            /**suffixField is show suffix. Use this property to show/hide. Default: true */
            suffixField: Boolean,
            /**prefixField is used to show prefix. Use this property to show/hide. Default: true */
            prefixField: Boolean,
            /**fName is to show first name of a person. Use this property to show/hide. Default: true */
            fName: Boolean,
            /**lName is to show last name of a person. Use this property to show/hide. Default: true */
            lName: Boolean,
            /**mName is to show mName name of a person. Use this property to show/hide. Default: false */
            mName: Boolean,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.useField = true;
        this.suffixField = true;
        this.prefixField = true;
        this.fName = true;
        this.mName = false;
        this.lName = true;
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
        if (data.length != 0) {
            var i = 0;
            for (let val of data) {
                var child = this.shadowRoot.childNodes[1];
                if (i > 0) {
                    child = this.shadowRoot.childNodes[1].cloneNode(true);
                    this.shadowRoot.appendChild(child);
                }
                child.querySelectorAll('.useField')[0].value = data[i].use;
                child.querySelectorAll('.suffixField')[0].value = FhirHumanName.undefinedToBlank(data[i].suffix);
                child.querySelectorAll('.prefixField')[0].value = FhirHumanName.undefinedToBlank(data[i].prefix);
                child.querySelectorAll('.fName')[0].value = FhirHumanName.undefinedToBlank(data[i].given);
                if (child.querySelectorAll('.mName').length != 0) {
                    child.querySelectorAll('.fName')[0].value = data[i].given[0];
                    child.querySelectorAll('.mName')[0].value = FhirHumanName.undefinedToBlank(data[i].given[1]);
                }
                child.querySelectorAll('.lName')[0].value = FhirHumanName.undefinedToBlank(data[i].family);
                if (child.querySelectorAll('.periodField').length != 0
                    && data[i].period != undefined)
                    child.querySelectorAll('.periodField')[0].period = JSON.stringify(data[i].period);
                i++;
            }
        }
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.name != undefined) {
                this.parentNode.host.value = e.detail.response.name;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.name == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url && this.value) {
            this._setValue();
        }
    }

    _render({useField, suffixField, fName, mName, lName, periodField, url, prefixField, value}) {
        return html`
   <div>
   <label>NAME:</label>
   ${useField ? html`
     <label>Use:</label>
     <select class="useField" on-change="${e => this.value.use = e.target.value}">
         <option value="usual">Usual</option>
         <option value="official">Official</option>
         <option value="temp">Temporary</option>
         <option value="nickname">Nickname</option>
         <option value="anonymous">Anonymous</option>
         <option value="old">Old</option>
         <option value="maiden">Maiden</option>
     </select>` : ''}
     ${prefixField ? html`<mwc-textfield outlined class="prefixField" on-input="${e => this.value.prefix = e.target._input.value}" id="prefix" label="Prefix"></mwc-textfield>` : ''}
     ${fName ? html`<mwc-textfield outlined class="fName" on-input="${e => this.value.given = e.target._input.value}" label="First Name:"></mwc-textfield>` : ''}
     ${mName ? html`<mwc-textfield outlined class="mName" on-input="${e => this.value.given = e.target._input.value}" label="Middle Name:"></mwc-textfield>` : ''}
     ${lName ? html`<mwc-textfield outlined class="lName" on-input="${e => this.value.family = e.target._input.value}" label="Last Name:"></mwc-textfield>` : ''}
     ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     ${suffixField ? html`<mwc-textfield outlined class="suffixField" on-input="${e => this.value.suffix = e.target._input.value}" label="Suffix"></mwc-textfield>` : ''}
         </div>
         <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-human-name', FhirHumanName);