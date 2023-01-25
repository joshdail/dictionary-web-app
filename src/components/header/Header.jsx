import React, { useState, useEffect } from "react"

import DisplayToggle from "./DisplayToggle"
import FontSelect from "./FontSelect"
import SearchBar from "./SearchBar"

import logoImgUrl from "../../assets/logo.svg"

export default function Header(props) {
  return (
    <header className="header">
      <div className="control-bar">
        <img
          className="img-logo"
          src={logoImgUrl}
          alt="dictionary app logo"
        ></img>
        <div className="control-panel">
          <FontSelect />
          <DisplayToggle />
        </div>
      </div>
      <SearchBar requestData={props.requestData} />
    </header>
  )
}
