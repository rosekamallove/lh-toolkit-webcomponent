/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-location-mode>` adds radio buttons. Uses mwc-radio and iron-ajax
 * In typical use, just use `<fhir-location-mode url=""></fhir-location-mode>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-location-mode.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-radio/mwc-radio.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirLocationMode extends LitElement {
    static get properties() {
        return {
            /**locMode is used to display the modeof location. Use this property to show/hide. Default: true */
            locMode: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Object
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.locMode = true;
        this.value = {};

    }

    _setValue() {
        if (this.value.length != undefined) {
            var child = this.shadowRoot.childNodes[1];
            var i = 0;
            while (true) {
                if (this.shadowRoot.querySelectorAll("mwc-radio")[i].value == this.value) {
                    this.shadowRoot.querySelectorAll("mwc-radio")[i].checked = true;
                    break;
                }
                i++;
            }
        }
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.mode != undefined) {
                this.parentNode.host.value = e.detail.response.mode;
                this.parentNode.host._setValue();
            }
            else if (e.detail.response.mode == undefined) {
                this.parentNode.removeChild(this.parentNode.childNodes[1]);
            }
        });
        if (!this.url && this.value) {
            this._setValue();
        }
    }

    _render({locMode, url, value}) {
        return html`
        <div class="locMode">
        <label>MODE:</label>
         ${locMode ? html`<mwc-formfield id="modeField">
          Instance:<mwc-radio value="instance" on-click="${e => this.value.mode = e.target.value}"></mwc-radio>
         Kind:<mwc-radio value="kind" on-click="${e => this.value.mode = e.target.value}"></mwc-radio>
         ` : ''}
        </div>
        <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}


window.customElements.define('fhir-location-mode', FhirLocationMode);