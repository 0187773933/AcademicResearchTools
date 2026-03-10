// ==UserScript==
// @name         Web of Science Redirector
// @namespace    local.pubmed.publisherredirect
// @version      1.0
// @description  Redirects to WSU EZProxy
// @match        https://www-webofscience-com.ezproxy.libraries.wright.edu/wos/woscc/full-record/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {

"use strict";

const OPEN_IN_NEW_TAB = false;

function open(url) {
    console.log(url);
    if (OPEN_IN_NEW_TAB) {
        window.open(url, "_blank", "noopener,noreferrer");
    } else {
        location.replace(url);
    }
}

function waitForId(id, timeout = 4000) {
    return new Promise((resolve, reject) => {

        const existing = document.getElementById(id);
        if (existing) {
            resolve(existing);
            return;
        }

        const observer = new MutationObserver(() => {
            const el = document.getElementById(id);
            if (el) {
                observer.disconnect();
                clearTimeout(timer);
                resolve(el);
            }
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });

        const timer = setTimeout(() => {
            observer.disconnect();
            reject();
        }, timeout);

    });
}

function run() {

    waitForId("FullRTa-DOI", 4000).then(el => {

        const doi = el.textContent.trim();
        if (!doi) return;

        const url = `https://doi-org.ezproxy.libraries.wright.edu/${doi}`;
        open(url);

    }).catch(() => {
        console.log("DOI not found within timeout");
    });

}

run();

})();