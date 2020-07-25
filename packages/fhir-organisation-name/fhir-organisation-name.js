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
import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-formfield';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirOrganisationName extends LitElement {
    static get properties() {
        return {
            /**nameField is a textfield of org name. Use this property to show/hide. Default: true */
            nameField: {type:String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of each field*/
            value: {type: String}
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.nameField = true;
        this.value = '';
    }
    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var name = this.parentNode.host;
            if(e.detail.response.name !== undefined) {
                name.value = e.detail.response.name;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#nameDiv'));
            }
        });
    }
    render() {
        return html`
        <div id="nameDiv"> 
        <mwc-formfield label ="NAME:" alignEnd>
        ${this.nameField !== 'false' ? html`<mwc-textfield outlined class="nameField" .value="${this.value}" @input="${e => this.value = e.target.value}"  label="Organization Name"></mwc-textfield>
        ` : ''}
        </mwc-formfield>  
        </div> 
        <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-organisation-name', FhirOrganisationName);
