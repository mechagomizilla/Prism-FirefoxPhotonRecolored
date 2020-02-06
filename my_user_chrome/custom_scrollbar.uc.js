// ==UserScript==
// @name           custom_scrollbar.uc.js
// @namespace      https://github.com/InsanityDevice/Firefox-userChrome-minor-tweaks
// @include        main
// @version        1.0.0
// @note           Thanks to Aris-T2(https://github.com/Aris-t2/CustomJSforFx) and Endor8(https://github.com/Endor8/userChrome.js)
// ==/UserScript==

(function () {
    var prefs = Services.prefs,
        enabled;
    if (prefs.prefHasUserValue('userChromeJS.custom_scrollbar.enabled')) {
        enabled = prefs.getBoolPref('userChromeJS.custom_scrollbar.enabled')
    } else {
        prefs.setBoolPref('userChromeJS.custom_scrollbar.enabled', true);
        enabled = true;
    }

    var css = '\
    @namespace url(http: //www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\
    scrollbar, scrollbar *, scrollcorner {\
        -moz-appearance: none !important;\
        --scrollbar-bg-color: rgb(12,12,13);\
        --scrollbar-corner-color: rgb(39, 39, 43);\
        --scrollbar-thumb-color: hsla(0,0%,70%,.4);\
        --scrollbar-thumb-hover-color: rgba(249,249,250,.4);\
        --scrollbar-thumb-active-color: rgba(249,249,250,.5);\
        --scrollbar-thumb-radius: 0px;\
        --scrollbar-border: 0px solid rgb(12,12,13);\
        --scrollbar-width: 14px;\
        --scrollbar-height: var(--scrollbar-width);\
    }\
    scrollbar {\
        background: var(--scrollbar-bg-color) !important;\
    }\
    scrollcorner {\
        background: var(--scrollbar-corner-color) !important;\
    }\
    scrollbar[orient="vertical"] {\
        width: var(--scrollbar-width) !important;\
        min-width: var(--scrollbar-width) !important;\
    }\
    scrollbar[orient="horizontal"] {\
        height: var(--scrollbar-height) !important;\
        min-height: var(--scrollbar-height) !important;\
    }\
    scrollbar thumb {\
        background: var(--scrollbar-thumb-color) !important;\
        border-radius: var(--scrollbar-thumb-radius) !important;\
    }\
    scrollbar thumb:hover{\
        background: var(--scrollbar-thumb-hover-color) !important;\
    }\
    scrollbar thumb:active {\
        background: var(--scrollbar-thumb-active-color) !important;\
    }\
    scrollbar thumb[orient="vertical"] {\
        border-left: var(--scrollbar-border) !important;\
        border-right: var(--scrollbar-border) !important;\
    }\
    scrollbar thumb[orient="horizontal"] {\
        border-top: var(--scrollbar-border) !important;\
        border-bottom: var(--scrollbar-border) !important;\
    }';

    var sss = Cc['@mozilla.org/content/style-sheet-service;1'].getService(Ci.nsIStyleSheetService);
    var uri = makeURI('data:text/css;charset=UTF=8,' + encodeURIComponent(css));

    var p = document.getElementById('devToolsSeparator');
    var m = document.createElement('menuitem');
    m.setAttribute('label', "Schwebende Scrollbar");
    m.setAttribute('type', 'checkbox');
    m.setAttribute('autocheck', 'false');
    m.setAttribute('checked', enabled);
    p.parentNode.insertBefore(m, p);
    m.addEventListener('command', command, false);

    if (enabled) {
        sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
    }

    function command() {
        if (sss.sheetRegistered(uri, sss.AGENT_SHEET)) {
            prefs.setBoolPref('userChromeJS.custom_scrollbar.enabled', false);
            sss.unregisterSheet(uri, sss.AGENT_SHEET);
            m.setAttribute('checked', false);
        } else {
            prefs.setBoolPref('userChromeJS.custom_scrollbar.enabled', true);
            sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
            m.setAttribute('checked', true);
        }

        let root = document.documentElement;
        let display = root.style.display;
        root.style.display = 'none';
        window.getComputedStyle(root).display; // Flush
        root.style.display = display;
    }

})();