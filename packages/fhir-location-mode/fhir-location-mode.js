/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-location-mode>` adds radio buttons. Uses mwc-radio and iron-ajax
 * This component is a coded concept and hence the mode is hard-coded as per FHIR standards.
 * In typical use, just use `<fhir-location-mode url=""></fhir-location-mode>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-location-mode.html
 *
 */
import { LitElement, html } from 'lit-element';
import '@material/mwc-formfield/mwc-formfield.js';
import '@material/mwc-radio/mwc-radio.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirLocationMode extends LitElement {
    static get properties() {
        return {
            /**locMode is used to set the mode of location from given options. Use this property to show/hide. Default: true */
            locMode: { type: String },
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },
            /**value is used to take the input value of each field*/
            value: { type: String }
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.locMode = 'true';
        this.value = '';

    }

    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var location = this.parentNode.host;
            if (e.detail.response.mode !== undefined) {
                location.value = e.detail.response.mode;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#locMode'));
            }
        });
    }

    render() {
        return html`
        <div id="locMode">
         ${this.locMode !== 'false' ? html`<mwc-formfield label= "Mode:" id="modeField" alignEnd>
          Instance:<mwc-radio value="instance"  ?checked="${this.value == 'instance' ? true : false}" @click="${e => this.value = e.target.value}"></mwc-radio>
         Kind:<mwc-radio value="kind"  ?checked="${this.value == 'kind' ? true : false}" @click="${e => this.value = e.target.value}"></mwc-radio>
         </mwc-formfield>
         ` : ''}
         
        </div>
        <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }
}


window.customElements.define('fhir-location-mode', FhirLocationMode);