/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-radiology-list>` adds search to your page and shows the results in form of a grid. Uses mwc-textfield, vaadin-grid and iron-ajax
 * Displays ID, Name and Active status of the search subject.
 * In typical use, just use `<fhir-radiology-list url=""><fhir-radiology-list>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-radiology-list.html
 *
 */

import { LitElement, html } from "lit-element";
import "@material/mwc-textfield/mwc-textfield.js";
import "@polymer/iron-ajax/iron-ajax.js";
import "@vaadin/vaadin-grid/vaadin-grid.js";
import "@vaadin/vaadin-grid/vaadin-grid-selection-column.js";
import { exampleRadiologyList } from "./example_data";

class FhirRadiologyList extends LitElement {
  static undefinedToBlank(obj) {
    if (obj == undefined) {
      return "";
    } else {
      return obj;
    }
  }

  static get properties() {
    return {
      /**url is used to make AJAX call to FHIR resource. Default: null */
      url: { type: String },
      /**orders is used to take the Array of Orders*/
      orders: { type: Array },
    };
  }

  constructor() {
    super();
    this.orders = exampleRadiologyList;
  }

  updated() {
    console.log(this.orders);
    const grid = this.shadowRoot.getElementById("table");
    grid.items = this.orders;
  }

  render() {
    return html`
      <vaadin-grid aria-label="Names" id="table" style="font-size: 80%;">
         <vaadin-grid-column width="0px" flex="0 ">
            <template class="header ">Accession Number</template>
            <template>[[item.accessionNumber]]</></template>
         </vaadin-grid-column>
         <vaadin-grid-column>
            <template class="header ">Patient</template>
            <template>[[item.patient.display]]</template>
         </vaadin-grid-column>
         <vaadin-grid-column>
            <template class="header">Urgency</template>
            <template>[[item.urgency]]</template>
         </vaadin-grid-column>
         <vaadin-grid-column>
            <template class="header">Imagin Procedure</template>
            <template>[[item.concept.display]]</template>
         </vaadin-grid-column>
         <vaadin-grid-column>
            <template class="header">Referring Physician</template>
            <template>[[item.orderer.display]]</template>
         </vaadin-grid-column>
         <vaadin-grid-column>
            <template class="header">Scheduled Date</template>
            <template>[[item.scheduledDate]]</template>
         </vaadin-grid-column>
         <vaadin-grid-column>
            <template class="header">Date Activated</template>
            <template>[[item.dateActivated]]</template>
         </vaadin-grid-column>
         <vaadin-grid-column>
            <template class="header">Date Stopped</template>
            <template>[[item.dateActivated]]</template>
         </vaadin-grid-column>
      </vaadin-grid>
    `;
  }
}

window.customElements.define("fhir-radiology-list", FhirRadiologyList);
