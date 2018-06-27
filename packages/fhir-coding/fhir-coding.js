/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * `<fhir-coding>` adds `system`, `version`, `code`, `display` and `userSelected` input form fields to your page.
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-coding.html
 *
 */

import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirCoding extends LitElement {
    static get properties() {
        return {
            /** Populate inputs via properties : A Coding JSON as a string or as a object */
            value: Object,
            /** Populate inputs via GET request : A url to the resource */
            url: String,
            /** Populate inputs via GET request : A string which is a JSON array. Consists of the JSON keys to access the coding*/
            jsonPath: String,

            /** Whether to show the display input field. Default: true */
            showDisplay: String,
            /** Label for the display input field. Default: display */
            labelOfDisplay: String,
            /** Whether to show the system input field. Default: false */
            showSystem: String,
            /** Whether to show the version input field. Default: false */
            showVersion: String,
            /** Whether to show the code input field. Default: false */
            showCode: String,
            /** Whether to show the userSelected input field. Default: false */
            showUserSelected: String,
        }
    }

    constructor() {
        super()
        this.showDisplay = "true";
        this.labelOfDisplay = "Display";
        this.showSystem = "false";
        this.showVersion = "false";
        this.showCode = "false";
        this.showUserSelected = "false";
    }

    _render({value, url, jsonPath, showDisplay, labelOfDisplay, showSystem, showVersion, showCode,  showUserSelected}) {
        let display, system, version, code, userSelected;
        if (value != undefined) {
            if (typeof(value) === "string") { // value passed via html
                display = JSON.parse(value).display;
                system = JSON.parse(value).system;
                version = JSON.parse(value).version;
                code = JSON.parse(value).code;
                userSelected = JSON.parse(value).userSelected;
            } else if (typeof(value) == "object") { // value passed via js or value set after ajax
                display = value.display;
                system = value.system;
                version = value.version;
                code = value.code;
                userSelected = value.userSelected;
            }
        }

        return html`
            ${showDisplay=="true" ? html `<mwc-textfield outlined class="displayField"
                label=${labelOfDisplay}
                value=${display}></mwc-textfield>` : ''}
            ${showSystem=="true" ? html `<mwc-textfield outlined class="systemField"
                label="System"
                value=${system}></mwc-textfield>` : ''}
            ${showVersion=="true" ? html `<mwc-textfield outlined class="versionField"
                label="Version"
                value=${version}></mwc-textfield>` : ''}
            ${showCode=="true" ? html `<mwc-textfield outlined class="codeField"
                label="Code"
                value=${code}></mwc-textfield>` : ''}
            ${showUserSelected=="true" ? html`<mwc-textfield outlined class="userSelectedField"
                label="User Selected"
                value=${userSelected}></mwc-textfield>` : ''}
            ${(url != undefined) ? html `<iron-ajax class="ajax" bubbles auto
                handle-as="json" url=${url}
                on-response=${e => this.handleResponse(e, jsonPath)}></iron-ajax>` : '' }
        `;
    }

    handleResponse (e, jsonPath) {
        if (jsonPath != undefined) {
            let codingJson = this.getNestedObject(e.detail.response, JSON.parse(jsonPath));
            if ( codingJson != undefined) {
                this.value = codingJson;
            }
        }
    }

    getNestedObject(jsonObject, keyArray ){
        let tmp = jsonObject;
        keyArray.forEach(key => {
            if(tmp[key] == undefined) {
                return undefined;
            }
            tmp = tmp[key];
        });
        return tmp;
    }
}

window.customElements.define('fhir-coding', FhirCoding);