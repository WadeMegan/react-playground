import React, {Component} from 'react'

class RouletteGun extends React.Component {
    static defaultProps = {
        bulletInChamber:8
    }

    constructor(props){
        super(props)
        this.state = {
            chamber:null,
            spinningTheChamber:false
        }
    }
    onButtonClick = () => {
        const newChamber= Math.ceil(Math.random() * 8)
        this.setState({spinningTheChamber:true})
        this.timeout = setTimeout(() => {
            const newChamber= Math.ceil(Math.random() * 8)
            console.log(newChamber)
            this.setState({
                chamber:newChamber,
                spinningTheChamber:false
              })
        },2000)
    }
    componentWillUnmount(){
        clearTimeout(this.timeout)
    }
    renderDisplay(){
        const{chamber}=this.state
        const{spinningTheChamber}=this.state
        if (spinningTheChamber==true){
            return 'spinning the chamber and pulling the trigger! ....'
        }
        else if(chamber==this.props.bulletInChamber){
            return 'BANG!!!!'
        }
        else{
            return 'you\'re safe'
        }
    }
    render() {
      return (
        <div>
            <p>{this.renderDisplay()}</p>
            <button onClick={this.onButtonClick}>Pull the trigger!</button>
        </div>
      )
    }
  }


export default RouletteGun