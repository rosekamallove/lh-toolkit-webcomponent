/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-person-identifier>` adds select option and two mwc-textfields to page. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-person-identifier url=""></fhir-person-identifier>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-person-identifier.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@lh-toolkit/fhir-period/fhir-period.js';

class FhirPersonIdentifier extends LitElement {
    static get properties() {
        return {
            /**useField is to show use of below fields. Use this property to show/hide. Default: true */
            useField: String,
            /**systemIdentifier is to show system identifier number. Use this property to show/hide. Default: true */
            systemIdentifier: String,
            /**identifierField is to show person identifier number. Use this property to show/hide. Default: true */
            identifierField: String,
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
        this.systemIdentifier = 'true';
        this.identifierField = 'true';
        this.periodField = 'false';
        this.value = [{}];
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var identifier = this.parentNode.host;
            if(e.detail.response.identifier !== undefined) {
                identifier.value = e.detail.response.identifier;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#div'));
            }
        });
    }


    _render({useField, systemIdentifier, identifierField, periodField, url, value}) {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`${this.value.map((i, index) => html`
        <div id="div">
         <label>Identifier:</label>
        ${useField !== 'false' ? html`
        Use:<select class="useField" value="${i.use}" on-change="${e => this.value[index].use = e.target.value}">
        <option value="usual">Usual</option>
        <option value="official">Official</option>
        <option value="temp">Temporary</option>
        <option value="secondary">Secondary</option>
        </select>` : ''}
        ${systemIdentifier !== 'false' ? html`<mwc-textfield outlined value="${i.system}" on-input="${e => this.value[index].system = e.target._input.value}" class="systemIdentifier" label="System:"></mwc-textfield>` : ''}
        ${identifierField !== 'false' ? html`<mwc-textfield outlined value="${i.value}" on-input="${e => this.value[index].value = e.target._input.value}" class="identifierField" label="Identifier:"></mwc-textfield>` : ''}
        ${periodField !== 'false' ? html`<fhir-period class="periodField" value="${i.period}" on-input="${e => this.value[index].period = e.target.value}"></fhir-period>` : ''}
        </div>
        <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
     `)}`;
    }
}

window.customElements.define('fhir-person-identifier', FhirPersonIdentifier);
