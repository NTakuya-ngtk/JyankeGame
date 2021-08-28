import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

class JyankeGamePage extends Component {
  constructor(props){
    super(props)
    this.state = {human: null, computer: null}
  }

  pon(human_hand) {
    const computer_hand = Math.floor(Math.random()*3)
    this.setState({human: human_hand, computer: computer_hand})
  }

  judge() {
    if(this.state.human == null){
      return null
    } else {
      return (this.state.computer - this.state.human +3)%3
    }
  }

  render(){
    return(
      <div>
        <h1>じゃんけん　ぽん！</h1>
        <JankenBox actionPon={(te) => this.pon(te)} />
        <ScoreBox human = {this.state.human} computer={this.state.computer} judgement={this.judge()} />
      </div>
    )
  }
}

const JyankenBox = (props) => {
  return (
    <div>
      <button onClick={() => props.actionPon(0)}>グー</button>
      <button onClick={() => props.actionPon(1)}>チョキ</button>
      <button onClick={() => props.actionPon(2)}>パー</button>

    </div>
  )
}

JankenBox.propTypes = {
  actionPon: PropTypes.func
}
