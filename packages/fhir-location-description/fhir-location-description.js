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
import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-formfield';
import '@material/mwc-textarea';
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
            /**describeField is a text for description of location. Use this property to show/hide. Default: true */
            describeField: {type: String},
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of each field*/
            value: {type: String}
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.describeField = 'true';
       
    }
    /**updated() delivers only after render*/
    updated() {

        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {

            var location = this.parentNode.host;
            if (e.detail.response.description !== undefined) {
                location.value = e.detail.response.description;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#allergyDiv'));
            }
        });
    }

    render() {
        return html`
   <div id="allergyDiv"> 
   <mwc-formfield label ="DESCRIPTION:" alignEnd>
     ${this.describeField !== 'false' ? html`<mwc-textarea  .value="${this.value}" class="describeField" @input="${e => this.value = e.target._input.value}"  label="Description"></mwc-textarea>` : ''}
    </mwc-formfield> 
   </div> 
   <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-location-description', FhirLocationDescription);
