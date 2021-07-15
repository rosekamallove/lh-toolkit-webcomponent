/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-method>` adds the mechanism used to perform the observation to a page. 
 * In typical use, just use `<fhir-observation-method url=""></fhir-observation-method>` or `<fhir-observation-method value=""></fhir-observation-method>`
 * It uses a mwc-textfield input and iron-ajax.
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-observation-method.html
 *
 */

import {LitElement, html} from 'lit-element'
import '@material/mwc-textfield/mwc-textfield.js'
import '@material/mwc-formfield/mwc-formfield.js'
import '@polymer/iron-ajax/iron-ajax.js'


class FhirObservationMethod extends LitElement {

    static get properties(){
        return{
            /**the codeField is used to show the code of an observation method. use this property to show/hide. Default  is false */
            codeField :{type: String},

            /**the systemField is used to show the system of an observation method. use this property to show/hide. Default  is false */
            systemField: {type: String},
            
            /**the displayField is used to show the observation method used. use this property to show/hide. Default  is true */
            displayField: {type: String},

            /**used to make AJAX calls to FHIR resource. Default is Null */
            url: {type: String},

            /**takes the input value of each field*/
            value: {type: Object}
        };
    };

    constructor(){
        super();
        this.codeField = "false";
        this.systemField = "false";
        this.displayField = "true";
        this.value = {coding:[{}]};

    };

  /**updated() delivers only after render*/
  updated(){
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e){
            let obsMethod = this.parentNode.host;
            if (e.detail.response.method !== undefined){
                obsMethod.value = e.detail.response.method

            }else {
                this.parentNode.removeChild(this.parentNode.getElementById("obsMtdDiv"));
            }
        })
    }

    render(){
        if(typeof(this.value)=="string"){
            this.value = JSON.parse(this.value);
          }
        
        return html `

        <div id ="obsMtdDiv">
        <mwc-formfield label ="Observation Method:" alignEnd>
        ${this.value.coding.map((i,index) => html `
        ${this.codeField !== "false" ? html `<mwc-textfield id="codeFieldID" outlined label ="code" .value = "${i.code || ""}" @input = "${e=>i.code = e.target.value}" ></mwc-textfield>`:""}
        ${this.systemField !== "false" ? html `<mwc-textfield id="systemFieldID" outlined label ="system" .value= "${i.system || ""}" @input = "${e => i.system =e.target.value}" ></mwc-textfield>`:""}
        ${this.displayField !== "false" ? html `<mwc-textfield id="displayFieldID" outlined label ="Display" .value ="${i.display || ""}" @input = "${e => i.display =e.target.value}"></mwc-textfield>`:""} 
        `)}
        </mwc-formfield>
        </div>
        <iron-ajax id ="ajax" auto bubbles handle-as ="json" .url ="${this.url}"></iron-ajax>      
      `    
    }
    

};

customElements.define('fhir-observation-method',FhirObservationMethod);

