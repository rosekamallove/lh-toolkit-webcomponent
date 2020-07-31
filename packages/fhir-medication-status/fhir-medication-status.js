/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * The <fhir-medication-status> displays the current status of an medication . Options includes active,inactive, and entered in error
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


class FhirMedicationStatus extends LitElement {
  static get properties() {
    return {
      /**medStatus is a selectable option for the status of a medication. Use this property to show/hide. Default: true */
      medStatus: { type: String },
      /**url is used to make AJAX call to FHIR resource. Default: null */
      url: { type: String },
      /**value is used to take the input value of each field*/
      value: { type: String }
    };
  }

  constructor() {
    super();
    this.medStatus = "true";
    this.value = "";
  }

  render() {
    return html`
    <div id="medStatusDiv">
    ${this.medStatus !== "false" ? html`
      <mwc-formfield label ="Status:" alignEnd>
      <mwc-select outlined id="statusID" .value="${this.value}" @change="${e => this.value = e.target.value}">
          <mwc-list-item></mwc-list-item>
          <mwc-list-item value="active">Active </mwc-list-item>
          <mwc-list-item value="inactive">Inactive </mwc-list-item>
          <mwc-list-item value="entered-in-error">Entered in Error</mwc-list-item>
      </mwc-select>
      </mwc-formfield>` : ""}
      </div>
      <iron-ajax id="ajax" bubbles auto handle-as="json" .url="${this.url}"></iron-ajax>
     `;

  }

  /**updated() delivers only after render*/
  updated() {
    this.shadowRoot.getElementById("ajax").addEventListener("iron-ajax-response", function (e) {
      var medStat = this.parentNode.host;
      if (e.detail.response.status !== undefined) {
        medStat.value = e.detail.response.status;
      }
      else {
        this.parentNode.removeChild(this.parentNode.getElementById("medStatusDiv"));
      }
    });
  }



}

customElements.define("fhir-medication-status", FhirMedicationStatus);
