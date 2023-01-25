import React, { useState, useEffect } from "react"

import moonImgUrl from "../../assets/icon-moon.svg"

export default function DisplayToggle(props) {
  const body = document.querySelector("body")

  useEffect(() => {
    const defaultMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light"
    body.dataset.display =
      sessionStorage.getItem("dictionary_app_display_mode") || defaultMode
  }, [])

  const [displayMode, setDisplayMode] = useState(body.dataset.display)

  function handleClick(e) {
    e.preventDefault()
    e.target.blur()
    setDisplayMode(prevDisplayMode => {
      const newDisplayMode = prevDisplayMode === "dark" ? "light" : "dark"
      body.dataset.display = newDisplayMode
      sessionStorage.setItem("dictionary_app_display_mode", newDisplayMode)
      return newDisplayMode
    })
  }
  return (
    <div className="display-toggle">
      <button
        type="button"
        className="btn-display-toggle"
        onClick={e => {
          handleClick(e)
        }}
        aria-label={
          displayMode === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
      />
      <img className="img-moon" src={moonImgUrl} alt="crescent moon" />
    </div>
  )
}
