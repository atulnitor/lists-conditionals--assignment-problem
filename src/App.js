import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharComponent from "./CharComponent/CharComponent"
import ValidationComponent from "./ValidationComponent/ValidationComponent"

class App extends Component {
  state = {
    text : ''
  };

 textHandler = (event) => {
    this.setState({text: event.target.value});
 } 
  
 deleteChar = (index) => {
  let text, textArr = this.state.text.split('');
  console.log(text)
  textArr.splice(index, 1);
  text = textArr.join('');
  this.setState({ text });
};


  render() {
    console.log('In render function.....')
    let charList;
    console.log(this.state.text.length)
    if(this.state.text.length > 0){
       console.log(charList)
      charList = this.state.text.split('');
      charList = charList.map((char, index) => {
          return <CharComponent key={char + index} letter={char} click={() => this.deleteChar(index)} />;
      })
    }
    
    return (
      <div className="App">

        <input type="text" value={this.state.text} onChange={this.textHandler}/>
            <h2>{this.state.text.length}</h2>
            <ValidationComponent textLength={this.state.text.length}/>
            {charList}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> 

        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
