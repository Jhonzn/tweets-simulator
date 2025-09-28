import React from "react";
import "./Header.scss";
import TwiterLogo from "../../assets/img/logo_twiter.png";

export default function Header(){

    return (
        <div className="header">

            <img src={TwiterLogo} alt="Tweets Simulator"/>
            <h1>Tweets Simulator</h1>

        </div>
    )
    
}