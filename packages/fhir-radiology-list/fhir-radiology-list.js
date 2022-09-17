/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-radiology-list>` adds search to your page and shows the results in form of a grid. Uses mwc-textfield, vaadin-grid and iron-ajax
 * Displays ID, Name and Active status of the search subject.
 * In typical use, just use `<fhir-radiology-list url=""><fhir-radiology-list>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-radiology-list.html
 *
 */

import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js'
import '@polymer/iron-ajax/iron-ajax.js';
import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-selection-column.js';

class FhirRadiologyList extends LitElement {
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
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of field*/
            value: {type: Object},
            /**relocateurl is used to give url that is used for redirection on click of the button*/
            relocateurl: {type: String},
            /**resourceType is used to determine which type of resource is being searched*/
            resourceType: {type: String}
        }
    }

    constructor() {
        super();
        this.value = {};
        this.resourceType ="";
    }

    updated() {
        FhirSearch.relocateurl = this.relocateurl;
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var grid = e.target.parentNode.querySelector('#table');
            var items = [];
            for (let entry of e.detail.response.entry) {
                var type = entry.resource.resourceType;
                FhirSearch.resourceType = type;
                //Checks search for human names
                if (type == "Patient" || type == "Practitioner") {
                    items.push({
                        id: entry.resource.id,
                        name: entry.resource.name[0].family + " " + entry.resource.name[0].given,
                        active: FhirSearch.undefinedToBlank(entry.resource.active)
                    });
                }
                //checks search for non-human names
                else if (type == "Organization" || type == "Location") {
                    items.push({
                        id: entry.resource.id,
                        name: entry.resource.name,
                        active: FhirSearch.undefinedToBlank(entry.resource.active)
                    });
                }
            }
            grid.items = items;
        });
        //Event Listener for active-item-changed in the grid and click used to redirect to the desired location.
        this.shadowRoot.getElementById('table').addEventListener('active-item-changed', function (e) {
            window.location.href = FhirSearch.relocateurl + '?' + FhirSearch.resourceType + 'Id=' + e.detail.value.id;
        });
    }

    render() {
        return html`
      <mwc-textfield outlined id="searchField" @input="${e => this.makeQuery(e.target.value)}" label="Search"></mwc-textfield>
      <iron-ajax bubbles id="ajax" handle-as="json" .url="${this.url}"></iron-ajax>
      <vaadin-grid aria-label="Names" id="table">
         <vaadin-grid-selection-column auto-select hidden></vaadin-grid-selection-column>
         <vaadin-grid-column width="50px " flex="0 ">
            <template class="header ">Identifier</template>
            <template>[[item.id]]</></template>
         </vaadin-grid-column>
         <vaadin-grid-column>
            <template class="header ">Name</template>
            <template>[[item.name]]</template>
         </vaadin-grid-column>
         <vaadin-grid-column>
            <template class="header">Active Status</template>
            <template>[[item.active]]</template>
         </vaadin-grid-column>
      </vaadin-grid>
`;
    }
//Used to make query when the user types two or more characters
    makeQuery(param) {
        if (param.length > 2) {
            this.shadowRoot.getElementById('ajax').params = {"name": param};
            this.shadowRoot.getElementById('ajax').generateRequest()
        }
    }

}

window.customElements.define('fhir-radiology-list', FhirRadiologyList);
