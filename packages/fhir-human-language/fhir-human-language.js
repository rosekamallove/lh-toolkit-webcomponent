/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-language>` adds language used to communicate to page with a switch to show which one is preferred. Uses mwc-textfield, mwc-switch and iron-ajax
 * In typical use, just use `<fhir-human-language url=""></fhir-human-language>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-language.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-switch/mwc-switch.js'
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
            url: String
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.langField = true;
        this.prefField = true;
    }

    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.communication != undefined) {
                var i = 0;
                for (let identifier of e.detail.response.identifier) {
                    if (i > 0) {
                        var child = e.target.parentNode.childNodes[1].cloneNode(true);
                        e.target.parentNode.appendChild(child);
                    }
                    e.target.parentNode.querySelectorAll('.langField').value = FhirHumanLanguage.undefinedToBlank(e.detail.response.communication.language);
                    i++;

                }
            }
            else if (e.detail.response.communication == undefined) {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }

    _render({langField, prefField, url}) {
        return html`
     <div>
     <label>COMMUNICATION:</label>
     ${langField ? html`<mwc-textfield outlined class="langField" label="Language"></mwc-textfield>` : ''}
     ${prefField ? html`<mwc-formfield alignEnd>Language is preferred:<mwc-switch id ="pref" class="prefField" value="true"></mwc-switch></mwc-formfield>` : ''}
     </div>
     <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
     
    `;
    }
}

window.customElements.define('fhir-human-language', FhirHumanLanguage);
