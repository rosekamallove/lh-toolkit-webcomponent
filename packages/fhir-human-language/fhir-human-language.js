/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-language>` adds language used to communicate to the page with a checkbox to show which one is preferred. Uses mwc-textfield, mwc-checkbox and iron-ajax
 * In typical use, just use `<fhir-human-language url=""></fhir-human-language>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-language.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-checkbox/mwc-checkbox.js'
import '@polymer/iron-ajax/iron-ajax.js';

class FhirHumanLanguage extends LitElement {
    static get properties() {
        return {
            /**langField is a field to display language. Use this property to show/hide. Default: true */
            langField: String,
            /**prefField is a switch to show if language is preferred or not. Use this property to show/hide. Default: true */
            prefField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.langField = 'true';
        this.prefField = 'true';
        this.value = [{}];
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var communication = this.parentNode.host;
            if(e.detail.response.communication !== undefined) {
                communication.value = e.detail.response.communication;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#div'));
            }
        });
    }
    _render({langField, prefField, url, value}) {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`${this.value.map((i, index) => html`
     <div id="div">
     <label>COMMUNICATION:</label>
     ${langField !== 'false' ? html`<mwc-textfield outlined class="langField" value="${i.language}" label="Language" on-input="${e => this.value[index].language = e.target._input.value}"></mwc-textfield>` : ''}
     ${prefField !== 'false' ? html`<mwc-formfield alignEnd>Language is preferred:<mwc-checkbox class="prefField" on-input="${e => this.value[index].preferred = e.target.value}"></mwc-checkbox></mwc-formfield>` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
     
    `)}`;
    }
}

window.customElements.define('fhir-human-language', FhirHumanLanguage);
