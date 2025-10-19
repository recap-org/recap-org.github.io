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
        var backendUrl = (form.dataset && form.dataset.backend) ? form.dataset.backend : '';
        var currentSelection = null;

        function toSlug(str) {
            return String(str || '')
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
        }

        function generateAndDownload() {
            if (!backendUrl) {
                alert('Backend URL is not configured.');
                return;
            }
            if (!currentSelection) {
                alert('Please select options and submit the form first.');
                return;
            }
            var projectName = window.prompt('Project name for your template:', 'recap-data-project');
            if (!projectName) return;

            // Build payload based on current selection
            var payload = {
                template_name: 'data',
                project_name: projectName,
                r: currentSelection.languages.indexOf('R') !== -1,
                r_version: '4.5.1',
                latex: currentSelection.latex
                // Optional fields like first_name, last_name, email, institution can be added later
            };

            fetch(backendUrl.replace(/\/$/, '') + '/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/zip'
                },
                body: JSON.stringify(payload)
            }).then(function (res) {
                if (!res.ok) throw new Error('Generation failed: ' + res.status);
                return res.blob();
            }).then(function (blob) {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                var name = toSlug(projectName) || 'recap-template';
                a.href = url;
                a.download = name + '.zip';
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            }).catch(function (err) {
                console.error(err);
                alert('Could not generate template. Please try again later.');
            });
        }

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
                // Store selection for backend generation
                currentSelection = { languages: languages, usecase: usecase.value, latex: latex };
                // Wire download button to generate
                var downloadBtn = document.getElementById('download-template');
                if (downloadBtn) {
                    downloadBtn.onclick = function (e) {
                        if (e && e.preventDefault) e.preventDefault();
                        generateAndDownload();
                    };
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
            var latex = getCheckedRadioValue(form, 'latex-packages', 'auto');
            var label = 'LaTeX-' + latex;
            var src = 'https://img.shields.io/badge/' + encodeURIComponent(label) + '-008080?logo=latex&logoColor=white';
            var badges = qsa(document, '#badge-latex, #badge-latex-result');
            badges.forEach(function (img) {
                img.src = src;
                img.alt = 'LaTeX ' + latex;
            });
        }

        form.addEventListener('submit', handleSubmit);
        form.addEventListener('change', updateBadge);
    });
})();
