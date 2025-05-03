import React from "react"
import { useState } from "react";
import "./App.css"

function App() {
  return (
    <div id="quote-box" className="d-flex flex-column justify-content-center align-items-center">
      <RandomQuote />
    </div>
  )
}

class RandomQuote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: "",
      author: ""
    }
  }
  async componentDidMount() {
    const data = await getQuote();
    if (data) {
      this.setState({
        quote: data.text,
        author: data.author
      });
    }
  }

render() {
  const imgpath = "./media/double-quote-serif-left-16.png"

  return (
    <>
      <div id="quote-container">
        <i id="quote" className="fa fa-quote-left"></i>
        <span id="text">{this.state.quote}</span>
      </div>
      <p id="author" className="align-self-end">{this.state.author}</p>

      <div id="buttons-container" className="d-flex justify-content-between w-100">
        <SocialButtons />
        <NewQuote onNewQuote={this.componentDidMount.bind(this)}/>
      </div>
    </>
  )
}
}

class NewQuote extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <button id="new-quote" className="align-self-end" onClick={this.props.onNewQuote}>New quote</button>
      </>
    )
  }
}

class SocialButtons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <button id="tweet-quote">
          <a target="_blank" href={"https://twitter.com/intent/tweet?" + RandomQuote.quote}>
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </button>
      </>
    )
  }
}

async function getQuote() {
  try {
    const response = await fetch("https://thequoteshub.com/api/random-quote", {
      method: "GET",
      mode: "cors",
      cache: "no-cache"
    });

    if (!response.ok) {
      throw new Error("Error al obtener la cita");
    }

    const data = await response.json();
    return {
      text: data.text,
      author: data.author
    };
  } catch (error) {
    console.error("Error al hacer fetch de la cita:", error);
    return null;
  }
}


export default App