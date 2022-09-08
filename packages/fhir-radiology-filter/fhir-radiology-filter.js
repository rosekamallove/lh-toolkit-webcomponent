/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-radiology-filter>` adds Accession Number, Patient Name or Id, Start date & End date, Urgencies. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-radiology-filter url=""></fhir-radiology-filter>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-radiology-filter.html
 *
 */
import { LitElement, html } from "lit-element";
import "@material/mwc-textfield/mwc-textfield.js";
import "@material/mwc-list/mwc-list-item";
import "@material/mwc-select";
import "@lh-toolkit/fhir-period/fhir-period.js";
import "@polymer/iron-ajax/iron-ajax.js";

class FhirRadiologyFilter extends LitElement {
  static get properties() {
    return {
      /**accessionNumber is to show accessionNumber of radiology order. Use this property to show/hide. Default: true */
      accessionNumber: { type: String },
      /**patientName is to search patient throught name. Use this property to show/hide. Default: false */
      patientName: { type: String },
      /**patientId is to search patient throught id. Use this property to show/hide. Default: false */
      patientId: { type: String },
      /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
      periodField: { type: String },
      /**urgency is to have the urgency of the radiology order. Use this property to show/hide. Default: false */
      urgency: { type: String },
      /**url is used to make AJAX call to FHIR resource. Default: null */
      url: { type: String },
      /**value is used to take the input value of each field*/
      value: { type: Array },
    };
  }

  /**default value of properties set in constructor*/
  constructor() {
    super();
    this.accessionNumber = "true";
    this.patientName = "true";
    this.patientId = "true";
    this.periodField = "true";
    this.urgency = "true";
    this.value = [{}];
  }

  /**updated() delivers only after render*/
  updated() {
    this.shadowRoot
      .getElementById("ajax")
      .addEventListener("iron-ajax-response", function (e) {
        var humanName = this.parentNode.host;
        if (e.detail.response.name !== undefined) {
          humanName.value = e.detail.response.name;
        } else {
          this.parentNode.removeChild(
            this.parentNode.querySelector("#humanNameDiv")
          );
        }
      });
  }

  render() {
    if (typeof this.value == "string") {
      this.value = JSON.parse(this.value);
    }
    return html` <div
        className="radiolgyFilterDiv"
        style="display: flex; flex-wrap: wrap; gap: 12px;"
      >
        ${this.accessionNumber !== "false"
          ? html`<mwc-textfield
              outlined
              class="accessionNumber"
              @input="${(e) => (this.value.accessionNumber = e.target.value)}"
              id="accessionNumber"
              label="Accession Number"
              <mwc-textfield
            />`
          : ""}
        ${this.patientName !== "false"
          ? html`<mwc-textfield
              outlined
              class="patientName"
              @input="${(e) => (this.value.patientName = e.target.value)}"
              id="patientName"
              label="Patient Name"
              <mwc-textfield
            />`
          : ""}
        ${this.patientId !== "false"
          ? html`<mwc-textfield
              outlined
              type="number"
              class="patientId"
              @input="${(e) => (this.value.patientId = e.target.value)}"
              id="patientId"
              label="Patient ID"
              <mwc-textfield
            />`
          : ""}
        ${this.periodField !== "false"
          ? html`<fhir-period end class="periodField"></fhir-period>`
          : ""}
        ${this.urgency !== "false"
          ? html`
              <mwc-select
                label="Urgencies"
                outlined
                class="urgency"
                @change="${(e) => (this.value.urgency = e.target.value)}"
              >
                <mwc-list-item value="all">All Urgencies</mwc-list-item>
                <mwc-list-item value="emergency">Emergency</mwc-list-item>
                <mwc-list-item value="routine">Routine</mwc-list-item>
                <mwc-list-item value="scheduleDate"
                  >On Schedule Date</mwc-list-item
                >
              </mwc-select>
            `
          : ""}
      </div>

      <iron-ajax
        id="ajax"
        bubbles
        auto
        handle-as="json"
        .url="${this.url}"
      ></iron-ajax>`;
  }
}

window.customElements.define("fhir-radiology-filter", FhirRadiologyFilter);
