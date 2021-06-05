import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props){
       super(props)
       this.state={

       }
    }
    render() {
        return (
            <div>
                <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                  <a className="navbar-brand" >LoginLogoutRegister</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                          <li className="nav-item active"><a className="nav-link">Home <span className="sr-only">(current)</span></a> </li>
                          
                     </ul> 
                     <ul className="navbar-nav mr-auto">
                          <li className="nav-item active"><a className="nav-link"to="/register">Register<span className="sr-only">(current)</span></a> </li>
                          
                     </ul> 
                   
                </div>
                </nav>   
                </header>
            </div>
        )
    }
}
export default HeaderComponent