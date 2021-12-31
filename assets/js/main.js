// ====================== PRELOADER ========================
window.onload = function Preloader() {
    var preloader = document.getElementById("preloader");
    var loader = document.getElementById("loader");
    var op = 1;

    if(preloader || loader) {
        setTimeout(() => {
            setInterval(() => {
                if (op <= 0.1) {
                    clearInterval(this);
                    preloader.style.display = 'none';
                }

                preloader.style.opacity = op;
                preloader.style.filter = 'alpha(opacity=' + op * 100 + ")";
                
                loader.style.opacity = op;
                loader.style.filter = 'alpha(opacity=' + op * 100 + ")";

                op -= op * 0.1;

            }, 50);

            // ====================== SCROLL REVEAL ========================
            const scrollReveal = ScrollReveal({
                origin: 'top',
                distance: '50px',
                duration: 750,
                reset: false
            });
            scrollReveal.reveal(
                `.flogin__left .flogin__left__content, .flogin__right .flogin__right__content,
                 .fanimation .fheader, .fanimation .f-navigation,
                 .fanimation .f-actions, .fanimation .f-table
                 `
                );
        }, 3000);
    }
}

