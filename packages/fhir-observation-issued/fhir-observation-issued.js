
/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-issued>` adds the issed time and date of an observation to a page. Uses input type datetime in mm/dd/yyyy hh:mm:ss format.
 * In typical use, just use `<fhir-observation-issued url=""></fhir-observation-issued>`
 * It uses a date-time input and iron-ajax.
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-observation-issued.html
 *
 */

/**converts between json and string attributes */
const jsonStringConverter = {
    toAttribute(val) {
        return JSON.parse(val);
    },
    fromAttribute(str) {
        return JSON.stringify(str);
    }
}


import {LitElement, html} from "lit-element";
import "@material/mwc-textfield";
import "@material/mwc-formfield";
import "@polymer/iron-ajax";
import moment from "moment";

class FhirObservationIssued extends LitElement{
    static get properties(){
        return{
            
            /**obsIssued is used to show the time and date an observation was issued. Use this property to show/hide. Default: true */
            obsIssued : {type: String},

             /**url is used to make AJAX call to FHIR resource. Default: null */
            url : {type: String},

            /**value is used to take the input value of each field*/
            value : {type: jsonStringConverter, reflect: true}
        }
    }
    constructor(){
        super()
        this.obsIssued = "true";
        this.value = {};

    }

     /**updated() delivers only after render()*/
    updated(){
        this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function(e){
           let obsIssed = this.parentNode.host
            if(e.detail.response.issued !== undefined){
                obsIssed.value = moment(e.detail.response.issued).format("YYYY-MM-DDTHH:mm:ss");
            }else{
                this.parentNode.removeChild(this.parentNode.getElementById("obsIssuedDiv"))
            }

        })
    }

    render(){
        return html`
        <div id = "obsIssuedDiv">
        ${this.obsIssued !== "false" ?
        html `
        <mwc-formfield class = "Issued" label ="OBSERVATION ISSUED:" alignEnd>
            <mwc-textfield  id ="dateissued" outlined type ="datetime-local" .value = "${this.value}" @input ="${e =>this.value =e.target.value}"></mwc-textfield>
        </mwc-formfield>
        `:""}
        </div>
        <iron-ajax id ="ajax" bubbles auto handle-as ="json" .url="${this.url}"></iron-ajax>
        `
    }



}

customElements.define("fhir-observation-issued",FhirObservationIssued)