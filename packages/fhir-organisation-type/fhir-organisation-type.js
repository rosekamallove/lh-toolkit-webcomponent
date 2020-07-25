/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-organisation-type>` adds type of organisation and system url to the page. Uses mwc-textfield, select and iron-ajax
 * In typical use, just use `<fhir-organisation-type url=""></fhir-organisation-type>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-organisation-name.html
 *
 */
import { LitElement, html } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-formfield';
import '@material/mwc-select';
import '@material/mwc-list/mwc-list-item';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirOrganisationType extends LitElement {
    static get properties() {
        return {
            /**systemField is a field for use system url. Use this property to show/hide. Default: true */
            systemField: { type: String },
            /**typeField is a selectable option for type of organization. Use this property to show/hide. Default: true */
            typeField: { type: String },
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: { type: String },
            /**value is used to take the input value of each field*/
            value: { type: Array }
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.systemField = true;
        this.typeField = true;
        this.value = [{ coding: [{}] }];
    }
    /**updated() delivers only after render*/
    updated() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var type = this.parentNode.host;
            if (e.detail.response.type !== undefined) {
                type.value = e.detail.response.type;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#div'));
            }
        });
    }
    render() {
        if (typeof (this.value) == "string") {
            this.value = JSON.parse(this.value);
        }
        return html`${this.value.map((i, index) => html`
        <div id="div">
        <mwc-formfield>
        ${this.typeField !== 'false' ? html`
        <mwc-select label ="Category" class="typeField" .value="${i.coding[0].code}"  @change="${e => this.value[index].coding[0].code = e.target.value}">
             <mwc-list-item value="prov">Healthcare provider</mwc-list-item>
             <mwc-list-item value="dpt">Hospital Department</mwc-list-item>
             <mwc-list-item value="team">Organization team</mwc-list-item>
             <mwc-list-item value="govt">Government</mwc-list-item>
             <mwc-list-item value="ins">Insurance Company</mwc-list-item>
             <mwc-list-item value="edu">Educational Institution</mwc-list-item>
             <mwc-list-item value="reli">Religious institution</mwc-list-item>
             <mwc-list-item value="crs">Clinical Research Sponser</mwc-list-item>
             <mwc-list-item value="cg">Community Group</mwc-list-item>
             <mwc-list-item value="bus">Non-healthcare Business</mwc-list-item>
             <mwc-list-item value="other">Other</mwc-list-item>
             </mwc-select>
              ` : ''}
        ${this.systemField !== 'false' ? html`<mwc-textfield outlined class="systemField" .value="${i.coding[0].system}" @input="${e => this.value[index].system = e.target.value}"  label="System"></mwc-textfield>` : ''}
        </mwc-formfield>    
        </div> 
        <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
   `)}`;
    }
}

window.customElements.define('fhir-organisation-type', FhirOrganisationType);
