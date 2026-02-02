/**
 * Preference Management Module
 * Handles user preferences for language, IDE, and OS using localStorage
 * with auto-detection of OS on first visit
 */

const PreferenceManager = (() => {
    const STORAGE_KEYS = {
        language: 'recap-language',
        ide: 'recap-ide',
        os: 'recap-os'
    };

    const DEFAULTS = {
        language: 'r',
        ide: null,
        os: null // Will be auto-detected
    };

    // Callbacks registered via onPreferenceChange
    const listeners = {};

    /**
     * Detect user's OS from navigator.platform
     * Returns 'macOS' or 'Windows'
     */
    function detectOS() {
        const platform = navigator.platform.toLowerCase();
        if (platform.includes('mac')) return 'macOS';
        if (platform.includes('win')) return 'Windows';
        return 'Windows'; // Default fallback
    }

    /**
     * Initialize preferences on page load
     * Sets OS on first visit, restores other preferences from storage
     */
    function init() {
        // Initialize OS if not already set
        if (!localStorage.getItem(STORAGE_KEYS.os)) {
            const detectedOS = detectOS();
            localStorage.setItem(STORAGE_KEYS.os, detectedOS);
        }

        // Initialize language with default if not set
        if (!localStorage.getItem(STORAGE_KEYS.language)) {
            localStorage.setItem(STORAGE_KEYS.language, DEFAULTS.language);
        }
    }

    /**
     * Get a preference value
     * @param {string} category - 'language', 'ide', or 'os'
     * @returns {string|null} The preference value or null
     */
    function getPreference(category) {
        if (!STORAGE_KEYS[category]) return null;
        return localStorage.getItem(STORAGE_KEYS[category]);
    }

    /**
     * Set a preference and notify all listeners
     * @param {string} category - 'language', 'ide', or 'os'
     * @param {string} value - The value to set
     */
    function setPreference(category, value) {
        if (!STORAGE_KEYS[category]) return;
        localStorage.setItem(STORAGE_KEYS[category], value);
        notifyListeners(category, value);
    }

    /**
     * Register a callback for when a preference changes
     * @param {string} category - 'language', 'ide', or 'os'
     * @param {function} callback - Function to call with (category, value)
     */
    function onPreferenceChange(category, callback) {
        if (!listeners[category]) {
            listeners[category] = [];
        }
        listeners[category].push(callback);
    }

    /**
     * Notify all listeners of a preference change
     */
    function notifyListeners(category, value) {
        if (!listeners[category]) return;
        listeners[category].forEach(callback => {
            callback(value);
        });
    }

    // Initialize on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return {
        getPreference,
        setPreference,
        onPreferenceChange
    };
})();
