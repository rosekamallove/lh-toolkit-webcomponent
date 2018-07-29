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
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirOrganisationType extends LitElement {
    static get properties() {
        return {
            /**systemField is a field for use system url. Use this property to show/hide. Default: true */
            systemField: String,
            /**typeField is a selectable option for type of organization. Use this property to show/hide. Default: true */
            typeField: String,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String,
            /**value is used to take the input value of each field*/
            value: Array
        }
    }

    /**default value of properties set in constructor*/
    constructor() {
        super();
        this.systemField = true;
        this.typeField = true;
        this.value = [{coding:[{}]}];
    }
    /**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var type = this.parentNode.host;
            if(e.detail.response.type !== undefined) {
                type.value = e.detail.response.type;
            }
            else {
                this.parentNode.removeChild(this.parentNode.querySelector('#div'));
            }
        });
    }
    _render({systemField, typeField, url, value}) {
        if (typeof(value) == "string") {
            this.value = JSON.parse(value);
        }
        return html`${this.value.map((i, index) => html`
        <div id="div"> 
        ${typeField !== 'false' ? html`
        <label>Category:</label>
        <select class="typeField" value="${i.coding[0].code}" on-change="${e => this.value[index].coding[0].code= e.target.value}">
             <option value="prov">Healthcare provider</option>
             <option value="dpt">Hospital Department</option>
             <option value="team">Organization team</option>
             <option value="govt">Government</option>
             <option value="ins">Insurance Company</option>
             <option value="edu">Educational Institution</option>
             <option value="reli">Religious institution</option>
             <option value="crs">Clinical Research Sponser</option>
             <option value="cg">Community Group</option>
             <option value="bus">Non-healthcare Business</option>
             <option value="other">Other</option>
             </select>` : ''}
        ${systemField !== 'false' ? html`<mwc-textfield outlined class="systemField" value="${i.coding[0].system}" on-input="${e => this.value[index].system = e.target._input.value}"  label="System"></mwc-textfield>` : ''}
        </div> 
        <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
   `)}`;
    }
}

window.customElements.define('fhir-organisation-type', FhirOrganisationType);
