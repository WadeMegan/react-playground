import React, {Component} from 'react';
import './Accordion.css'

class Accordion extends React.Component{
    static defaultProps = {sections:[]}
    state = {
        currentIndex:null
    }
    handleButtonClick=(index)=>{
        this.setState({currentIndex:index})
    }
    renderSections(){
        return this.props.sections.map((section,index)=>(
            <li className='Accordion__item' key={index}>
                <button onClick={()=>this.handleButtonClick(index)}>{section.title}</button>
                {(this.state.currentIndex===index)&&<p>{section.content}</p>}
            </li>
        ))
    }
    render(){   
        return(
            <div>
                <ul className='Accordion'>
                    {this.renderSections()}
                </ul>
            </div>
        )
    }
}



export default Accordion