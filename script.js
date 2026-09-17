const exe = document.querySelector('.game');


function showpage(pageId) {
    let pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
};

exe.addEventListener('click', () => {
    window.open(
        "https://orionfoxgames.github.io/.exe/", "_blank");
});
