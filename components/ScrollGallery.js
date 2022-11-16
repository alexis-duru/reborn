const ScrollGallery = () => {

    if (typeof window !== "undefined") {
        let images = [...document.querySelectorAll('.img')];
        let slider = document.querySelector('.slider');
        let sliderWidth;
        let imageWidth;
        let current = 0;
        let target = 0;
        let ease = .03;

    window.addEventListener('resize', init);

    images.forEach((img, idx) => {
        img.style.backgroundImage = `url(../../assets/img/chaises/${idx+1}.png)`
    })

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    function setTransform(el, transform) {
        el.style.transform = transform;
    }

    function init() {
        sliderWidth = slider.getBoundingClientRect().width;
        imageWidth = sliderWidth / images.length;
        document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
    }

    function animate() {
        current = parseFloat(lerp(current, target, ease)).toFixed(2);
        target = window.scrollY;
        setTransform(slider, `translateX(-${current}px)`)
        animateImages();
        requestAnimationFrame(animate);
    }

    function animateImages() {
        let ratio = current / imageWidth;
        let intersectionRatioValue;

        images.forEach((image, idx) => {
            intersectionRatioValue = ratio - (idx * 0.7);
            setTransform(image, `translateX(${intersectionRatioValue * 70}px)`)
        })
    }

    init();
    animate();

      }

    




    return (
        <>
            <section id="scrollGallery">
                <div className="container-title">
                    <h1><span className="first-title">Les</span><span className="second-title">chaises</span></h1>
                </div>
                <div className="slider">
                    <div className="slider-inner">
                        <div className="wrapper-item">
                        <h2 class="product-number">N°1</h2>
                            <div className="item">
                                <div className="wrapper">
                                    <div className="img"></div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-item">
                        <h2 class="product-number">N°2</h2>
                            <div className="item">
                                <div className="wrapper">
                                    <div className="img"></div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-item">
                        <h2 class="product-number">N°3</h2>
                            <div className="item">
                                <div className="wrapper">
                                    <div className="img"></div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-item">
                        <h2 class="product-number">N°4</h2>
                            <div className="item">
                                <div className="wrapper">
                                    <div className="img"></div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-item">
                        <h2 class="product-number">N°5</h2>
                            <div className="item">
                                <div className="wrapper">
                                    <div className="img"></div>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-item">
                        <h2 class="product-number">N°6</h2>
                            <div className="item">
                                <div className="wrapper">
                                    <div className="img"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default ScrollGallery;
