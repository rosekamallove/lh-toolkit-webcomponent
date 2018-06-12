/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-language>` adds language used to communicate to page with a checkbox to show which one is preferred. Uses mwc-textfield, mwc-switch and iron-ajax
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
            /**langField is a field to display language. Use this property to show/hide. Default: true */
            langField: Boolean,
            /**prefField is a switch to show if language is preferred or not. Use this property to show/hide. Default: true */
            prefField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.langField = true;
        this.prefField = true;
        this.value = [];
    }

    _setValue() {
        let data;
        if (typeof(this.value) == "string") {
            data = JSON.parse(this.value);

        } else {
            data = this.value;
        }
        if (this.value.length != 0) {
            var i = 0;
            for (let identifier of data) {
                var child = this.shadowRoot.childNodes[1];
                if (i > 0) {
                    var child = this.shadowRoot.childNodes[1].cloneNode(true);
                    this.shadowRoot.appendChild(child);
                }
                child.querySelectorAll('.langField')[0].value = FhirHumanLanguage.undefinedToBlank(data[i].language);
                if(data[i].preferred)
                {

                    child.querySelectorAll('.prefField')[0].checked = true;
                }
                i++;

            }
        }

    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.communication != undefined) {
                this.parentNode.host.value = e.detail.response.communication;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.communication == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url) {
            this._setValue();
        }
    }

    _render({langField, prefField, url, value}) {
        return html`
     <div>
     <label>COMMUNICATION:</label>
     ${langField ? html`<mwc-textfield outlined class="langField" label="Language" on-input="${e => this.value.language = e.target._input.value}"></mwc-textfield>` : ''}
     ${prefField ? html`<mwc-formfield alignEnd>Language is preferred:<mwc-checkbox class="prefField" on-input="${e => this.value.preferred = e.target.value}" value="true"></mwc-checkbox></mwc-formfield>` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
     
    `;
    }
}

window.customElements.define('fhir-human-language', FhirHumanLanguage);
