(function(window, document){

    const
        triggerHeight = 100,
        backToTop = function () {
            const backToTop = document.createElementNS("http://www.w3.org/2000/svg", "svg");        
            backToTop.innerHTML = `
                <path id="Path_213" data-name="Path 213" d="M16,1A15,15,0,1,0,31,16,15.007,15.007,0,0,0,16,1Zm0,2A13,13,0,1,1,3,16,13.006,13.006,0,0,1,16,3Z" transform="translate(-1 -1)" fill-rule="evenodd"/>
                <path id="Path_214" data-name="Path 214" d="M10.707,19.707,16,14.414l5.293,5.293a1,1,0,1,0,1.414-1.414l-6-6a1,1,0,0,0-1.414,0l-6,6a1,1,0,0,0,1.414,1.414Z" transform="translate(-1 -1)" fill-rule="evenodd"/>
            `;
            backToTop.style.width = "30px";
            backToTop.style.height = "30px";
            backToTop.style.display = 'block';
            backToTop.style.position = 'fixed';
            backToTop.style.zIndex = '10';
            backToTop.style.bottom = '3vh';
            backToTop.style.right = '5vw';
            backToTop.style.cursor = 'pointer';
            backToTop.style.transition = 'opacity 0.3s';
            backToTop.onclick = ( ev ) => { window.scrollTo({top: 0, behavior: 'smooth'}); }
            backToTop.nascondi = function () { backToTop.style.opacity = 0; };
            backToTop.mostra = function () { backToTop.style.opacity = 100; };
            backToTop.nascondi();
            return backToTop;
        }();



    document.addEventListener("DOMContentLoaded", (event) => {
        document.body.appendChild(backToTop);
    });
    
    window.addEventListener("scroll", ( ev ) => {
        if (document.body.scrollTop > triggerHeight || document.documentElement.scrollTop > triggerHeight) {
            backToTop.mostra();
        } else {
            backToTop.nascondi();
        }
    });


})(window, document);