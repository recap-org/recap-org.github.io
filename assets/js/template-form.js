/* Template form interactions: builds download link and updates badges */
(function () {
    function qsa(root, sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }
    function getCheckedRadioValue(form, name, fallback) {
        var el = form.querySelector('input[name="' + name + '"]:checked');
        return el && el.value ? el.value : fallback;
    }

    function onReady(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else { fn(); }
    }

    onReady(function () {
        var form = document.getElementById('template-selector');
        if (!form) return;
        var result = document.getElementById('template-result');
        var badge = document.getElementById('badge-latex');
        var button = document.getElementById('get-download-button');
        var baseUrl = (form.dataset && form.dataset.baseurl) ? form.dataset.baseurl : '';

        function handleSubmit(event) {
            if (event && typeof event.preventDefault === 'function') event.preventDefault();
            var languages = qsa(form, 'input[name="languages"]:checked').map(function (i) { return i.value; });
            var usecase = form.querySelector('input[name="usecase"]:checked');
            var latex = getCheckedRadioValue(form, 'latex-packages', 'auto');

            if (result) result.innerHTML = '';

            if (!usecase) {
                if (result) { result.textContent = 'Please select a use case.'; result.focus(); }
                return false;
            }
            if (languages.indexOf('R') === -1) {
                if (result) { result.innerHTML = 'Currently, downloads are available for the R template only. Please select R. Python and Stata are coming soon.'; result.focus(); }
                return false;
            }

            var zipName = 'recap-data-template-latex-' + latex + '.zip';
            var href = (baseUrl || '') + '/downloads/' + zipName;

            if (result) {
                var wrap = document.createElement('div');
                // Build content without template literals for broader compatibility
                wrap.innerHTML = '' +
                    '<p style="margin: 0 0 .5rem">Your selection is ready:</p>' +
                    '<ul style="margin: 0 0 1rem">' +
                    '<li><strong>Languages:</strong> ' + languages.join(', ') + '</li>' +
                    '<li><strong>Use case:</strong> ' + usecase.value + '</li>' +
                    '<li><strong>LaTeX:</strong> ' + latex + '</li>' +
                    '</ul>' +
                    '<a class="btn btn-primary" href="' + href + '">Download data template (LaTeX: ' + latex + ')</a>';
                result.appendChild(wrap);
                result.focus();
            }
            return false;
        }

        function updateBadge() {
            if (!badge) return;
            var latex = getCheckedRadioValue(form, 'latex-packages', 'auto');
            var label = 'LaTeX-' + latex;
            badge.src = 'https://img.shields.io/badge/' + encodeURIComponent(label) + '-008080?logo=latex&logoColor=white';
            badge.alt = 'LaTeX ' + latex;
        }

        if (button) button.addEventListener('click', handleSubmit);
        form.addEventListener('change', updateBadge);
    });
})();
