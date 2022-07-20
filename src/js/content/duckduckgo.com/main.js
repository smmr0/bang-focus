document.addEventListener('keydown', (e) => {
	if (document.activeElement && ['input', 'textarea'].includes(document.activeElement.localName)) {
		return;
	}

	if (e.key !== '!') {
		return;
	}

	const searchField = document.querySelector('input[name="q"]');

	if (searchField === null) {
		return;
	}

	e.preventDefault();

	const query = searchField.value.replace(/^(!\S*)?\s*/, '');
	searchField.value = query.length > 0 ? `! ${query}` : '!';
	searchField.setSelectionRange(1, 1);
	searchField.focus();
});
