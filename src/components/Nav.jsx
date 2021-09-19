import React from 'react' 
import logo from "../images/logo.svg"
import arrow from "../images/arrow.svg"
import Items from './Items';
export default function Nav({list , setList}) {
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
                    <Items list={list} setList={setList} />
                    </ul>
                </section>
            </ul>
        </nav>
    )
}