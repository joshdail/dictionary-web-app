import React, { useState } from "react"

import searchImgUrl from "../../assets/icon-search.svg"

export default function SearchBar(props) {
  const errorMessage = "Whoops, can't be empty..."
  const [query, setQuery] = useState("")

  function updateQuery(e) {
    removeError()
    const { value } = e.target
    setQuery(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (query === "" || query == null) {
      addError()
      return
    }
    props.requestData(query)
  }

  function addError() {
    document.getElementById("search-bar").classList.add("error")
    document.getElementById("error-message").innerText = errorMessage
  }

  function removeError() {
    document.getElementById("search-bar").classList.remove("error")
    document.getElementById("error-message").innerText = ""
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="search"
        className="search-bar"
        id="search-bar"
        placeholder="Search for any word..."
        name="query"
        value={query}
        onChange={e => updateQuery(e)}
      ></input>
      <span></span>
      <p className="error-message" id="error-message"></p>
    </form>
  )
}
