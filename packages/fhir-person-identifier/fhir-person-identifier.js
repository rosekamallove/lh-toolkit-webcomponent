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
            /**useField is to show use of below fields. Use this property to show/hide. Default: true */
            useField: Boolean,
            /**systemIdentifier is to show system identifier number. Use this property to show/hide. Default: true */
            systemIdentifier: Boolean,
            /**identifierField is to show person identifier number. Use this property to show/hide. Default: true */
            identifierField: Boolean,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    constructor() {
        super();
        this.useField = true;
        this.systemIdentifier = true;
        this.identifierField = true;
        this.periodField = false;
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
            for (let identifier of data) {
                var child = this.shadowRoot.childNodes[1];
                if (i > 0) {
                    var child = this.shadowRoot.childNodes[1].cloneNode(true);
                    this.shadowRoot.appendChild(child);
                }
                child.querySelectorAll('.useField')[0].value = FhirPersonIdentifier.undefinedToBlank(data[i].use);
                child.querySelectorAll('.systemIdentifier')[0].value = FhirPersonIdentifier.undefinedToBlank(data[i].system);
                child.querySelectorAll('.identifierField')[0].value = FhirPersonIdentifier.undefinedToBlank(data[i].value);
                i++;
            }
        }
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.identifier != undefined) {
                this.parentNode.host.value = e.detail.response.identifier;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.identifier == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setValue();
        }
    }

    _render({useField, systemIdentifier, identifierField, periodField, url, value}) {
        return html`
<div>
<label>IDENTIFIER:</label>
    ${useField ? html`
    Use:<select class="useField" on-change="${e => this.value.use = e.target.value}">
        <option value="usual">Usual</option>
        <option value="official">Official</option>
        <option value="temp">Temporary</option>
        <option value="secondary">Secondary</option>
    </select>` : ''}
    ${systemIdentifier ? html`<mwc-textfield outlined on-change="${e => this.value.system = e.target.value}" class="systemIdentifier" label="System:"></mwc-textfield>` : ''}
    ${identifierField ? html`<mwc-textfield outlined on-change="${e => this.value.value = e.target.value}" class="identifierField" label="Identifier:"></mwc-textfield>` : ''}
    ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
</div>
<iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-person-identifier', FhirPersonIdentifier);
