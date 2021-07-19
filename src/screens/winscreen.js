import React from 'react'


class winScreen extends React.Component{
    render(){
        return(
            <div className="h-screen bg-background">
                <div className="drop-shadow-md bg-black bg-opacity-60 h-screen w-screen">
                    <div className="bg-white p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl xs:m-16 xs:p-6">
                        <p className="font-heading text-black font-bold text-3xl mb-2">Well done, you got it!</p>
                        <p className="text-black pb-4">Do you want to play again?</p>
                        <div className="h-6"></div>
                        <div className="inline mt-6">
                            <Link className="bg-green-600 text-white border-2 rounded border-green-600 p-10 py-4 hover:bg-white hover:text-green-600 mr-2" to="/game">Yes</Link>
                            <Link className="bg-red-600 text-white border-2 rounded border-red-600 p-10 py-4 hover:bg-white hover:text-red-600" to="/">No</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default winScreen