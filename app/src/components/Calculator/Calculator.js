import React, { Component } from 'react'
import calculatorImg from '../../calculator.png'

class Calculator extends Component {
    constructor () {
        super()
        this.state = {
            valueA: null,
            operator: null,
            valueB: null
        }
    }

    onNumberClick = (num) => {
        if (this.state.operator && this.state.valueA) {
            this.setState({ valueB: this.returnConcatenatedValue(this.state.valueB, num)})
        } else {
        this.setState({ valueA: this.returnConcatenatedValue(this.state.valueA, num)})
        }
    }

    returnConcatenatedValue = (oldVal, num) => {
        if (!oldVal) {
            return num
        } else {
            let valAString = oldVal.toString()
            return valAString + num        
        }
    }

    doCalulation = () => {
        const aAsNum = Number(this.state.valueA)
        const bAsNum = Number(this.state.valueB)

        if (this.state.operator === '+') {
            return aAsNum + bAsNum
        } else if (this.state.operator === '-') {
            return aAsNum - bAsNum
        } else if (this.state.operator === '*') {
            return aAsNum * bAsNum
        } else if (this.state.operator === '/') {
            return aAsNum / bAsNum
        } else if (this.state.operator === '=') {
            return aAsNum
        }
    }

    onOperatorClick = (operator) => {
        if (this.state.operator) {
            const result = this.doCalulation()
            this.setState({
                valueA: result,
                valueB: null,
                operator: operator
            })
        } else {
            this.setState({ operator: operator})
        }
        
    }

    onClearClick = () => {
        this.setState({
            valueA: null,
            valueB: null,
            operator: null
        })
    }

    render () {
        return (
            <div id="calculator-container">
              <input id="header-input"/>
              <h1 id="header"> Calculator </h1>
              <img className="remove-highlight" src={calculatorImg} alt="calculator" />
              <div id="calculator-mask" className="remove-highlight">
                <div className="output">
                  <span className="total">{this.state.operator && this.state.valueB ? this.state.valueB : this.state.valueA || 0}</span>
                </div>
          
                <div onClick={this.onClearClick} className="btn clear"></div>
          
                <div onClick={() => this.onNumberClick(0)} className="btn zero"></div>
                <div onClick={() => this.onNumberClick(1) } className="btn one"></div>
                <div onClick={() => this.onNumberClick(2) } className="btn two"></div>
                <div onClick={() => this.onNumberClick(3) } className="btn three"></div>
                <div onClick={() => this.onNumberClick(4) } className="btn four"></div>
                <div onClick={() => this.onNumberClick(5) } className="btn five"></div>
                <div onClick={() => this.onNumberClick(6) } className="btn six"></div>
                <div onClick={() => this.onNumberClick(7) } className="btn seven"></div>
                <div onClick={() => this.onNumberClick(8) } className="btn eight"></div>
                <div onClick={() => this.onNumberClick(9) } className="btn nine"></div>
          
                <div onClick={() => this.onOperatorClick('=')} className="btn equal"></div>
                <div onClick={() => this.onOperatorClick('*')} className="btn multiply"></div>
                <div onClick={() => this.onOperatorClick('/')} className="btn divide"></div>
                <div onClick={() => this.onOperatorClick('-')} className="btn subtract"></div>
                <div onClick={() => this.onOperatorClick('+')} className="btn add"></div>
              </div>
            </div>
          ) 
    }
}

export default Calculator