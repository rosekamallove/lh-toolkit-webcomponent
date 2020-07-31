/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/**
 * `<fhir-ratio>` adds numerator and denominator value input form fields to  page. Uses mwc-textfield 
 * In typical use, just use `<fhir-ratio></fhir-ratio>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-ratio.html
 *
 */

import {LitElement, html} from "lit-element";
import "@material/mwc-textfield/mwc-textfield.js";

class FhirRatio extends LitElement {
    static get properties() {
        return {
            /** Whether to show the numerator input field. Default: true */
            numerator:{type:Boolean},
            /** Whether to show the denominator input field. Default: true */
            denominator: {type:Boolean},
             /** Whether to show the system a ratio is associated with. Default: false */
             systemField: {type: String},
              /** The ratio Object with numerator and denominator properties should be in the two fields. If no value is passed, the fields are empty */
            value: {type:Object}
        }
    }

    constructor() {
        super()
        this.value = {"numerator":{}, "denominator": {}};
        this.numerator = true;
        this.denominator = true;
        this.systemField ="false";
      
    }

    render() {
        if (this.value != undefined) {
            if (typeof(this.value) === "string") { // value passed via html as string
                if (JSON.parse(this.value).start != undefined) {
                    var numeratorValue = JSON.parse(this.value).numerator;
                }
                if (JSON.parse(this.value).end != undefined) {
                    var denominatorValue = JSON.parse(this.value).denominator;
                }
            } else if (typeof(this.value) == "object") { // value passed via js as object
                if (this.value.numerator != undefined) {
                    var numeratorValue = this.value.numerator;
                }
                if (this.value.denominator != undefined) {
                    var denominatorValue = this.value.denominator;
                }
            }
        }
        return html`
        
            ${this.numerator ? html`<mwc-textfield  label ="${numeratorValue.code || "" }" outlined id= "numeratorID"   
            .value="${numeratorValue.value || "" }"></mwc-textfield>
            ${this.systemField !== "false" ? html `<mwc-textfield  label ="system" outlined  .value="${numeratorValue.system || "" }"></mwc-textfield>`: ""}
            `:""}
            <span>Per</span> 
            
            ${this.denominator ? html`<mwc-textfield  label ="${denominatorValue.code || "" }" outlined id= "numeratorID"   
            .value="${denominatorValue.value || "" }"></mwc-textfield>
            ${this.systemField !== "false" ? html `<mwc-textfield  label ="system" outlined   .value="${denominatorValue.system || ""}"></mwc-textfield>`: ""}
           `:""} 
            `
            
    }
}

customElements.define("fhir-ratio", FhirRatio);