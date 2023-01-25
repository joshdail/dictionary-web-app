import { useState, useEffect } from "react"
import Header from "./components/header/Header"
import MainPage from "./components/main/MainPage"
import Attribution from "./components/footer/Attribution"

function App() {
  const [data, setData] = useState([])
  const queryUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/"

  function requestData(query) {
    fetch(`${queryUrl}${query}`)
      .then(res => res.json())
      .then(jsonData => {
        setData(Array.isArray(jsonData) ? [...jsonData] : [{ ...jsonData }])
      })
  }
  return (
    <>
      <Header requestData={requestData} />
      <MainPage data={data} requestData={requestData} />
      <Attribution />
    </>
  )
}

export default App
