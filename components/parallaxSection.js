import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react";

const parallaxSection = ({ title, text, buttonText, buttonLink, imgRef1, imgAlt1, imgRef2, imgAlt2, side = 'right' }) => {
    function parallax() {
        const section = document.querySelector('.parallaxSection');
        const top = section.getBoundingClientRect().top;
        const bottom = section.getBoundingClientRect().bottom;
        const img = document.querySelector('.second-image');
        window.addEventListener('scroll', () => {
            let scroll = window.scrollY;
            if (scroll - top > 0 && bottom - scroll > 0) {
                img.style.top = (scroll - top) * 0.2 + 140 + 'px';
                img.style.right = (scroll - top) * 0.05 + 170 + 'px';
            }
        })
    }
    useEffect(() => {
        parallax();
    }, [])


    return (
        <>
            <section className="parallaxSection {side}">
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <Link href={buttonLink} class="button">{buttonText}</Link>

                </div>
                <Image src={imgRef1} alt={imgAlt1} class="first-image" />
                <Image src={imgRef2} alt={imgAlt2} class="second-image" />
            </section>
        </>
    )
}

export default parallaxSection;