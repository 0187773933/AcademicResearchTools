// ==UserScript==
// @name         arXiv HTML FORCE LIGHT MODE
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Enforce light mode on arxiv HTML pages regardless of ar5iv_theme
// @match        https://arxiv.org/html/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	let applied = false;

	function forceLight() {
		try {
			if (applied) return;

			const theme = window.localStorage.getItem('ar5iv_theme');
			const hasToggle = typeof window.toggleColorScheme === 'function';

			if (!hasToggle) return;

			console.log('[arXiv light enforcer] theme:', theme);

			// If it's explicitly dark OR automatic (which defaults dark), flip it
			if (theme === 'dark' || theme === 'automatic' || theme === null) {
				window.toggleColorScheme();
				applied = true;
				console.log('[arXiv light enforcer] toggled → LIGHT');
			}

		} catch (e) {
			console.error('[arXiv light enforcer]', e);
		}
	}

	// 🔁 Poll until everything exists (this solves your null issue cleanly)
	const interval = setInterval(() => {
		forceLight();

		// stop once applied
		if (applied) {
			clearInterval(interval);
		}
	}, 100);

	// ⏱ hard timeout just in case
	setTimeout(() => clearInterval(interval), 5000);

})();