import React, {Component} from 'react';
import '../styles/ComingSoon.css';
import Countdown from './Countdown';
import {Logo} from "./Logo"
import {Title} from "./Title"
import Subscribe from "./Subscribe"
import {Description} from "./Description"
import logo from "../images/gear-with-holes.svg"

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate:"2021-07-13 00:00:00"
    },
    logo:{
      alt:"Spinning Gear",
      src: logo,
    },
    title:{
      text:"Coming Soon!"
    },
    description:{
      text:"loremvdgd dafgfg dg dgdg "
    },
    subscribe:{
      placeholder:"Enter Email Address",
      buttonText:"Submit"
    }
  }
  render(){
    const {countdown,logo,title,description
    ,subscribe} = this.state;
  return (
    <div className="background">
     <Countdown futureDate= {countdown.futureDate}> </Countdown>
     <Logo alt={logo.alt} src={logo.src}/>
     <Title text={title.text}/>
     <Description text={description.text}/>
     <Subscribe placeholder={subscribe.placeholder} buttonText={subscribe.buttonText}/>
    </div>
  )};
}

export default ComingSoon;
