import React from "react";

import Background from "../components/Background";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
        <Background>
            <Header page="search" />
            <section id="about">
                <div className="container">
                    <h1>About</h1>
                    <div>
                        <p>This website was created by Rafael Vargas as part of a selective process.</p>
                        <br/>
                        <p>All the images that you can find in this website are from <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a>.</p>
                        <br/>
                        <p>You can also check my <a href="https://github.com/rafael-orige" target="_blank" rel="noopener noreferrer">GitHub</a> if you want to know more about this project.</p>
                    </div>
                </div>
            </section>
            
        </Background>
        <Footer />
        </>
    );
}