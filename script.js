
window.onload = function () {
    alert("Welcome to my website, Miss Tishaa ! Are you ready to explore my words of inspiration ? NOTE : Please answer after reading and thinking carefully.");
    document.querySelector('.proposal-content').style.display = 'block';
};

document.getElementById('btnNo').addEventListener('mouseover', function (e) {
    let x = Math.random() * (window.innerWidth - this.offsetWidth);
    let y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = 'absolute';
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.getElementById('btnNo').addEventListener('click', function () {
    this.textContent = 'Absolutely';
    this.classList.remove('btn-no');
    this.classList.add('btn-yes');
    this.setAttribute('data-bs-toggle', 'modal');
    this.setAttribute('data-bs-target', '#celebrationModal');
});