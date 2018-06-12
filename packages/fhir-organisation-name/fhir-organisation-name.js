/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-organisation-name>` adds name of organisation to the page. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-organisation-name url=""></fhir-organisation-name>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-organisation-name.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirOrganisationName extends LitElement {
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
            /**nameField is a selectable option for use of name. Use this property to show/hide. Default: true */
            nameField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.nameField = true;
        this.value = {};
    }
    _setData() {
        if (this.value.length != undefined) {

                this.shadowRoot.childNodes[1].querySelector('.nameField').value = FhirOrganisationName.undefinedToBlank(this.value);
            }
        }


    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.name != undefined) {
                this.parentNode.host.value = e.detail.response.name;
                this.parentNode.host._setData();
            }
            else if (e.detail.response.name == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setData();
        }
    }

    _render({nameField, url, value}) {
        return html`
   <div> 
   <label>NAME:</label> 
     ${nameField ? html`<mwc-textfield outlined class="nameField" on-input="${e => this.value.name = e.target._input.value}"  label="Organization Name"></mwc-textfield>` : ''}
   </div> 
   <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-organisation-name', FhirOrganisationName);
