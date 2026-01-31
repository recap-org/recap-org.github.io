document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('recap-form');
    const templateButtons = document.querySelectorAll('.template-card');
    const languageButtons = document.querySelectorAll('.language-btn:not(:disabled)');
    const submitBtn = document.getElementById('submitBtn');
    const buttonContainer = document.querySelector('.button-container');

    let selectedTemplate = null;
    let selectedLanguage = null;
    let validSelection = false;

    function updateForm() {
        if (selectedTemplate && selectedLanguage) {
            submitBtn.href = `https://github.com/recap-org/template-${selectedLanguage}-${selectedTemplate}`;
            buttonContainer.style.display = 'flex';
            if (!validSelection) {
                submitBtn.scrollIntoView({ behavior: 'smooth' });
            }
            validSelection = true;
        } else {
            buttonContainer.style.display = 'none';
        }
    }

    templateButtons.forEach(button => {
        button.addEventListener('click', function () {
            templateButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedTemplate = this.dataset.template;
            updateForm();
        });
    });

    languageButtons.forEach(button => {
        button.addEventListener('click', function () {
            languageButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedLanguage = this.dataset.language;
            updateForm();
        });
    });
});
