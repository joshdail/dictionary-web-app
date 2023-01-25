import React, { useState } from "react"

export default function NotFoundPage(props) {
  return (
    <main className="not-found-page">
      <p className="emoji">&#128533;</p>
      <h1 className="header-not-found">{props.data.title}</h1>
      <p className="message-not-found">
        {props.data.message}&nbsp;{props.data.resolution}
      </p>
    </main>
  )
}
