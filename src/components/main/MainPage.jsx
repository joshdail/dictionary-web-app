import React, { useState } from "react"
import DefinitionPage from "./DefinitionPage"
import NotFoundPage from "./NotFoundPage"

export default function MainPage(props) {
  function checkForSearchErrors() {
    // Only the "not found" return object has a title property
    return props.data && props.data[0] && props.data[0].title
  }

  return (
    <>
      {checkForSearchErrors() ? (
        // In case of an error, there is only one item,
        // so no need to pass it as an array
        <NotFoundPage data={props.data[0]} />
      ) : (
        <DefinitionPage data={props.data} requestData={props.requestData} />
      )}
    </>
  )
}
