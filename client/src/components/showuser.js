import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class ShowUser extends Component {
    componentDidMount() {
        var user_id = this.props.match.params.id; //from the URL in Router
        this.props.fetchUser(user_id);

    }

    render() {

        //const myUser = this.props.myuser

        return (

            <table width="95%" border="0" cellspacing="0" cellpadding="10">
  <tr>
    <th width="24%" scope="col">First Name</th>
    <td width="76%"></td>
  </tr>
  <tr>
    <th>Last Name</th>
    <td></td>
  </tr>
</table>

        ) // End Return

    } // End Render 
} //End Component

function mapStateToProps({ user }, ownProps) {
    return { myuser: user[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchUser })(ShowUser);
