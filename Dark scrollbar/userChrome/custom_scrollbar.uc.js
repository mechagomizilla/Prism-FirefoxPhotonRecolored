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

    var css = `
    @namespace url(http: //www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);
    scrollbar, scrollbar *, scrollcorner, scrollbarbutton {
        -moz-appearance: none !important;
        --scrollbar-bg-color: #212121;
        --scrollbar-corner-color: #c8c8c8;
        --scrollbar-thumb-color: #c8c8c8;
        --scrollbar-thumb-hover-color: #98a3a6;
        --scrollbar-thumb-active-color: #98a3a6;
        --scrollbar-thumb-radius: 9px;
        --scrollbar-border: 6px solid #212121;
        --scrollbar-border-perpendicular: 6px solid #212121;
        --scrollbar-width: 18px;
        --scrollbar-height: var(--scrollbar-width);
    }
    scrollbar {
        background: var(--scrollbar-bg-color) !important;
    }
    scrollcorner {
        background: var(--scrollbar-corner-color) !important;
    }
    scrollbar[orient="vertical"] {
        width: var(--scrollbar-width) !important;
        min-width: var(--scrollbar-width) !important;
    }
    scrollbar[orient="horizontal"] {
        height: var(--scrollbar-height) !important;
        min-height: var(--scrollbar-height) !important;
    }
    scrollbar thumb {
        background: var(--scrollbar-thumb-color) !important;
        border-radius: var(--scrollbar-thumb-radius) !important;
    }
    scrollbar thumb:hover{
        background: var(--scrollbar-thumb-hover-color) !important;
    }
    scrollbar thumb:active {
        background: var(--scrollbar-thumb-active-color) !important;
    }
    scrollbar thumb[orient="vertical"] {
        border-left: var(--scrollbar-border) !important;
        border-right: var(--scrollbar-border) !important;
        border-top: var(--scrollbar-border-perpendicular) !important;
        border-bottom: var(--scrollbar-border-perpendicular) !important;
    }
    scrollbar thumb[orient="horizontal"] {
        border-top: var(--scrollbar-border) !important;
        border-bottom: var(--scrollbar-border) !important;
        border-left: var(--scrollbar-border-perpendicular) !important;
        border-right: var(--scrollbar-border-perpendicular) !important;
    }`;

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
