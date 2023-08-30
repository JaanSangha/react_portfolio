import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
        <div>
        <p>Copywrite ⓒ Jaan Sangha {year}</p>
        </div>
        </footer>
    );

}

export default Footer;