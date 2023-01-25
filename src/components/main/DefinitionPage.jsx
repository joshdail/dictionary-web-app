import React, { useState } from "react"
import DefintionEntry from "./DefinitionEntry"

export default function DefinitionPage(props) {
  function generateEntries() {
    return props.data.map(entry => {
      const id = Math.random()
      return (
        <DefintionEntry
          entry={entry}
          key={id}
          entryId={id}
          requestData={props.requestData}
        />
      )
    })
  }

  return <main className="definition-page">{generateEntries()}</main>
}
