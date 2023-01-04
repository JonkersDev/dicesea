document.querySelectorAll('.tile').forEach(tile=>{
    tile.innerHTML += `<path class="wave" d="m5.8071 6.11818.448678-.21319.54786.182661-.524474-.0540372z" fill="#80e5ff"/>
        <path class="wave" d="m6.83978 6.81626.316523-.14291.386493.122445-.369995-.0362234z" fill="#80e5ff"/>
        <path class="wave" d="m5.70704 7.15939.448678-.21319.54786.182661-.524474-.0540372z" fill="#80e5ff"/>`
    tile.addEventListener('click', ()=>{
        tile.classList.add('locked');
    })
})