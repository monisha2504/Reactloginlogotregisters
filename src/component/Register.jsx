import React, { Component } from 'react'
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userid:"",
            firstname: "",
            lastname: "",
            email:"",
            password: "",
            mobileNumber:"",
            


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    useridhandler = (event) => {
        this.setState({
            userid: event.target.value
        })
    }

    firstnamehandler = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    lastnamehandler = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    mobileNumberhandler = (event) => {
        this.setState({
            mobileNumber: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.userid}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            userid:"",
            firstname: "",
            lastname: "",
            email:"",
            password: "",
            mobileNumber:""
            
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>UserId:</label> <input type="text" value={this.state.userid} onChange={this.useridhandler} placeholder="UserId..." /><br />
                    <label>FirstName :</label> <input type="text" value={this.state.firstname} onChange={this.firstnamehandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastname} onChange={this.lastnamehandler} placeholder="LastName..." /><br />
                    <label>Email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>MobileNumber :</label> <input type="text" value={this.state.mobileNumber} onChange={this.mobileNumberhandler} placeholder="MobileNumber..." /><br />
                    <input type="submit" value="Register" />
                </form>

            </div>
            
        )
    }
}

export default Register