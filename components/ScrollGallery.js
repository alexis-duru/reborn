import Link from "next/link";
import fleche from '../public/assets/img/icones/fleche.svg';
import Image from 'next/image'

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
            img.style.backgroundImage = `url(../../assets/img/chaises/${idx + 1}.png)`
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

    if (typeof window !== "undefined") {
        window.onscroll = function () { myFunction() };

        function myFunction() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
        }
    }


    return (
        <>
            <section id="scrollGallery">
                <div className="container-title">
                    <h1><span className="first-title">Les</span><span className="second-title">chaises</span></h1>
                </div>
                <div className="slider">
                    <div className="slider-inner">
                        <Image src={fleche} alt="fleche" className="second-image" />
                        <div className="wrapper-item">
                            <h2 className="product-number">N°1</h2>
                            <div className="wrapper-description">
                                <h3 className="product-name">Chaise 1</h3>
                                <p className="product-material">Pied de metal</p>
                            </div>
                            <Link href="/">
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="wrapper-item">
                            <h2 className="product-number">N°2</h2>
                            <div className="wrapper-description">
                                <h3 className="product-name">Chaise 2</h3>
                                <p className="product-material">Pied de bois</p>
                            </div>
                            <Link href="/">
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="wrapper-item">
                            <h2 className="product-number">N°3</h2>
                            <div className="wrapper-description">
                                <h3 className="product-name">Chaise 3</h3>
                                <p className="product-material">Pied en plastique</p>
                            </div>
                            <Link href="/">
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="wrapper-item">
                            <h2 className="product-number">N°4</h2>
                            <div className="wrapper-description">
                                <h3 className="product-name">Chaise 4</h3>
                                <p className="product-material">Pied en bois</p>
                            </div>
                            <Link href="/">
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="wrapper-item">
                            <h2 className="product-number">N°5</h2>
                            <div className="wrapper-description">
                                <h3 className="product-name">Chaise 5</h3>
                                <p className="product-material">Pied en plastique</p>
                            </div>
                            <Link href="/">
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="wrapper-item">
                            <h2 className="product-number">N°6</h2>
                            <div className="wrapper-description">
                                <h3 className="product-name">Chaise 6</h3>
                                <p className="product-material">Pied en metal</p>
                            </div>
                            <Link href="/">
                                <div className="item">
                                    <div className="wrapper">
                                        <div className="img"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>
            </section>
        </>
    )

}

export default ScrollGallery;
