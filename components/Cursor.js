import { useEffect } from "react";

export default function Cursor() {

    const cursor = () => {
        let squareMove2 = document.querySelector('.cursor');


    let x, y;

    window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY
    })

    function updateProgressCursor() {

    // squareMove.style.transform = `translate(${x}px, ${y}px)`
    squareMove2.style.transform = `translate(${x}px, ${y}px)`
    requestAnimationFrame(updateProgressCursor)
    }

    function getScrollPercentage() {
    return ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
    }

    updateProgressCursor();

    }

    useEffect(() => {
        cursor();
    }, [])

    

    return (
        <>
             <div className="cursor"></div>
        </>
    )
};