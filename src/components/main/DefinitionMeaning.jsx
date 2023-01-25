import React from "react"

export default function DefinitionMeaning(props) {
  function handleClick(e, query) {
    e.preventDefault()
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    props.requestData(query)
  }
  function generateSynonyms() {
    return props.data.synonyms.map(synonym => {
      return (
        <button
          type="button"
          className="synonym"
          onClick={e => handleClick(e, synonym)}
        >
          {synonym}
        </button>
      )
    })
  }

  function generateListItems() {
    return props.data.definitions.map(item => {
      if (item.example) {
        return (
          <li>
            {item.definition}
            <ul className="list-example">
              <li>{item.example}</li>
            </ul>
          </li>
        )
      } else {
        return <li>{item.definition}</li>
      }
    })
  }
  return (
    <section className="definition-meaning">
      <div className="hr-container">
        <h3 className="part-of-speech">{props.data.partOfSpeech}</h3>
        <div className="hr"></div>
      </div>
      <h4 className="list-header">Meaning</h4>
      <ul className="list-meaning">{generateListItems()}</ul>
      {props.data.synonyms && props.data.synonyms.length > 0 && (
        <div className="synonyms-section">
          <h4 className="synonyms-header">Synonyms</h4>
          <div className="synonyms-list">{generateSynonyms()}</div>
        </div>
      )}
    </section>
  )
}
