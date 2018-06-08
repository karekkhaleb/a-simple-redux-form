import React, {Component} from 'react';
import { connect } from 'react-redux';
import { submitUser } from "../actions/userActions";

class formComponent extends Component{
    state = {
        name: '',
        email: '',
        message: '',
        sendingUser: false
    };
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    send(){
        return new Promise((resolve)=>{
            let user = {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            };
            //Calling the action
            setTimeout(function(){
                const data = this.props.submitUser(user);
                //Return the new user to the caller
                resolve(data);
            }.bind(this),5000);
        })
    }
    onSubmit(e){
        e.preventDefault();
        if(this.state.name === '' || this.state.message === '' || this.state.email === ''){
            alert('Please fill all the fields!!!')
        }else {
            this.setState({sendingUser: true});
            this.send().then(data => {
                this.setState({sendingUser: false});
                console.log(data);
            })
        }
    }
    loadingIndicator = () =>(
        <div>
            <h3>Please wait...</h3>
        </div>
    )
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}
                    id="form" >
                    <div className="input-field">
                        <label htmlFor="name">Name:</label>
                        <input onChange={this.onChange.bind(this)}
                            disabled={this.state.sendingUser}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="your name please"/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email:</label>
                        <input onChange={this.onChange.bind(this)}
                            disabled={this.state.sendingUser}
                            name="email"
                            type="text"
                            id="email"
                            placeholder="your email please"
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="message">Message:</label>
                        <textarea onChange={this.onChange.bind(this)}
                                disabled={this.state.sendingUser}
                                name="message"
                                id="message"
                                rows="5"
                                placeholder="please put your message here">
                            </textarea>
                    </div>
                    <div className="input-field">
                        <input type="submit"
                            disabled={this.state.sendingUser} value="submit"/>
                    </div>
                    <style>

                    </style>
                </form>
                {this.state.sendingUser?this.loadingIndicator():''}
            </div>
        );
    }
}
export default connect(null, { submitUser })(formComponent);