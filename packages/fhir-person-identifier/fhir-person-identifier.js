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
import {LitElement, html, css} from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-formfield';
import '@polymer/iron-ajax/iron-ajax.js';
import '@lh-toolkit/fhir-period/fhir-period.js';

class FhirPersonIdentifier extends LitElement {
    static get properties() {
        return {
            /**useField is to show use of below fields. Use this property to show/hide. Default: true */
            useField: {type: String},
            /**systemIdentifier is to show system identifier number. Use this property to show/hide. Default: true */
            systemIdentifier: {type: String},
            /**identifierField is to show person identifier number. Use this property to show/hide. Default: true */
            identifierField: {type: String},
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of each field*/
            value: {type: Array, reflect: true}
        }
    }
    
    static get styles() {
      return css`
        .field{
          margin: 1%;
        }
      `;
    }
   
    constructor() {
        super();
        this.useField = 'true';
        this.systemIdentifier = 'true';
        this.identifierField = 'true';
        this.periodField = 'false';
        this.value = [{}];
    }

    /**updated() delivers only after render*/
    updated() {
        
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

   

    render() {
        if (typeof(this.value) == "string") {
            this.value = JSON.parse(this.value);
        }
        return html`${this.value.map((i, index) => html`
        <div id="div">
         <mwc-formfield alignEnd>
        ${this.useField !== 'false' ? html`
        <mwc-select class="useField field" label="Identifier-Use" outlined .value="${i.use}" @change="${e => this.value[index].use = e.target.value}">
        <mwc-list-item value="usual">Usual</mwc-list-item>
        <mwc-list-item value="official">Official</mwc-list-item>
        <mwc-list-item value="temp">Temporary</mwc-list-item>
        <mwc-list-item value="secondary">Secondary</mwc-list-item>
        </mwc-select>` : ''}
        ${this.systemIdentifier !== 'false' ? html`<mwc-textfield outlined .value="${i.system || ""}" @input="${e => this.value[index].system = e.target.value}" class="systemIdentifier field" label="Identifier-System"></mwc-textfield>` : ''}
        ${this.identifierField !== 'false' ? html`<mwc-textfield outlined .value="${i.value || ""}" @input="${e => this.value[index].value = e.target.value}" class="identifierField field" label="Identifier-Value"></mwc-textfield>` : ''}
        ${this.periodField !== 'false' ? html`<fhir-period class="periodField" outlined .value="${i.period}" @input="${e => this.value[index].period = e.target.value}"></fhir-period>` : ''}
       
        </mwc-formfield>
        </div>
     `)}
     <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>`;
    }
}

window.customElements.define('fhir-person-identifier', FhirPersonIdentifier);
