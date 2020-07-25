/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * `<fhir-range>` adds low and high limits of a value to a page using a span tag. These values cannot be edited by users. When no value is passed , the custom element returns an empty value
 * In typical use, just use `<fhir-range value =""></fhir-range>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-range.html
 *
 */

import {LitElement, html} from "lit-element";

class FhirRange extends LitElement {
    static get properties() {
        return {
            /** The range Object with high and low values in two span tags. If no value is passed, the default is an emppty value*/
            value: {type:Object},
            /** Whether to show the lower limit of the range. Default: true */
            low:{type:Boolean},
            /** Whether to show the upper limit of the range. Default: true */
            high: {type:Boolean},
            /** Whether to show the system a range is associated with. Default: false */
            systemField: {type: String},
            /** Whether to show the code a range is associated with. Default: false */
            codeField: {type: String}
        }
    }

    constructor() {
        super()
        this.value = {"low": {},"high":{}};
        this.low = true;
        this.high = true;
        this.systemField ="false";
        this.codeField = "false";
    }

    render() {
        if (this.value != undefined) {
            if (typeof(this.value) === "string") { // value passed via html as string
                if (JSON.parse(this.value).low != undefined) {
                    var lowest = JSON.parse(this.value).low;
                }
                if (JSON.parse(this.value).high != undefined) {
                    var highest = JSON.parse(this.value).high;
                }
            } else if (typeof(this.value) == "object") { // value passed via js as object
                if (this.value.low != undefined) {
                    var lowest = this.value.low;
                }
                if (this.value.high != undefined) {
                    var highest = this.value.high;
                }
            }
        }

    return html`
        ${lowest !== undefined ? html ` ${this.low ? html`<span>${lowest.value || ""}</span>
            <span>${lowest.unit || ""} </span>`  : ""}
        ${this.systemField !== "false" ? html `<span>${lowest.system || ""}</span>`: ""}
        ${this.codeField !== "false" ? html `<span>${lowest.code || ""}</span>`: ""} - `  : ""}
        
        
        ${highest !== undefined ? html `${this.high ? html`<span>${highest.value || ""}</span>
            <span>${highest.unit || ""}</span>` : ""}
        ${this.systemField !== "false" ? html `<span>${lowest.system || ""}</span>`: ""}
        ${this.codeField !== "false" ? html `<span>${lowest.code || ""}</span>`: ""}`:""}            
           
        `;
    }
}

customElements.define("fhir-range", FhirRange);