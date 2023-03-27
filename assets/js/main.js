// Fade in swiftly
document.body.className = 'hidden';
window.addEventListener('DOMContentLoaded', function () {

    function doStuff(callback) {
        // do all app scripts here...
        callback();
    }

    doStuff(function () {
        document.body.className = 'visible';
    });
});

// Sidebar menu responsive
const openMenu = () => {
    const menuWrapper = document.getElementById('sidebar-menu');
    menuWrapper.style.transform = 'translateX(0)';
    menuWrapper.classList.add('openMenu');
}

const closeMenu = () => {
    const menuWrapper = document.getElementById('sidebar-menu');
    menuWrapper.style.transform = 'translateX(-200%)';
    menuWrapper.classList.remove('openMenu');
}


// Toggle menu on large screen
const toggleMenu = () => {
    const menuWrapper = document.getElementById('sidebar-menu');

    if (menuWrapper.style.width == '300px') {
        menuWrapper.style.width = '68px';

    } else {
        menuWrapper.style.width = '300px';
    }
}