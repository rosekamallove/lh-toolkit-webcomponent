
/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-interpretation>` adds a categorical assessment of an observation value to the page.
 * In typical use, just use `<fhir-observation-interpretation url=""></fhir-observation-interpretation>` or `<fhir-observation-interpretation value=""></fhir-observation-interpretation>`
 * @customElement
 * @litelement
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-observation-interpretation.html
**/


import {LitElement, html} from "lit-element";
import "@material/mwc-textfield/mwc-textfield.js"
import "@material/mwc-formfield/mwc-formfield.js"
import "@polymer/iron-ajax/iron-ajax.js";


class FhirObservationInterpretation extends LitElement{

    static get properties(){
        return {
           /**the codeField is used to show the code for the interpretation of an observation. use this property to show/hide. Defaault  is false */
           codeField :{type: String},

           /**the systemField is used to show the system for the code of the interpretation of an observation. use this property to show/hide. Defaault  is false */
           systemField: {type: String},
           
           /**the displayField is used to show the interpretation of an observation. use this property to show/hide. Defaault  is true */
           displayField: {type: String},

           /**used to make AJAX calls to FHIR resource. Default is Null */
           url: {type: String},

           /**value is used to take the input value of each field */
            value : {type: Array}
        }
    }

    constructor(){
        super();
        this.displayField = "true";
        this.codeField ="false";
        this.systemField ="false";
        this.value = [{coding:[{}]}];


    }

    /**updated() delivers only after render */
    updated(){
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function(e){
            let obsInt = this.parentNode.host;

            if(e.detail.response.interpretation !== undefined){
                obsInt.value = e.detail.response.interpretation;
            }
            else{
                this.parentNode.removeChild(this.parentNode.getElementById("obsIntDiv"));
            }
        })
    }



    render() {
        if(typeof(this.value)=="string"){
          this.value = JSON.parse(this.value);
        }
        return html `${this.value.map((i, index) => html `
        <div id ="obsIntDiv">
            <mwc-formfield label= "Observation Interpretation:" alignEnd>
            ${i.coding.map((i, index) => html `
            ${this.codeField !== "false" ? html `<mwc-textfield id= "codeFieldID" label = "code" outlined .value = "${i.code || ""}" @input ="${e => i.code = e.target.value}"></mwc-textfield>`:""}
             ${this.systemField !== "false" ? html `<mwc-textfield id ="systemFieldID" label ="system" outlined  .value = ${i.system || ""} @input = "${e => i.system = e.target.value}"></mwc-textfield>`:""}
             ${this.displayField !== "false" ? html `<mwc-textfield id ="displayFieldID" label = "display" outlined .value = "${i.display || "" }" @input ="${e => i.display = e.target.value}"></mwc-textfield>`:""}`)}
            </mwc-formfield>
      </div>
            <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
            `)}`      
      }
}

customElements.define("fhir-observation-interpretation", FhirObservationInterpretation);