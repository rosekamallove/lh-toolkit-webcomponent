/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-note>` adds description of allergy to the page. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-allergy-note url=""></fhir-allergy-note>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-note.html
 *
 */
import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirAllergyNote extends LitElement {
    static get properties() {
        return {
            /**describeField is to fill in notes of allergy. Use this property to show/hide. Default: true */
            describeField: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type:String},
            /**value is used to take the input value of each field*/
            value:{type:Array}
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.describeField = 'true';
        this.value = [{}];
    }

    /**_didRender() delivers only after _render*/
    updated() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var allergyCat = this.parentNode.host;
            if (e.detail.response.note !== undefined) {
                allergyCat.value = e.detail.response.note;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }

    render() {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
            
        }
        return html`
   <div id="allergyDiv"> 
   <label>Note:</label> 
     ${this.describeField !== 'false' ? 
     html`<mwc-textfield outlined  .value="${this.value[0].text}" class="describeField" @input="${e => this.value.text = e.target._input.value}"  label="Note"></mwc-textfield>` : ''}
   </div> 

   <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-allergy-note', FhirAllergyNote);
