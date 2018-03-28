import React, { Component } from 'react';
import * as apiCalls from './api';
import _ from 'lodash';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions';
//export const CREATE_POST = 'create_post';

class Master extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allusers: {},
            user_id: '',
            firstname: '',
            lastname: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(values) {
        this.createPost(values, () => {
            this.props.history.push("/");
        });

    }

    componentDidMount() {

        this.loadUsers();

    }

    async loadUsers() {
        let allusers = await apiCalls.fetchURL("https://webdevbootcamp-mazenoncloud9.c9users.io:8080/loadallusers");
        let allmyusers = {};
        allusers.map((myusers) => {
            return allmyusers = [...allmyusers, myusers]
        })

        this.setState({ allusers: allmyusers });
        console.log(this.state.allusers)
    }

    //async addUser(val) {
    //let newUser = await apiCalls.createUser(val);
    // newUser.map((newuser, i) => {
    //     var firstname = newuser.firstname;
    //     var lastname = newuser.lastname;
    //     var user_id = newuser.user_id;
    //     this.setState({ firstname, lastname, user_id });
    // })
    //console.log(newUser)
    // this.setState({ allusers: [...this.state.allusers, newUser] });
    // }

    loadallusers() {
        return _.map(this.state.allusers, myUsers => {
            return (<option value={myUsers._id}>{myUsers.firstname} {myUsers.lastname} </option>)
        })
    };

    afterSetStateFinished() {
        console.log(this.state.user_id);
        _.map(this.state.allusers, myUser => {
            if (myUser._id === this.state.user_id) {
                this.setState({ firstname: myUser.firstname, lastname: myUser.lastname })
            }

        })

    }

    onSubmit(values, e) {
        e.preventDefault();
        this.props.createPost(values, () => {
            this.props.history.push("/");
        });
    }
    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <table width="95%" border="0" cellPadding="5">
  <tbody>
  <tr>
    <th colSpan="2"><select name="user_id" className="user_id" id="user_id" value={this.state.user_id}
    onChange={event => this.setState({user_id: event.target.value}, () => {
    this.afterSetStateFinished();
})
    }> <option value=""> Enter New </option>{this.loadallusers()}</select></th>
  </tr>
  <tr>
    <td width="28%">First Name</td>
    <td width="72%"><input type="text" name="firstname" id="firstname" value={this.state.firstname} onChange={event => this.setState({firstname: event.target.value})} /></td>
  </tr>
  <tr>
    <td>Last Name</td>
    <td><input type="text" name="lastname" id="lastname" value={this.state.lastname} onChange={event => this.setState({lastname: event.target.value})} /> </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td><input type="submit" value="Submit" id="btninsert"  /><input type="button" value="Delete" id="btndelete" /></td>
  </tr>
  </tbody>
</table>
</form>


        ) // End Return




    } // End Render 


} //End Component



export default Master;
