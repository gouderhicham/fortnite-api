import React from 'react' 
import logo from "../images/logo.svg"
import arrow from "../images/arrow.svg"
export default function Nav() {
    console.log(arrow);
    return (
        <nav>
            <div className="cover"><div className="line"></div></div>
            <a className = "logo" href="/"><img src={logo} /></a>
            <ul>
                <a href="/" className = "a-link">Home</a>
                <a href="/" className = "a-link">Skins</a>
                <a href="/" className = "a-link">Emotes</a>
                <section className = "list">
                <a className = "a-link" id="arrow-link">New items <img className ="arrow" src={arrow}/></a>
                    <ul>
                       <a href="">fick you</a>
                       <a href="">fick you</a>
                       <a href="">fick you</a>
                       <a href="">fick you</a>
                       <a href="">fick you</a>
                       <a href="">fick you</a>
                    </ul>
                </section>
            </ul>
        </nav>
    )
}