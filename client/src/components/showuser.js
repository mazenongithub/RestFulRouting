import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import { deleteUser } from '../actions';
import { Link } from 'react-router-dom';
class ShowUser extends Component {

    componentDidMount() {
        var user_id = this.props.match.params.id;

        this.props.fetchUser(user_id);
    }

    onDeleteClick() {
        var user_id = this.props.match.params.id;
        this.props.deleteUser(user_id, () => {
            this.props.history.push("/");
        });
    }

    render() {
        for (var i = 0; i < this.props.myuser.length; i++) {
            var firstname = this.props.myuser[i].firstname
            var lastname = this.props.myuser[i].lastname;
        }

        return (

            <table width="95%" border="0" cellSpacing="0" cellPadding="10">
            <tbody>
            <tr>
    <th width="24%" scope="col">First Name</th>
    <td colSpan="2"><input type="text" name="firstname" value={firstname} /></td>
  </tr>
  <tr>
    <th>Last Name</th>
    <td colSpan="2"><input type="text" name="lastname" value={lastname} /></td>
  </tr>
  <tr>
    <th><input type="button" value="Delete" onClick={this.onDeleteClick.bind(this)} /></th>
    <td width="22%"><input type="button" value="Edit" /> </td>
    <th width="54%"><Link to="/"> Landing </Link></th>
  </tr>
  </tbody>
</table>




        ) // End Return




    } // End Render 


} //End Component

function mapStateToProps(state) {
    return { myuser: state.user };
}

export default connect(mapStateToProps, { fetchUser, deleteUser })(ShowUser);
