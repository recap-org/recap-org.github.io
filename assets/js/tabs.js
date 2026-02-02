document.querySelectorAll('.tab-buttons button').forEach(btn => {
    btn.addEventListener('click', () => {
        // Find the parent tab container
        const container = btn.closest('.tab-container');

        // Remove active classes only within this container
        container.querySelectorAll('.tab-buttons button').forEach(b => b.classList.remove('active'));
        container.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

        // Activate clicked tab + corresponding content
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});