/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-observation-category>` adds category of an observation to  the page. Uses mwc-select to choose options.
 * It is a code concept in FHIR and hence hard-coded into the pattern.
 * In typical use, just use `<fhir-observation-category url=""></fhir-observation-category>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-observation-category.html
 *
 */



import { LitElement, html } from "lit-element";
import "@material/mwc-select/mwc-select.js";
import "@material/mwc-list/mwc-list-item.js";
import "@material/mwc-formfield/mwc-formfield.js";
import "@polymer/iron-ajax";


class FhirObservationCategory extends LitElement {

  static get properties() {
    return {
      /**obsCat is a selectable option for the category of an observation. Use this property to show/hide. Default: true */
      obsCat: { type: String },

      /**url is used to make AJAX call to FHIR resource. Default: null */
      url: { type: String },

      /**value is used to take the input value of each field*/
      value: { type: Array}

    };
  }
  constructor() {
    super();
    this.value = [{coding:[{}]}];
    this.obsCat = "true"
  }

  /** updated() is rendered only after render() */
  updated() {
    this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e) {
      var observation = this.parentNode.host;
      if (e.detail.response.category !== undefined) {
        observation.value = e.detail.response.category;
      }
      else {
        this.parentNode.removeChild(this.parentNode.querySelector("#obsDiv"));
      }
    });
  }


  render() {
    if(typeof(this.value)=="string"){
      this.value = JSON.parse(this.value);
    }
    return html `${this.value.map((i, index) => html `
    <div id ="obsDiv">
        <mwc-formfield label= "OBSERVATION CATEGORY:" alignEnd>
        ${this.obsCat !== "false" ?
        html`${i.coding.map((i, index) => html `
        <mwc-select outlined  label ="category" id ="obsClass" .value = "${i.code}" @change ="${e => this.value[index].code = e.target.value}"> 
                <mwc-list-item></mwc-list-item>
                <mwc-list-item value ="social-history"> Social History</mwc-list-item>
                <mwc-list-item value = "vital-signs">Vital Signs</mwc-list-item>
                <mwc-list-item value = "imaging">Imaging</mwc-list-item>
                <mwc-list-item value = "laboratory">Laboratory</mwc-list-item>
                <mwc-list-item value = "procedure">Procedure</mwc-list-item>
                <mwc-list-item value = "survey">Survey</mwc-list-item>
                <mwc-list-item value = "exam">Exam</mwc-list-item>
                <mwc-list-item value = "therapy">Therapy</mwc-list-item>
                <mwc-list-item value ="activity">Activity</mwc-list-item>     
        </mwc-select>`)}` : ""}
        </mwc-formfield>
  </div>
        <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
        `)}`      
  }
  

}
customElements.define("fhir-observation-category", FhirObservationCategory);