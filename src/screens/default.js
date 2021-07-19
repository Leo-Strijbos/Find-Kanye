import React from "react"
import { Link } from "react-router-dom"
import kanyeoutline from "../img/kanyeoutline.png"
import kanyesuprise from "../img/kanyesuprise.png"

class Default extends React.Component{
    render () {
        return(
            <div className="bg-background">
                <div className="h-screen md:grid md:grid-flow-cols md:grid-cols-2 mt-8 md:mt-0 mb-0 bg-black bg-opacity-70">
                    <div className="flex justify-around items-center">
                        <div className="rounded-xl shadow-xl p-10 w-4/5 bg-yellow-50">
                            <p className="font-heading text-5xl">Help us find Kanye!</p>
                            <br />
                            <p className="">Kanye has fell in a pool of coffee beans, and we can't find him. Try and find him before it is too late!</p>
                            <br />
                            <br />
                            <Link className="bg-yellow-800 text-white border-2 rounded border-yellow-800 p-10 py-4 hover:bg-white hover:text-yellow-800 mr-2 pr-4" to="/game">Go<span className="mx-5"></span>→</Link>
                        </div>
                        
                    </div>
                    {/* <div className="flex justify-around items-center mt-40 md:m-0">
                        <img src={kanyeoutline} alt="" class="h-96 w-96 animate-bounce"/>
                    </div> */}
                    <div className="absolute right-0 bottom-0">
                        <img src={kanyesuprise} alt="" class="h-64 w-64 md:h-96 md:w-96 lg:h-auto lg:w-auto"/>
                    </div>
                    
                </div>
            </div>
            
        )
    }
}

export default Default