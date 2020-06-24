/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-allergy-code>` adds code of allergy to your page. Uses combo-box and iron-ajax
 * In typical use, just use `<fhir-allergy-code url=""></fhir-allergy-code>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-allergy-code.html
 *
 */

import {LitElement, html} from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js'
import '@material/mwc-button/mwc-button.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@vaadin/vaadin-combo-box/vaadin-combo-box.js';
import '@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js';


class FhirSearchbox extends LitElement {
    static get properties() {
        return {
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: {type: String},
            /**value is used to take the input value of each field*/
            value: {type: Object},
            /**relocateurl is used to give url that is used for redirection on click of the button*/
            relocateurl: {type: String},
            /**resourceType is used to determine which type of resource is being searched*/
            resourceType: {type: String}
        }
    }

    constructor() {
        super();
        this.resourceType ="";
    }

    updated() {
		FhirSearchbox.relocateurl = this.relocateurl;
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            var items = [];
            var box = e.target.parentNode.querySelector('#search');
           // var entry = e.detail.response.entry;
            for (let entry of e.detail.response.entry) {
                var type = entry.resource.resourceType;
                FhirSearchbox.resourceType = type;
                if (type == "Patient" || type == "Practitioner") {
                    items.push({
                        label: entry.resource.name[0].given[0] + ' ' + entry.resource.name[0].family + ", id:" + entry.resource.id,
                        value: entry.resource.id
                    });
                }
                else if (type == "Organization" || type == "Location") {
                    items.push({
                        label: entry.resource.name+ ", id:" + entry.resource.id,
                        value: entry.resource.id
                    })
                }
            }
            console
            box.items = items;
           console.log(items);
        });
        this.shadowRoot.getElementById('button').addEventListener('click', function (e) {
            var val = e.target.parentNode.querySelector('#search').value;
          window.location.href = FhirSearchbox.relocateurl + '?'+FhirSearchbox.resourceType+'Id=' + val;
        });
    }


    render() {
        return html`
    <style>
    vaadin-combo-box {
      width: 500px;
    }
     </style>
     <vaadin-combo-box id="search" label=" Search" placeholder="Type.." @filter-changed="${e => this.makeQuery(e.detail.value)}">
     <template>[[item.label]]</template>
     </vaadin-combo-box>
     <mwc-button id="button" raised>Go</mwc-button>
     <iron-ajax bubbles id="ajax" handle-as="json" .url="${this.url}"></iron-ajax>
`;
    }

    makeQuery(param) {
        if (param.length > 2) {
            this.shadowRoot.getElementById('ajax').params = {"name": param};
            this.shadowRoot.getElementById('ajax').generateRequest()
        }
    }

}

window.customElements.define('fhir-searchbox', FhirSearchbox);