import { useEffect } from "react";

function Splashscreen() {

    const splashscreen = () => {
        // const firstVisit = localStorage.getItem('firstVisit');
        const splashscreen = document.querySelector('.intro');

        // if(firstVisit === null) {
        //     localStorage.setItem('firstVisit', 'true');
        //     splashscreen.classList.remove('mask');
        // } else {
        //     localStorage.setItem('firstVisit', 'false');
        //     splashscreen.classList.add('mask');
        // }

        let intro = document.querySelector('.intro');
        let logoSpan = document.querySelectorAll('.logo');

        setTimeout(() => {

            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.add('active');
                }, (idx + 1) * 400)
            });

            setTimeout(() => {

                logoSpan.forEach((span, idx) => {
                    setTimeout(() => {
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50)
                })

            }, 2000)

            setTimeout(() => {
                intro.style.top = '-100vh';
            }, 2300)
        }

        )
    };

    useEffect(() => {
        splashscreen();
    }, []);

    return (
        <>
            <div className="intro">
                <h1 className="logo-header">
                    <span className="logo name__firstpart">Re</span>
                    <span className="logo name__secondpart">born</span>
                </h1>
            </div>
        </>
    )
}

export default Splashscreen;