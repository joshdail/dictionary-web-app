import React, { useEffect } from "react"
import imgPlayUrl from "../../assets/icon-play.svg"
import imgPlayHoverUrl from "../../assets/icon-play-hover.svg"
import imgNewWindowUrl from "../../assets/icon-new-window.svg"

import DefinitionMeaning from "./DefinitionMeaning"

export default function DefintionEntry(props) {
  const context = new AudioContext()
  let audio

  function playAudio() {
    if (audio) {
      audio.play()
    }
  }

  useEffect(() => {
    const audioEntry = props.entry.phonetics.find(
      item => item.audio && item.audio !== ""
    )
    if (audioEntry == null) {
      document.getElementById(`btn-play-audio-${props.entryId}`).disabled = true
      return
    }
    audio = new Audio(audioEntry.audio)
  }, [])

  function btnHover() {
    if (
      document.getElementById(`btn-play-audio-${props.entryId}`).disabled ===
      true
    ) {
      return
    }
    document
      .getElementById(`img-play-icon-${props.entryId}`)
      .setAttribute("src", imgPlayHoverUrl)
  }

  function btnUnhover() {
    document
      .getElementById(`img-play-icon-${props.entryId}`)
      .setAttribute("src", imgPlayUrl)
  }

  function generateMeanings() {
    return props.entry.meanings.map(meaning => {
      const id = Math.random()
      return (
        <DefinitionMeaning
          data={meaning}
          key={id}
          entryId={id}
          requestData={props.requestData}
        />
      )
    })
  }

  return (
    <section className="section-definition">
      <div className="banner">
        <div className="banner-word-container">
          <h1 className="banner-word">{props.entry.word}</h1>
          <h2 className="banner-phonetic">{props.entry.phonetic}</h2>
        </div>
        <button
          type="button"
          className="btn-play-audio"
          id={`btn-play-audio-${props.entryId}`}
          aria-label="Play audio for word"
          onFocus={btnHover}
          onMouseEnter={btnHover}
          onBlur={btnUnhover}
          onMouseLeave={btnUnhover}
          onClick={playAudio}
        >
          <img
            className="img-play-icon"
            id={`img-play-icon-${props.entryId}`}
            src={imgPlayUrl}
            alt="play button"
          />
        </button>
      </div>
      {generateMeanings()}
      {props.entry.sourceUrls && props.entry.sourceUrls.length > 0 && (
        <div className="source-section">
          <div className="source-line">
            <h5 className="source-heading">Source</h5>
            <a
              className="source-url"
              href={props.entry.sourceUrls[0]}
              target="_blank"
            >
              {props.entry.sourceUrls[0]}
              <img
                className="img-source-link"
                src={imgNewWindowUrl}
                alt="Open source link in new window"
              />
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
