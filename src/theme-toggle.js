document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const currentTheme = localStorage.getItem('theme');

    // Aplica el tema guardado en localStorage
    if (currentTheme === 'dark') {
        html.classList.add('dark');
        themeToggleBtn.textContent = 'Modo Claro';
    } else {
        html.classList.remove('dark');
        themeToggleBtn.textContent = 'Modo Oscuro';
    }

    themeToggleBtn.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            themeToggleBtn.textContent = 'Modo Claro';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = 'Modo Oscuro';
            localStorage.setItem('theme', 'light');
        }
    });
});
