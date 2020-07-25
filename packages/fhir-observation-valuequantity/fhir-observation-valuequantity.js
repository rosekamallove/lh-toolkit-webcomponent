/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-valuequantity>` adds the actual result of an observation to page. 
 * In typical use, just use `<fhir-observation-valuequantity url=""></fhir-observation-valuequantity>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-location-operationalstatus.html
 *
 */


import {LitElement, html} from "lit-element";
import "@material/mwc-formfield";
import "@material/mwc-textfield";
import "@polymer/iron-ajax";

class FhirObservationValuequantity extends LitElement{
    
    static get properties(){
        return{
        /**valueField is a  property that shows/hide the value of an observation. Default: true */
        valueField : {type: Number},

        /**valueField is a  property that shows/hide the unit of an observation. Default: true */
        unitField : {type: String},

        /**systemField is a  property that shows/hide the system of an observation. Default: false */
        systemField : {type: String},
        
        /**codeField is a  property that shows/hide the code of an observation. Default: false */
        codeField : {type: String},

        /**url is used to make AJAX call to FHIR resource. Default: null */
        url : {type: String},

        /**value is used to take the input value of each field*/
        value : {type: Object}
    }}

    constructor(){
        super();
        this.valueField = "true";
        this.unitField ="true";
        this.systemField = "false";
        this.codeField = "false"
        this.value = {}
        
    }

    /**updated() delivers only after render() */
    updated(){
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function(e){
            let valueQuantity = this.parentNode.host
            if (e.detail.response.valueQuantity !== undefined){
                valueQuantity.value = e.detail.response.valueQuantity;
            }else{
                this.parentNode.removeChild(this.parentNode.getElementById("valueQty"));
            }
            

        })
    }

    render(){
        if(typeof(this.value) == "string"){
            this.value =JSON.parse(this.value)
        }
        return html`
        <div id ="valueQty">
        <mwc-formfield class ="valueSet" label =" OBSERVATION VALUE:" alignEnd>
        ${this.valueField !== "false" ? html `<mwc-textfield id ="result" outlined label ="value" .value ="${this.value.value || ""}" @input= "${e => this.value.value = e.target.value}"></mwc-textfield>`:""}
        ${this.unitField !== "false" ? html `<mwc-textfield id ="resultUnit" outlined label ="unit" .value ="${this.value.unit|| "" }" @input= "${e => this.value.unit = e.target.value}"></mwc-textfield>`: ""}
        ${this.systemField !== "false" ? html`<mwc-textfield id ="resultSystem" outlined label ="system" .value ="${this.value.system || ""}" @input= "${e => this.value.system = e.target.value}"></mwc-textfield>`: ""}
        ${this.codeField !== "false" ? html `<mwc-textfield id = "resultCode" outlined label ="code" .value ="${this.value.code || ""}" @input= "${e => this.value.code = e.target.value}"></mwc-textfield>`: ""}
        </mwc-formfield>
        </div>
        <iron-ajax id = "ajax" bubbles auto handle-as ="json" .url ="${this.url}" ></iron-ajax>
        
    `}
}

customElements.define("fhir-observation-valuequantity", FhirObservationValuequantity);