import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class ShowUser extends Component {

    componentDidMount() {
        var user_id = this.props.match.params.id;

        this.props.fetchUser(user_id);

    }

    render() {
        for (var i = 0; i < this.props.myuser.length; i++) {
            var firstname = this.props.myuser[i].firstname
            var lastname = this.props.myuser[i].lastname;
        }

        return (

            <table width="95%" border="0" cellspacing="0" cellpadding="10">
  <tr>
    <th width="24%" scope="col">First Name</th>
    <td width="76%">{firstname}</td>
  </tr>
  <tr>
    <th>Last Name</th>
    <td>{lastname}</td>
  </tr>
</table>




        ) // End Return




    } // End Render 


} //End Component

function mapStateToProps(state) {
    return { myuser: state.user };
}

export default connect(mapStateToProps, { fetchUser })(ShowUser);
