import React from 'react';
import CalcTitle from './components/CalcTitle';
import OutputScreen from './components/OutputScreen';
import Buttons from './components/Buttons';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      question: '',
      answer: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    const value = event.target.value;
    switch(value) {
      case '=': {
        if(this.state.question!== '') {
          try {
            var answer = eval(this.state.question);
          }
          catch(error) {
            this.setState({answer: "Math Error!"});
          }
          if(this.state.answer === undefined) {
            this.setState({answer: "Math Error!"});
          }
          else {
            this.setState({answer: answer, question: ''});
          }
        }
        break;
      }
      case 'Clear': {
        this.setState({answer: '', question: ''});
        break;
      }
      case 'Delete': {
        var val = this.state.question;
        val = val.substr(0, val.length-1);
        this.setState({question: val});
        break;
      }
      default: {
        this.setState({question: this.state.question += value});
        break;
      }
    }
  }

  render() {
    return (
      <div className="App">
        <CalcTitle title="Calculator App" />
        <OutputScreen value={this.state.question} />
        <OutputScreen value={this.state.answer} />
        <div className="button-row">
          <Buttons value="Clear" handleClick={this.handleClick} />
          <Buttons value="Delete" handleClick={this.handleClick} />
          <Buttons value="*" handleClick={this.handleClick} />
          <Buttons value="/" handleClick={this.handleClick} />
        </div>
        <div className="button-row">
          <Buttons value="1" handleClick={this.handleClick} />
          <Buttons value="2" handleClick={this.handleClick} />
          <Buttons value="3" handleClick={this.handleClick} />
          <Buttons value="+" handleClick={this.handleClick} />
        </div>
        <div className="button-row">
          <Buttons value="4" handleClick={this.handleClick} />
          <Buttons value="5" handleClick={this.handleClick} />
          <Buttons value="6" handleClick={this.handleClick} />
          <Buttons value="-" handleClick={this.handleClick} />
        </div>
        <div className="button-row">
          <Buttons value="7" handleClick={this.handleClick} />
          <Buttons value="8" handleClick={this.handleClick} />
          <Buttons value="9" handleClick={this.handleClick} />
          <Buttons value="0" handleClick={this.handleClick} />
        </div>
        <div className="button-row">
          <Buttons value="." handleClick={this.handleClick} />
          <Buttons value="=" handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default App;
