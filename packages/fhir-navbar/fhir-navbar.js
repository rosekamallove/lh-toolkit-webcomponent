/**
 @license
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/**
 * `<fhir-navbar>` adds a navigation bar to the page with a static drawer in desktop view and toggled in mobile view.
 * Uses app-drawer-layout with paper icon buttons and iron selector for selection from drawer.
 * In typical use, just use `<fhir-navbar></fhir-navbar>`
 * @customElement
 * @polymer
 * @demo https://librehealth.gitlab.io/toolkit/lh-toolkit-webcomponents/demos/fhir-navbar.html
 *
 */
import {LitElement, html} from '@polymer/lit-element/lit-element.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';
import '@polymer/iron-icons/image-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/iron-selector/iron-selector.js';


class FhirNavbar extends LitElement {
    static get properties() {
        return {
            /*relocateHome is used to define path/url for relocation to home page*/
            relocateHome: String,
            /*relocateHome is used to define path/url for relocation to user account/profile page*/
            relocateProfile: String

        }
    }

    constructor() {
        super();
        this.relocateHome = "";
        this.relocateProfile = "";
    }

    _render({}) {
        return html`
 <style>
        :host {
          --app-primary-color: #ED820E;
          --app-secondary-color: black;
          --app-drawer-width: 200px;
          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }
       app-drawer {
     
      --app-drawer-content-container: {
        background-color: #f9ce9f;
      }
    }

        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
          height: 50px;
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 10px;
        }
        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }
        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }
    ul.breadcrumb {
    padding: 10px 16px;
    list-style: none;
    
    }
    ul.breadcrumb li {
    display: inline;
    font-size: 18px;
    }
    ul.breadcrumb li+li:before {
    padding: 8px;
    color: black;
    content: "/\\00a0";
     }
    ul.breadcrumb li a {
    color: #0275d8;
    text-decoration: none;
     }
    ul.breadcrumb li a:hover {
    color: #01447e;
    text-decoration: underline;
     }
      </style>
      
      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar><img src="./../images/librehealth.png" height="50" width="180"></app-toolbar>
           <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
            <a name="createPatient" href="[[rootPath]]createPatient">Create Patient</a>
            <a name="searchPatient" href="[[rootPath]]searchPatient">Search Patient</a>
            <a name="activeVisits" href="[[rootPath]]activeVisits">Active Visits</a>
            <a name="scheduleAppointment" href="[[rootPath]]scheduleAppointment">Schedule Appointment</a>
            <a name="manageUsers" href="[[rootPath]]manageUsers">Manage Users</a>
            <a name="manageLocations" href="[[rootPath]]manageLocations">Manage Locations</a>
            <a name="report" href="[[rootPath]]report">Report</a>
            <a name="settings" href="[[rootPath]]settings">Settings</a>
           </iron-selector>
        </app-drawer>
        <app-header-layout has-scrolling-region="">
          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
             
              <paper-icon-button src="./../images/logo.png" drawer-toggle=""></paper-icon-button>
              <paper-icon-button icon="menu" drawer-toggle=""></paper-icon-button>
              <div main-title>
            <!--  To Do: Make breadcrumb component dynamic.-->
              <ul class="breadcrumb">
              <li><a href="#">Home</a></li>
              <li><a href="#">Path1</a></li>
              <li><a href="#">Path2</a></li>
              </ul>
              </div>
              <paper-icon-button icon="home" on-click=${() => this.goHome()}></paper-icon-button>
              <paper-icon-button icon="social:person" on-click=${() => this.goProfile()}></paper-icon-button>
            </app-toolbar>
          </app-header>
        </app-header-layout>
      </app-drawer-layout>
    `;
    }

    goHome() {
        window.location.href = this.relocateHome;
    }

    goProfile() {
        window.location.href = this.relocateProfile;
    }

}

window.customElements.define('fhir-navbar', FhirNavbar);