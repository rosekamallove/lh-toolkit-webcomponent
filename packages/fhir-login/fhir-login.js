/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-login>` creates a login page using mwc-textfield, mwc-button and iron-ajax.
 * Displays input of user name and password with a button for authentication.
 * In typical use, just use `<fhir-login url=""></fhir-login>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-login.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@material/mwc-button/mwc-button.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@polymer/iron-ajax/iron-ajax.js';
class FhirLogin extends LitElement {

    static get properties() {
        return {
            /**url is used to make AJAX call to FHIR resource. Default: null */
            url: String
        }
    }

    constructor() {
        super();
        this.url = "";
    }

    _didRender() {
        this.shadowRoot.getElementById('ajax').addEventListener('iron-ajax-response', function (e) {
            if (e.detail.response.authenticated) {
                window.location.href = "../../index.html";
            }
            else {
                if (e.target.parentNode.getElementById('username')._input.value != undefined) {
                    alert("Please login with correct credentials");
                }

            }
        });
    }

    _render({userName, passWord, url}) {
        return html`
       <style>
         .orange {
        --mdc-theme-on-primary: white;
        --mdc-theme-primary: orange;
        --mdc-theme-on-secondary: white;
        --mdc-theme-secondary: orange;
        margin: auto;
       }
       .card {
       margin: auto;
       width: 20%;
       border-radius: 5px;
       }
       .mid{
       margin: auto;
       }
       img{
       display: block;
       margin-left: auto;
       margin-right: auto;
       }
       </style>
       <img src="https://librehealth.io/img/logo.png" class="center"><br>
       <div class="card">
       <mwc-textfield outlined  class="mid" id="username" label="Username"></mwc-textfield><br>
       <mwc-textfield outlined class="mid" id="password" label="Password" type="password"></mwc-textfield><br>  
       <mwc-button id="button" raised class="orange" on-click=${() => this.doLogin()}>Login</mwc-button>
       </div>
       <iron-ajax bubbles id="ajax" url="${url}"></iron-ajax>
    `;
    }

    doLogin() {
        if (this.url != "") {
            var username = this.shadowRoot.getElementById('username')._input.value;
            var password = this.shadowRoot.getElementById('password')._input.value;
            this.shadowRoot.getElementById('ajax').headers['Authorization'] = 'Basic ' + btoa(username + ':' + password);
            this.shadowRoot.getElementById('ajax').generateRequest();
        }
        else {
            window.location.href = "../../index.html";
        }
    }


}

window.customElements.define('fhir-login', FhirLogin);