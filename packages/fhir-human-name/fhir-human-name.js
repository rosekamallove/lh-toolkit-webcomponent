/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-human-name>` adds first, middle, last name form fields to your page. Uses mwc-textfield and iron-ajax
 * In typical use, just use `<fhir-human-name url=""></fhir-human-name>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-human-name.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@lh-toolkit/fhir-period/fhir-period.js';
import '@polymer/iron-ajax/iron-ajax.js';

class FhirHumanName extends LitElement {
   /**function to check if object is undefined. If undefined show blank else returns obj value*/
    static undefinedToBlank(obj) {
        if (obj == undefined) {
            return '';
        }
        else {
            return obj;
        }
    }

    static get properties() {
        return {
            /**useField is a selectable option for use of name. Use this property to show/hide. Default: true */
            useField: Boolean,
            /**suffixField is show suffix. Use this property to show/hide. Default: true */
            suffixField: Boolean,
            /**prefixField is used to show prefix. Use this property to show/hide. Default: true */
            prefixField: Boolean,
            /**fName is to show first name of a person. Use this property to show/hide. Default: true */
            fName: Boolean,
            /**lName is to show last name of a person. Use this property to show/hide. Default: true */
            lName: Boolean,
            /**mName is to show mName name of a person. Use this property to show/hide. Default: false */
            mName: Boolean,
            /**periodField is to have start and end dates. Use this property to show/hide. Default: false */
            periodField: Boolean,
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String
        }
    }
/**default value of properties set in constructor*/
    constructor() {
        super();
        this.useField = true;
        this.suffixField = true;
        this.prefixField = true;
        this.fName = true;
        this.mName = false;
        this.lName = true;
        this.periodField = false;
    }
/**_didRender() delivers only after _render*/
    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.name != undefined) {
                var i = 0;
                for (let val of e.detail.response.name) {
                    if (i > 0) {
                        var child = e.target.parentNode.childNodes[1].cloneNode(true);
                        e.target.parentNode.appendChild(child);
                    }
                    e.target.parentNode.querySelectorAll('.useField')[i].value = e.detail.response.name[i].use;
                    e.target.parentNode.querySelectorAll('.suffixField')[i].value = FhirHumanName.undefinedToBlank(e.detail.response.name[i].suffix);
                    e.target.parentNode.querySelectorAll('.prefixField')[i].value = FhirHumanName.undefinedToBlank(e.detail.response.name[i].prefix);
                    e.target.parentNode.querySelectorAll('.fName')[i].value = FhirHumanName.undefinedToBlank(e.detail.response.name[i].given);
                    if (e.target.parentNode.querySelectorAll('.mName').length != 0) {
                        e.target.parentNode.querySelectorAll('.fName')[i].value = e.detail.response.name[i].given[0];
                        e.target.parentNode.querySelectorAll('.mName')[i].value = FhirHumanName.undefinedToBlank(e.detail.response.name[i].given[1]);
                    }
                    e.target.parentNode.querySelectorAll('.lName')[i].value = FhirHumanName.undefinedToBlank(e.detail.response.name[i].family);
                    if (e.target.parentNode.querySelectorAll('.periodField').length != 0
                        && e.detail.response.name[i].period != undefined)
                        e.target.parentNode.querySelectorAll('.periodField')[i].period = JSON.stringify(e.detail.response.name[i].period);
                    i++;
                }
            }
            else if (e.detail.response.name == undefined) {
                e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
            }
        });
    }

    _render({useField, suffixField, fName, mName, lName, periodField, url, prefixField}) {
        return html`
   <div> 
   <label>NAME:</label> 
   ${useField ? html`
     <label>Use:</label>
     <select class="useField">
         <option value="usual">Usual</option>
         <option value="official">Official</option>
         <option value="temp">Temporary</option>
         <option value="nickname">Nickname</option>
         <option value="anonymous">Anonymous</option>
         <option value="old">Old</option>
         <option value="maiden">Maiden</option>
     </select>` : ''}
     ${prefixField ? html`<mwc-textfield outlined class="prefixField" id="prefix" label="Prefix"></mwc-textfield>` : ''}
     ${fName ? html`<mwc-textfield outlined class="fName" id="firstname" label="First Name:"></mwc-textfield>` : ''}
     ${mName ? html`<mwc-textfield outlined class="mName" id="middlename" label="Middle Name:"></mwc-textfield>` : ''}
     ${lName ? html`<mwc-textfield outlined class="lName" id="lastname" label="Last Name:"></mwc-textfield>` : ''}
     ${periodField ? html`<fhir-period class="periodField"></fhir-period>` : ''}
     ${suffixField ? html`<mwc-textfield outlined class="suffixField" id="suffix" label="Suffix"></mwc-textfield>` : ''}
         </div> 
         <iron-ajax id="ajax" bubbles auto handle-as="json" url="${url}"></iron-ajax>
    `;
    }
}

window.customElements.define('fhir-human-name', FhirHumanName);
