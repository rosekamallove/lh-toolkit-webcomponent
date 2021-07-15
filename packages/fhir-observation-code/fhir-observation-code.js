/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-code>` adds the code/name for an observation to page. 
 * In typical use, just use `<fhir-observation-code url=""></fhir-observation-code>` or `<fhir-observation-code value=""></fhir-observation-code>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-observation-code.html
 *
 */

import {LitElement, html } from "lit-element";
import "@material/mwc-formfield/mwc-formfield.js";
import "@material/mwc-textfield/mwc-textfield.js"
import "@lh-toolkit/fhir-coding/fhir-coding.js"
import "@polymer/iron-ajax/iron-ajax.js"


class FhirObservationCode extends LitElement{
    static get properties(){
        return{
             /**the codeField is used to show the code of an observation code. use this property to show/hide. Default  is false */
             codeField :{type: String},

             /**the systemField is used to show the system of an observation code. use this property to show/hide. Default  is false */
             systemField: {type: String},
             
             /**the displayField is used to show the display value of an observation code. use this property to show/hide. Default  is true */
             displayField: {type: String},

             /**the displayField is used to show the text value of an observation code. use this property to show/hide. Default  is true */
             textField: {type: String},
 
             /**used to make AJAX calls to FHIR resource. Default is Null */
             url: {type: String},
 
             /**value is used to take the input value of each field */
            value : {type: Object}


        }
    }

    constructor(){
        super();
        this.codeField = "false";
        this.systemField = "false";
        this. displayField = "true";
        this.textField = "false";
        this.value = {coding: [{}]}
    }

    /**updated() delivers only after render() */
    updated(){
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e){
            let obsCode = this.parentNode.host;
            if(e.detail.response.code !== undefined){
                obsCode.value = e.detail.response.code;
            }
            else {
                this.parentNode.removeChild(this.parentNode.getElementById("obsCodeDiv"));
            }

        }
        )
    }

    render(){
        if(typeof(this.value)=="string"){
            this.value = JSON.parse(this.value);
          }
        return html `
        <div id="obsCodeDiv">
            <mwc-formfield label= " Observation Code:" alignEnd>
            ${this.textField !== "false" ? html `<mwc-textfield id ="textFieldID" outlined label = "text" value = "${this.value.text || ""}" @input ="${e => this.value["text"]= e.target.value}"></mwc-textfield>`:""}
            ${this.value.coding.map((i,index) =>  html `
            ${this.codeField !== "false" ? html `<mwc-textfield id ="codeFieldID" outlined label ="code" value = "${i.code ||""}" @input ="${e => this.value.coding[index].code= e.target.value}"></mwc-textfield>`:""}
            ${this.systemField !== "false" ? html `<mwc-textfield id ="systemFieldID" outlined label = "system" value = "${i.system ||""}" @input ="${e => this.value.coding[index].system= e.target.value}"></mwc-textfield>`:""}
            ${this.displayField !== "false" ? html `<mwc-textfield id ="displayFieldID" outlined label ="display" value = "${i.display ||""}" @input ="${e => this.value.coding[index].display= e.target.value}"></mwc-textfield>`: ""} 
            `)}
            </mwc-formfield>
        </div>
        <iron-ajax id= "ajax" auto bubbles handle-as="json" .url =${this.url}></iron-ajax>
        `
    }
   
}

customElements.define("fhir-observation-code",FhirObservationCode);
