function toggleTheme() {
    const body = document.body;
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        sun.classList.add('hidden');
        moon.classList.remove('hidden');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        sun.classList.remove('hidden');
        moon.classList.add('hidden');
    }
}
