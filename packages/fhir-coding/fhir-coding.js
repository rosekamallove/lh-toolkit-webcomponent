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

import { LitElement, html } from 'lit-element';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirCoding extends LitElement {
    static get properties() {
        return {
            /** Populate inputs via properties : A Coding JSON as a string or as a object */
            value: { type: Object },
            /** Populate inputs via GET request : A url to the resource */
            url: { type: String },
            /** Populate inputs via GET request : A dot-syntax string of the JSON keys to access the coding */
            jsonPath: { type: String },
            /** Whether to show the display input field. Default: true */
            showDisplay: { type: String },
            /** Label for the display input field. Default: display */
            labelOfDisplay: { type: String },
            /** Whether to show the system input field. Default: false */
            showSystem: { type: String },
            /** Whether to show the version input field. Default: false */
            showVersion: { type: String },
            /** Whether to show the code input field. Default: false */
            showCode: { type: String },
            /** Whether to show the userSelected input field. Default: false */
            showUserSelected: { type: String }
        }
    }

    constructor() {
        super()
        this.value = {};
        this.ajaxRelated = {};
        this.showDisplay = "true";
        this.labelOfDisplay = "Display";
        this.showSystem = "false";
        this.showVersion = "false";
        this.showCode = "false";
        this.showUserSelected = "false";
    }

    _deserializeValue(value, type) { // overrides
        switch (type) {
            case Object:
                return JSON.parse(value);
            default:
                return value;
        }
    }

    render() {
        if (this.url != undefined && Object.keys(this.ajaxRelated).length === 0) {
            return html`
                <iron-ajax class="ajax" bubbles auto
                    handle-as="json" .url=${this.url}
                    @response=${e => this.handleResponse(e, this.jsonPath)}
                    @error=${e => this.handleErrorResponse(e)}></iron-ajax>
                <div class="ajaxMessage">Awaiting server response...</div>
            `;
        } 
        return html`
            ${this.showDisplay == "true" ? html`<mwc-textfield outlined class="displayField"
                label=${this.labelOfDisplay}
                value=${this.value.display || ""}
                @blur=${e => this.value["display"] = e.target.value}></mwc-textfield>` : ''}
            ${this.showSystem == "true" ? html`<mwc-textfield outlined class="systemField"
                label="System"
                value=${this.value.system || ""}
                @blur=${e => this.value["system"] = e.target.value}></mwc-textfield>` : ''}
            ${this.showVersion == "true" ? html`<mwc-textfield outlined class="versionField"
                label="Version"
                value=${this.value.version || ""}
                @blur=${e => this.value["version"] = e.target.value}></mwc-textfield>` : ''}
            ${this.showCode == "true" ? html`<mwc-textfield outlined class="codeField"
                label="Code"
                value=${this.value.code || ""}
                @blur=${e => this.value["code"] = e.target.value}></mwc-textfield>` : ''}
            ${this.showUserSelected == "true" ? html`<mwc-textfield outlined class="userSelectedField"
                label="User Selected"
                value=${this.value.userSelected || ""}
                @blur=${e => this.value["userSelected"] = e.target.value}></mwc-textfield>` : ''}
        `;
    }

    handleResponse(e, jsonPath) {
        if (jsonPath != undefined) {
            let codingJson = this.getNestedObject(e.detail.response, jsonPath);
            if (codingJson != undefined) {
                this.ajaxRelated["success"] = "true";
                this.value = codingJson;
            }
        }
    }

    handleErrorResponse(e) {
        let errorMessage = e.detail.error.message;
        if (errorMessage == undefined || typeof (errorMessage) != "string") {
            errorMessage = "Error occurred while retrieving server response";
            this.ajaxRelated = { ...this.ajaxRelated, errorMessage };
            console.log(this.ajaxRelated.errorMessage);
        } else {
            console.log(errorMessage)
        }
    }

    getNestedObject(obj, path) {
        return path.split('.').reduce((o, key) => o && o[key], obj);
    }
}
window.customElements.define('fhir-coding', FhirCoding);
