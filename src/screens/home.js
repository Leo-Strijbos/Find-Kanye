import React from "react"
import { useHistory, Link, Redirect } from "react-router-dom";
import kanye from "../img/kanye.png"
import '../App.css'

class Home extends React.Component{
    constructor(props) {
        super(props);
        console.log("loading again")
        let randx = (Math.round(Math.random() * (window.innerWidth -50))).toString() + "px"
        let randy = (Math.round(Math.random() * (window.innerHeight -50))).toString() + "px"
        this.state = { 
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            kanyeStyle: {
                position: "absolute",
                left: randx,
                top: randy,
            },
            found: false
        };
      }

    foundKanye(){
        console.log("yabadabadoo")
        return <Redirect to="/win"/>
    }

    render() {  
        return(
            <div class="h-screen w-screen bg-beans">
                <a href="/win" class="kanyePosition" style={this.state.kanyeStyle}>
                    <img src={kanye} alt="" class="h-8 w-8 md:h-12 md:w-12 opacity-90"/>
                </a>
            </div>
        )     
    }
}

export default Home