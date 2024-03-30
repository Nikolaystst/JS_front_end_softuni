function attachGradientEvents() {
    let getHoverEl = document.getElementById('gradient');
    let getResultEl = document.getElementById('result');

    getHoverEl.addEventListener('mousemove', function (moove) {
        let getCurrentX = moove.offsetX;
        let maxWidth = moove.target.clientWidth;
        let final = Math.floor(getCurrentX / maxWidth * 100);

        getResultEl.textContent = `${final}%`
    })
}