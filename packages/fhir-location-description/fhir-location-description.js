/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-location-description>` adds description of location to the page. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-location-description url=""></fhir-location-description>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-location-description.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirLocationDescription extends LitElement {
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
            /**describeField is to display the description of location. Use this property to show/hide. Default: true */
            describeField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.describeField = true;
        this.value = {};
    }

    _setData() {
        if (this.value.length != undefined) {

            this.shadowRoot.childNodes[1].querySelector('.describeField').value = FhirLocationDescription.undefinedToBlank(this.value);
        }
    }


    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.description != undefined) {
                this.parentNode.host.value = e.detail.response.description;
                this.parentNode.host._setData();
            }
            else if (e.detail.response.description == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url && this.value) {
            this._setData();
        }
    }

    _render({describeField, url, value}) {
        return html`
   <div> 
   <label>DESCRIPTION:</label> 
     ${describeField ? html`<mwc-textfield outlined class="describeField" on-input="${e => this.value.description = e.target._input.value}"  label="Description"></mwc-textfield>` : ''}
   </div> 
   <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-location-description', FhirLocationDescription);
