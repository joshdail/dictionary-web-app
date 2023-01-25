import React, { useState, useEffect } from "react"

import arrowImgUrl from "../../assets/icon-arrow-down.svg"

export default function FontSelect(props) {
  const body = document.querySelector("body")

  useEffect(() => {
    body.dataset.font = sessionStorage.getItem("dictionary_app_font") || "sans"
    setFont(body.dataset.font)
  }, [])

  const [font, setFont] = useState(body.dataset.font)

  function handleClick(e) {
    e.preventDefault()
    e.target.blur()
    document.querySelector(".font-select-modal").classList.toggle("hidden")
  }

  function handleFontChange(e, newFont) {
    e.preventDefault()
    e.target.blur()
    body.dataset.font = newFont
    sessionStorage.setItem("dictionary_app_font", newFont)
    setFont(newFont)
  }

  function displayName() {
    if (font === "sans") {
      return "Sans Serif"
    } else if (font === "serif") {
      return "Serif"
    } else if (font === "mono") {
      return "Mono"
    }
  }
  return (
    <>
      <button className="btn-font-select" onClick={handleClick}>
        {displayName()}
        <img className="img-arrow" src={arrowImgUrl} alt="Select font" />
        <ul className="font-select-modal hidden">
          <li
            className="font-option font-option-sans"
            tabindex="0"
            onClick={e => handleFontChange(e, "sans")}
          >
            Sans Serif
          </li>
          <li
            className="font-option font-option-serif"
            tabindex="0"
            onClick={e => handleFontChange(e, "serif")}
          >
            Serif
          </li>
          <li
            className="font-option font-option-mono"
            tabindex="0"
            onClick={e => handleFontChange(e, "mono")}
          >
            Mono
          </li>
        </ul>
      </button>
    </>
  )
}
