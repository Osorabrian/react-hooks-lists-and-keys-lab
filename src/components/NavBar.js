import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const item = links.map((navItem,index) => {
    return <a href={`#${navItem}`} key={index}>{navItem}</a>
  })

  return <nav>{item}</nav>;
}

export default NavBar;
