window.onload = function () {
    const parallax = document.querySelector('.parallax');

    if (parallax) {
        const text = document.querySelector('.parallax-text'),
            background = document.querySelector('.parallax-background'),
            uncle = document.querySelector('.parallax-uncle'),
            fish1 = document.querySelector('.parallax-fish1'),
            fish2 = document.querySelector('.parallax-fish2');
        
        
        
        const forBackground = -35,
            forText = -15,
            forUncle = -10,
            forFish1 = 40,
            forFish2 = -20;


        const speed = 0.1

        let positionX = 0, positionY = 0
        let coordXprocent = 0, coordYprocent = 0

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX
            const distY = coordYprocent - positionY

            positionX = positionX + (distX * speed)
            positionY = positionY + (distY * speed)
            
        

            text.style.cssText = `transform: translate(${positionX / forText}%, ${positionY / forText}%);`
            background.style.cssText = `transform: translate(${positionX / forBackground}%, ${positionY / forBackground}%);`
            uncle.style.cssText = `transform: translate(${positionX / forUncle}%, ${positionY / forUncle}%);`
            fish1.style.cssText = `transform: translate(${positionX / forFish1}%, ${positionY / forFish1}%);`
            fish2.style.cssText = `transform: translate(${positionX / forFish2}%, ${positionY / forFish2}%);`

            requestAnimationFrame(setMouseParallaxStyle)
        }
        setMouseParallaxStyle()
    
        parallax.addEventListener("mousemove", function (e) {
            const parallaxWidth = parallax.offsetWidth
            const parallaxHeight = parallax.offsetHeight

            const coordX = e.pageX - parallaxWidth / 2
            const coordY = e.pageY - parallaxHeight / 2

            coordXprocent = coordX / parallaxWidth * 100
            coordYprocent = coordY / parallaxHeight * 100

        })
    }
}
