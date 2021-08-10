
/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * The <fhir-observation-status> displays the current status of an observation . Options includes registered,preliminary,final and amended
 *
 * @customElement
 * @polymer
 * 
 */

import { LitElement, html } from "lit-element";
import "@material/mwc-select";
import "@material/mwc-formfield";
import "@material/mwc-list/mwc-list-item";
import "@polymer/iron-ajax/iron-ajax.js";


const jsonStringConverter = {
  toAttribute(val) {
    // convert the value to string so it can be used as an attribute value
    return JSON.stringify(val);
  },
  fromAttribute(str) {
    // convert the attribute value to a JS object to use it as a property
    return JSON.parse(str);
  }
}


class FhirObservationStatus extends LitElement {
  static get properties() {
    return {

       /**obsStatus is a selectable option type of allergy. Use this property to show/hide. Default: true */
      obsStatus: { type: String },

      /**url is used to make AJAX call to FHIR resource. Default: null */
      url: { type: String },

       /**value is used to take the input value of each field*/
      value: { type:jsonStringConverter, reflect: true}
    };
  }

  constructor() {
    super();
    this.obsStatus = "true";
    this.value = {};
  }

  /**updated() delivers only after render*/
  updated() {

    this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e) {

      var obsCat = this.parentNode.host;
      if (e.detail.response.status !== undefined) {
        obsCat.value = e.detail.response.status;
      }
      else {
        this.parentNode.removeChild(this.parentNode.querySelector("#obsDiv"));
      }
    });
  }

  render() {
    return html`
    <div id="obsDiv">
    ${this.obsStatus !== "false" ? html`
      <mwc-formfield label ="Observation Status:" alignEnd>
      <mwc-select label="Observation status" class="obsClass" outlined .value="${this.value}" @change="${e => this.value = e.target.value}">
          <mwc-list-item></mwc-list-item>
          <mwc-list-item value="registered">Registered </mwc-list-item>
          <mwc-list-item value="preliminary">Preliminary </mwc-list-item>
          <mwc-list-item value="final">Final</mwc-list-item>
          <mwc-list-item value="amended">Amended</mwc-list-item>
      </mwc-select>
      </mwc-formfield>` : ""}
      </div>
      <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
     `;

  }


}

window.customElements.define("fhir-observation-status", FhirObservationStatus);
