var per = 0;
var line = document.getElementsByClassName('line')[0];
var pageloading = document.getElementsByClassName('pageloading')[0];
var timer = setInterval(function () {
    line.style.width = per + '%';
    per += 1;
    if (per > 100) {
        pageloading.classList.add('complete');
        clearInterval(timer);
    }
}, 30);

