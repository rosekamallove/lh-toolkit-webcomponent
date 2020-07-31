/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-medication-ingredient>` adds the actual ingredient of a medication to page. 
 * In typical use, just use `<fhir-medication-ingredient url=""></fhir-medication-ingredient>` or `<fhir-medication-ingredient value=""></fhir-medication-ingredient>`
 * It uses a mwc-textfield input and iron-ajax.
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-medication-ingredient.html
 **/

import { LitElement, html } from "lit-element";
import "@material/mwc-checkbox/mwc-checkbox.js";
import "@material/mwc-formfield/mwc-formfield.js"
import "@lh-toolkit/fhir-coding/fhir-coding.js"
import "@lh-toolkit/fhir-ratio/fhir-ratio.js";
import "@polymer/iron-ajax/iron-ajax.js";

class FhirMedicationIngredient extends LitElement {
    static get properties() {
        return {
            /**activeField is used to show the active status of a medication ingredient. Use this property to show/hide. Default: true */
            activeField: { type: String },
            /**strengthField is used to show the strength of a medication ingredient. Use this property to show/hide. Default: true */
            strengthField: { type: String },
            /**codingField is used to show the code of a medication ingredient. Use this property to show/hide. Default: true */
            codingField: { type: String },
            /**used to make AJAX calls to FHIR resource. Default is Null */
            url: { type: String },
            /**takes the input value of each field*/
            value: { type: Array }
        }
    }

    constructor() {
        super();
        this.activeField = "true";
        this.strengthField = "true";
        this.codingField = "true";
        this.value = [{
            "itemCodeableConcept": { coding: [{}] },
            "isActive": false,
            "strength": {}
        }];

    }

    render() {
        if (this.value == "string") {
            this.value = JSON.parse(this.value)
        }

        return html`
         <div id ="ingredientDiv">
        ${this.value.map((i, index) =>

            html` 
        ${this.activeField !== "false" ? html`
        <mwc-formfield  label="Active:" alignEnd>
        <mwc-checkbox id="activeID" ?checked ="${i.isActive}" @click ="${e => this.value[index].isActive = e.target.value}"></mwc-checkbox>
        </mwc-formfield><br>
        `: ""}
        ${this.strengthField !== "false" ? html`
        <mwc-formfield class="medIngredient" label= "Strength:" alignEnd>
        <fhir-ratio id ="strengthID" .value ="${i.strength}" @input ="${e => this.value[index].strength = e.target.value}"></fhir-ratio><br>
        </mwc-formfield><br><br>        
        `: ""} 
        
        ${this.codingField !== "false" ? html`
        ${i.itemCodeableConcept.coding.map(item =>
                html`
        <mwc-formfield class="medIngredient" label ="Ingredient:" alignEnd>
        <fhir-coding  id ="codingID" .value ="${item}" @input ="${e => item = e.target.value}"></fhir-coding>
        </mwc-formfield><br>
        `)}
        `: ""}  `)} 
        </div> 
        <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
        `
    }

    updated() {
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e) {
            var ingredient = this.parentNode.host;
            if (e.detail.response.ingredient != undefined) {
                ingredient.value = e.detail.response.ingredient;
            }
            else {
                this.parentNode.removeChild(this.parentNode.getElementById("ingredientDiv"));
            };
        });
    };
};

customElements.define("fhir-medication-ingredient", FhirMedicationIngredient);