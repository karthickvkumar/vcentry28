import React, { Component } from 'react';

class HomePage extends Component {

    constructor(){
        super();
        this.state = {
            loginForm : {
                username: "",
                password: ""
            },
            contactFrom : {
                firstname : "",
                lastname : ""
            },
            backendValue : []
        }

    }

    handleInput(event){
        // console.log(event.target.value, event.target.name);
        this.setState({ 
            loginForm : {...this.state.loginForm,  [event.target.name] : event.target.value }
        })
    }

    submitForm(){
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>This is a Home Page</h1>
                <input type='text' placeholder='Enter Username' name='username' onChange={this.handleInput.bind(this)}/>
                <input type='text' placeholder='Enter Password' name='password' onChange={this.handleInput.bind(this)}/>
                <button onClick={() => this.submitForm()}>Submit</button>
                <h3>{this.state.username} / {this.state.password}</h3>
            </div>
        );
    }
}

export default HomePage;