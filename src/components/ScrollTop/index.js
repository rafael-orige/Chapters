import React, { useState } from "react";

export default function ScrollTop(props) {

    const [scrolled, setScrolled] = useState(false)

    const toggleScrollTop = () => {
        const scroll = document.documentElement.scrollTop;
        if(scroll > 200) {
            setScrolled(true);
        } else if (scrolled <= 200) {
            setScrolled(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleScrollTop);

    return (
        <>
        {scrolled && 
        <div className="back-top--btn" onClick={scrollTop}>
            <div></div>
            <div></div>
        </div>
        }
        </>
    );
}