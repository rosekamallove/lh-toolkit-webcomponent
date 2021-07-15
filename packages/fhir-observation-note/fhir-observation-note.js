/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-note>` adds comments about an observation to a page. 
 * In typical use, just use `<fhir-observation-note url=""></fhir-observation-note>` or `<fhir-observation-note value=""></fhir-observation-note>`
 * It uses a mwc-textarea input and iron-ajax.
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-observation-note.html
 *
 */


import {LitElement, html} from "lit-element";
import "@material/mwc-formfield/mwc-formfield.js";
import "@material/mwc-textarea/mwc-textarea.js";
import "@polymer/iron-ajax/iron-ajax";


class FhirObservationNote extends LitElement {
    static get properties(){
        return{
            
            /**the noteField is used to show the comments about an observation. use this property to show/hide. Defaault  is false */
            noteField: {type: String},

            /**used to make AJAX calls to FHIR resource. Default is Null */
            url: {type: String},

            /**value is used to take the input value of each field */
            value:{type: Array}
        }

    };

    constructor(){
        super();
        this.noteField = "true";
        this.value = [{}]
    }


   
     render(){
        if(typeof(this.value) == "string"){
            this.value = JSON.parse(this.value)
        }
        return html `
         <div id= "obsNoteDiv">
             <mwc-formfield label ="Note:" alignEnd>
        ${this.value.map(item => html `
        ${this.noteField !== "false" ?
        html `<mwc-textarea id="obsNoteId" outlined label ="Note" .value = "${item.text || ""}" @input = "${e => item.text = e.target.value}"></mwc-textarea>`:""}
        `)}
        </mwc-formfield>
        </div>
        <iron-ajax id= "ajax" bubbles auto handle-as ="json" .url ="${this.url}"></iron-ajax>`
    }

    updated(){
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e){
            let note = this.parentNode.host;
            if(e.detail.response.note !== undefined){
                note.value = e.detail.response.note;
            }
            else{
                this.parentNode.removeChild(this.parentNode.getElementById("obsNoteDiv"));            }
        })
    }

}

customElements.define("fhir-observation-note",FhirObservationNote);