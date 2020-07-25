/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-valuestring>` adds the actual observation result of a string type to page. 
 * In typical use, just use `<fhir-observation-valuestring url=""></fhir-observation-valuestring>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-observation-valuestring.html
 *
 */


import {LitElement, html} from "lit-element";
import "@material/mwc-textarea/mwc-textarea.js"
import "@polymer/iron-ajax"

class FhirObservationValuestring extends LitElement{

    static get properties(){
        return {
            
            /**shows the value of the observation valuestring. Used to hide/show the value. default value is "true"  */
            valuestringField : {type: String},

            /** URL used to make an AJAX call to the FHIR resource. default is NULL */
            url: {type: String},

            /**takes the input value of the observation valuestring field */
            value: {type: String}

        }
    }

    constructor(){
        super();
        this.valuestringField = "true";
        this.value = "";
    }

    /**updated() delivers only after render() */

    updated(){
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function(e){
            let ObsValue = this.parentNode.host
            if (e.detail.response.valueString !== undefined){
                ObsValue.value = e.detail.response.valueString;
            }else{
                this.parentNode.removeChild(this.parentNode.getElementById("obsDiv"));
            }
            

        })
    }
    

    render(){
        return html `
        <div id ="obsDiv">
        ${this.valuestringField !== "false" ?
        html`<mwc-textarea id = "obsvaluestringID" outlined placeholder="Observation value" .value = "${this.value || ""}" @input= "${e => this.value = e.target.value}"></mwc-textarea>`:""}
        </div>
        <iron-ajax id="ajax"  bubbles auto handle-as = "json" .url = "${this.url}"></iron-ajax>

        `
    }

}

customElements.define("fhir-observation-valuestring", FhirObservationValuestring);