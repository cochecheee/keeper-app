import React from "react";

let date = new Date(); //current date
let currentYear = date.getFullYear()

function Footer() {
    return <footer><p>© Copyright {currentYear}</p></footer>
}

export default Footer