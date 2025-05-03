import React from "react"
import { useState } from "react";
import "./App.css"

function App(){
  return (
    <div id="quote-box" className="d-flex flex-column justify-content-center align-items-center">
      <RandomQuote />
    </div>
  )
}

class RandomQuote extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      quote: "Our lives begin to end the day we become silent about things that matter.",
      author: "- Unknown"
    }
  }

  render(){
    const imgpath = "./media/double-quote-serif-left-16.png"

    return(
      <>
        <div id="quote-container">
          <i id="quote" className="fa fa-quote-left"></i>
          <span id="text">{this.state.quote}</span>
        </div>
        <p id="author" className="align-self-end">{this.state.author}</p>
        
        <div id="buttons-container" className="d-flex justify-content-between w-100">
          <SocialButtons/>
          <NewQuote/>
        </div>
      </>
    )
  }
}

class NewQuote extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
        <button id="new-quote" className="align-self-end">New quote</button>
      </>
    )
  }
}

class SocialButtons extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <>
        <button id="twitter">
          <i class="fa-brands fa-x-twitter"></i>
        </button>
      </>
    )
  }
}

export default App