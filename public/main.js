document.addEventListener('DOMContentLoaded', () => {
    const topMenu = document.getElementById('ct-top-menu');
    const toggleTopMenuIcon = document.getElementById('ct-toggle-top-menu-icon');

    if (!topMenu || !toggleTopMenuIcon) {
        console.error('Element(s) not found:', { topMenu, toggleTopMenuIcon });
        return;
    }

    document.addEventListener('click', (e) => {
        if (toggleTopMenuIcon.contains(e.target)) {
            // Click to Toggle top menu icon
            topMenu.classList.toggle('ct-topmenu-expanded');
            topMenu.classList.toggle('hidden');
        } else {
            // Click Outside from Toggle top menu icon
            if (topMenu.classList.contains('ct-topmenu-expanded')) {
                topMenu.classList.remove('ct-topmenu-expanded');
                topMenu.classList.add('hidden');
            }
        }
    });
});