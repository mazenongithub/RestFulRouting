import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import { deleteUser } from '../actions';
import { editUser } from '../actions';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
class ShowUser extends Component {
    constructor(props) {
        super(props);
        var user_id = this.props.match.params.id;
        this.props.fetchUser(user_id);
        for (var i = 0; i < this.props.myuser.length; i++) {
            var fname = this.props.myuser[i].firstname

        }
        this.state = { firstname: fname }
    }

    componentDidMount() {

    }

    onDeleteClick() {
        var user_id = this.props.match.params.id;
        this.props.deleteUser(user_id, () => {
            this.props.history.push("/");
        });
    }

    onSubmit(values) {
        var user_id = this.props.match.params.id;
        this.props.editUser(user_id, values, () => {
            this.props.history.push(`/`);
        });
    }

    renderField(field) {
        return (<div><input type="text" {...field.input}   /> {field.meta.touched ? field.meta.error : ""} </div>)

    }


    render() {
        const { handleSubmit } = this.props;
        for (var i = 0; i < this.props.myuser.length; i++) {
            var fname = this.props.myuser[i].firstname
            var lname = this.props.myuser[i].lastname;

        }


        return (


            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <table width="95%" border="0" cellSpacing="0" cellPadding="10">
            <tbody>
            <tr>
    <th width="24%" scope="col">{fname} {lname} </th>
    <td colSpan="2">
     </td>
  </tr>
  <tr>
    <th>Last Name </th>
    <td colSpan="2"></td>
  </tr>
  <tr>
    <th><input type="button" value="Delete" onClick={this.onDeleteClick.bind(this)} /></th>
        <td width="22%"><input type="submit" value="Edit" /> </td>
    <th width="54%"><input type="text"  value={this.state.firstname} 
    onChange={event=>this.setState({firstname:event.target.value})} /><Link to="/"> Landing </Link></th>
  </tr>
  </tbody>
</table>
</form>



        ) // End Return




    } // End Render 


} //End Component

function validate(values) {
    console.log(values);
    const errors = {};
    if (!values.firstname) {
        errors.firstname = 'Enter a First Name';
    }
    if (!values.lastname) {
        errors.lastname = 'Enter a Last Name';
    }
    return errors;
}


function mapStateToProps(state, ownProps) {

    return { myuser: state.user };
}
export default reduxForm({

    validate: validate,
    form: 'PostsNewForm'

})(

    connect(mapStateToProps, { fetchUser, deleteUser, editUser })(ShowUser));
