
// Multi-panel template form logic
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
        var backendUrl = (form.dataset && form.dataset.backend) ? form.dataset.backend : '';
        var panels = [
            document.getElementById('panel-1'),
            document.getElementById('panel-2'),
            document.getElementById('panel-3')
        ];
        var currentSelection = {};

        function showPanel(idx) {
            panels.forEach(function (panel, i) {
                if (panel) panel.style.display = (i === idx) ? '' : 'none';
            });
        }

        function resetForm() {
            form.reset();
            showPanel(0);
            ['recap-languages', 'recap-usecase', 'recap-latex', 'recap-project-name', 'recap-first-name', 'recap-last-name', 'recap-email', 'recap-institution', 'recap-website'].forEach(function (id) {
                var el = document.getElementById(id); if (el) el.textContent = '';
            });
            updateBadge();
        }


        // Navigation logic for new bottom bar
        var currentPanel = 0;
        var totalPanels = 3;
        function validatePanel(panelIdx) {
            if (panelIdx === 0) {
                var languages = qsa(form, 'input[name="languages"]:checked').map(function (i) { return i.value; });
                var usecase = form.querySelector('input[name="usecase"]:checked');
                var latex = getCheckedRadioValue(form, 'latex-packages', 'auto');
                if (!usecase) {
                    alert('Please select a use case.');
                    return false;
                }
                if (languages.indexOf('R') === -1) {
                    alert('Currently, downloads are available for the R template only. Please select R. Python and Stata are coming soon.');
                    return false;
                }
                currentSelection.languages = languages;
                currentSelection.usecase = usecase.value;
                currentSelection.latex = latex;
                return true;
            }
            if (panelIdx === 1) {
                var projectName = form.querySelector('#project-name').value.trim();
                var firstName = form.querySelector('#user-first-name').value.trim();
                var lastName = form.querySelector('#user-last-name').value.trim();
                var email = form.querySelector('#user-email').value.trim();
                var institution = form.querySelector('#user-institution').value.trim();
                var website = form.querySelector('#user-website').value.trim();
                if (!projectName) {
                    alert('Please enter a project name.');
                    return false;
                }
                if (!firstName || !lastName || !email) {
                    alert('Please enter your first name, last name, and email.');
                    return false;
                }
                currentSelection.project_name = projectName;
                currentSelection.first_name = firstName;
                currentSelection.last_name = lastName;
                currentSelection.email = email;
                currentSelection.institution = institution;
                currentSelection.website = website;
                // Fill recap fields
                document.getElementById('recap-languages').textContent = currentSelection.languages.join(', ');
                document.getElementById('recap-usecase').textContent = currentSelection.usecase;
                document.getElementById('recap-latex').textContent = currentSelection.latex;
                document.getElementById('recap-project-name').textContent = projectName;
                document.getElementById('recap-first-name').textContent = firstName;
                document.getElementById('recap-last-name').textContent = lastName;
                document.getElementById('recap-email').textContent = email;
                document.getElementById('recap-institution').textContent = institution;
                document.getElementById('recap-website').textContent = website;
                return true;
            }
            return true;
        }

        function updateNavButtons() {
            var backBtn = document.getElementById('back-button');
            var nextBtn = document.getElementById('next-button');
            if (backBtn) backBtn.style.visibility = currentPanel === 0 ? 'hidden' : 'visible';
            if (nextBtn) nextBtn.textContent = (currentPanel === totalPanels - 1) ? 'Finish' : 'Next';
            if (nextBtn) nextBtn.style.visibility = (currentPanel === totalPanels - 1) ? 'hidden' : 'visible';
        }

        function goToPanel(idx) {
            currentPanel = idx;
            showPanel(currentPanel);
            updateNavButtons();
            // Move navigation bar into the current panel's panel-header div
            var navBar = document.getElementById('form-navigation');
            var currentPanelEl = panels[currentPanel];
            if (navBar && currentPanelEl) {
                var panelHeader = currentPanelEl.querySelector('.panel-header');
                if (panelHeader) {
                    panelHeader.appendChild(navBar);
                }
            }
        }

        var backBtn = document.getElementById('back-button');
        var nextBtn = document.getElementById('next-button');
        if (backBtn) {
            backBtn.onclick = function () {
                if (currentPanel > 0) {
                    goToPanel(currentPanel - 1);
                }
            };
        }
        if (nextBtn) {
            nextBtn.onclick = function () {
                if (validatePanel(currentPanel)) {
                    if (currentPanel < totalPanels - 1) {
                        goToPanel(currentPanel + 1);
                    }
                }
            };
        }

        // Remove all reset button logic (no reset buttons)

        // Download button
        var downloadBtn = document.getElementById('download-template');
        if (downloadBtn) {
            downloadBtn.onclick = function (e) {
                if (e && e.preventDefault) e.preventDefault();
                generateAndDownload();
            };
        }

        // Create Public Repo button
        var publicRepoBtn = document.getElementById('create-public-repo-btn');
        if (publicRepoBtn) {
            publicRepoBtn.onclick = function (e) {
                if (e && e.preventDefault) e.preventDefault();
                createRepo('public');
            };
        }

        // Create Private Repo button
        var privateRepoBtn = document.getElementById('create-private-repo-btn');
        if (privateRepoBtn) {
            privateRepoBtn.onclick = function (e) {
                if (e && e.preventDefault) e.preventDefault();
                createRepo('private');
            };
        }

        // Badge update
        function updateBadge() {
            var latex = getCheckedRadioValue(form, 'latex-packages', 'auto');
            var label = 'LaTeX-' + latex;
            var src = 'https://img.shields.io/badge/' + encodeURIComponent(label) + '-008080?logo=latex&logoColor=white';
            var badges = qsa(document, '#badge-latex, #badge-latex-2, #badge-latex-3');
            badges.forEach(function (img) {
                img.src = src;
                img.alt = 'LaTeX ' + latex;
            });
        }
        form.addEventListener('change', updateBadge);

        // Download logic
        function toSlug(str) {
            return String(str || '')
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '');
        }

        // Stub for repo creation logic
        function createRepo(visibility) {
            if (!backendUrl) {
                alert('Backend URL is not configured.');
                return;
            }
            if (!currentSelection || !currentSelection.languages) {
                alert('Please complete the form first.');
                return;
            }
            // TODO: Implement actual repo creation logic here
            alert('Repo creation (' + visibility + ') is not yet implemented.');
        }
        function generateAndDownload() {
            if (!backendUrl) {
                alert('Backend URL is not configured.');
                return;
            }
            if (!currentSelection || !currentSelection.languages) {
                alert('Please complete the form first.');
                return;
            }
            var projectName = currentSelection.project_name || 'recap-data-project';
            var payload = {
                template_name: 'data',
                project_name: projectName,
                r: currentSelection.languages.indexOf('R') !== -1,
                r_version: '4.5.1',
                latex: currentSelection.latex,
                first_name: currentSelection.first_name,
                last_name: currentSelection.last_name,
                email: currentSelection.email,
                institution: currentSelection.institution
            };
            fetch(backendUrl.replace(/\/$/, '') + '/download', {
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

        // Start with panel 1 only
        goToPanel(0);
    });
})();
