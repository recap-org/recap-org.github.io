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

            // Validation
            if (!usecase) {
                alert('Please select a use case.');
                return false;
            }
            if (languages.indexOf('R') === -1) {
                alert('Currently, downloads are available for the R template only. Please select R. Python and Stata are coming soon.');
                return false;
            }

            // Hide form, show result
            form.style.display = 'none';
            if (result) {
                result.style.display = '';
                // Fill in recap
                var recapLang = document.getElementById('recap-languages');
                var recapUse = document.getElementById('recap-usecase');
                var recapLatex = document.getElementById('recap-latex');
                if (recapLang) recapLang.textContent = languages.join(', ');
                if (recapUse) recapUse.textContent = usecase.value;
                if (recapLatex) recapLatex.textContent = latex;
                // Set download link
                var zipName = 'recap-data-template-latex-' + latex + '.zip';
                var href = (baseUrl || '') + '/downloads/' + zipName;
                var downloadBtn = document.getElementById('download-template');
                if (downloadBtn) {
                    downloadBtn.href = href;
                }
            }
            // Reset button
            var resetBtn = document.getElementById('reset-template');
            if (resetBtn) {
                resetBtn.onclick = function () {
                    form.reset();
                    form.style.display = '';
                    if (result) result.style.display = 'none';
                    updateBadge();
                };
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

        if (button) form.addEventListener('submit', handleSubmit);
        form.addEventListener('change', updateBadge);
    });
})();
