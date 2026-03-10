// ==UserScript==
// @name         PubMed Smart Publisher Redirect
// @namespace    local.pubmed.publisherredirect
// @version      2.0
// @description  Open major publisher links from PubMed automatically
// @match        https://pubmed.ncbi.nlm.nih.gov/*
// @match        https://pmc.ncbi.nlm.nih.gov/articles/*
// @updateURL    https://github.com/0187773933/AcademicResearchTools/raw/refs/heads/master/pubmed-redirector.user.js
// @downloadURL  https://github.com/0187773933/AcademicResearchTools/raw/refs/heads/master/pubmed-redirector.user.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {

"use strict";

/* =========================
   CONFIG
   ========================= */

const OPEN_IN_NEW_TAB = false;

const PUBLISHER_PRIORITY = [
	"nature.com",
	"springer.com",
	"springerlink.com",
	"sciencedirect.com",
	"elsevier.com",
	"wiley.com",
	"tandfonline.com",
	"academic.oup.com",
	"cambridge.org"
];

/* ========================= */

function open(url) {
	console.log( url );
	if (OPEN_IN_NEW_TAB) {
		window.open(url, "_blank", "noopener,noreferrer");
	} else {
		location.replace( url );
	}
}

function run() {

	if (location.href.includes("articles")) {
		const all_links = [...document.querySelectorAll("a")];

		/* 1️⃣ explicit publisher button */
		for (const a of all_links) {
			const text = a.textContent.trim().toLowerCase();
			if (text.includes("view on publisher site")) {
				console.log( "found on publisher site" );
				open(a.href);
				return;
			}
		}
	}

	const links = [...document.querySelectorAll(".full-text-links-list a")];
	console.log( "PubMed Smart Publisher Redirect" );
	console.log( links );

	if (!links.length) return;

	// 1. Major publishers
	for (const domain of PUBLISHER_PRIORITY) {
		for (const a of links) {
			if (a.href.includes(domain)) {
				open(a.href);
				return;
			}
		}
	}

	// 2. DOI fallback
	for (const a of links) {
		if (a.href.includes("doi.org")) {
			open(a.href);
			return;
		}
	}

	for ( const a of links ) {
		open( a.href );
		return;
	}

}

run();

})();

