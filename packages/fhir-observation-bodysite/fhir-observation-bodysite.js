/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-bodysite>` adds the site on the subject"s body where the observation was made to page. 
 * In typical use, just use `<fhir-observation-bodysite url=""></fhir-observation-bodysite>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-observation-bodysite.html
 *
 */


import {LitElement, html} from "lit-element";
import "@material/mwc-textfield/mwc-textfield.js"
import "@material/mwc-formfield/mwc-formfield.js"
import "@polymer/iron-ajax/iron-ajax.js";


class FhirObservationBodysite extends LitElement{

    static get properties(){
        return {
              /**the codeField is used to show the code of for the observation site in the body. use this property to show/hide. Defaault  is false */
              codeField :{type: String},

              /**the systemField is used to show the system for an observation site in the body. use this property to show/hide. Defaault  is false */
              systemField: {type: String},
              
              /**the displayField is used to show the observation site in the body. use this property to show/hide. Defaault  is true */
              displayField: {type: String},
  
              /**used to make AJAX calls to FHIR resource. Default is Null */
              url: {type: String},
  
              /**takes the input value of an observation bodysite */
            value : {type: Array}
        }
    }

    constructor(){
        super();
        this.displayField = "true";
        this.codeField ="false";
        this.systemField ="false";
        this.value = {coding:[{}]};


    }

    /**updated() delivers only after render */
    updated(){
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function(e){
            let obsSite = this.parentNode.host;

            if(e.detail.response.bodySite !== undefined){
                obsSite.value = e.detail.response.bodySite;
            }
            else{
                this.parentNode.removeChild(this.parentNode.getElementById("obsSiteDiv"));
            }
        })
    }



    render() {
        if(typeof(this.value)=="string"){
          this.value = JSON.parse(this.value);
        }
        return html `${this.value.coding.map((i, index) => html `
        <div id ="obsSiteDiv">
            <mwc-formfield label= "Observation Site:" alignEnd>
            ${this.codeField !== "false" ? html `<mwc-textfield id ="codeFieldID"  label = "code" outlined .value = "${i.code || ""}" @input ="${e => i.code = e.target.value}"></mwc-textfield>`:""}
             ${this.systemField !== "false" ? html `<mwc-textfield id="systemFieldID" label ="system" outlined  .value = "${i.system || ""}" @input = "${e => i.system = e.target.value}"></mwc-textfield>`:""}
             ${this.displayField !== "false" ? html `<mwc-textfield id="displayFieldID" label = "display" outlined .value = "${i.display || "" }" @input ="${e => i.display = e.target.value}"></mwc-textfield>`:""}
            </mwc-formfield>
      </div>
            <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
            `)}`      
      }

}

customElements.define("fhir-observation-bodysite", FhirObservationBodysite);