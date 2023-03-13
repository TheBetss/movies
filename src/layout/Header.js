import React from "react"


export default function Header() {
  return (
    <nav>
    <div class="header__nav">
      <a href="#" class="brand-logo">React</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Movies </a></li>
      </ul>
    </div>
  </nav>
  )
}