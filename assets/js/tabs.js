document.addEventListener('DOMContentLoaded', () => {
    // Set up click handlers for all tab buttons
    document.querySelectorAll('.tab-buttons button').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const value = btn.dataset.value;
            if (category && value) {
                // Update preference and sync all tabs
                PreferenceManager.setPreference(category, value);
            }
        });
    });

    // Listen for preference changes and sync all tabs
    ['language', 'ide', 'os'].forEach(category => {
        PreferenceManager.onPreferenceChange(category, (value) => {
            syncTabsForCategory(category, value);
        });
    });

    // Restore saved preferences on page load
    ['language', 'ide', 'os'].forEach(category => {
        const savedValue = PreferenceManager.getPreference(category);
        if (savedValue) {
            syncTabsForCategory(category, savedValue);
        }
    });
});

/**
 * Sync all tabs for a given category to the specified value
 * Activates matching buttons and panels across all containers
 */
function syncTabsForCategory(category, value) {
    // Find and activate all matching buttons
    document.querySelectorAll(`.tab-buttons button[data-category="${category}"][data-value="${value}"]`).forEach(btn => {
        const container = btn.closest('.tab-container');
        if (container) {
            // Deactivate other buttons in this container for this category
            container.querySelectorAll(`.tab-buttons button[data-category="${category}"]`).forEach(b => {
                b.classList.remove('active');
            });
            // Activate the matching button
            btn.classList.add('active');

            // Deactivate other panels for this category in this container
            container.querySelectorAll(`.tab-panel[data-category="${category}"]`).forEach(p => {
                p.classList.remove('active');
            });

            // Activate the matching panel
            const panelId = `panel-${category}-${value}`;
            const panel = container.querySelector(`#${panelId}`);
            if (panel) {
                panel.classList.add('active');
            }
        }
    });
}