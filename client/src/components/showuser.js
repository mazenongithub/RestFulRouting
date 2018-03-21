import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class ShowUser extends Component {
    componentDidMount() {
        var user_id = this.props.match.params.id;
        console.log(user_id);
        this.props.fetchUser(user_id);
    }

    render() {

        return (

            <table width="95%" border="0" cellspacing="0" cellpadding="10">
  <tr>
    <th width="24%" scope="col">First Name</th>
    <td width="76%">&nbsp;</td>
  </tr>
  <tr>
    <th>Last Name</th>
    <td>&nbsp;</td>
  </tr>
</table>




        ) // End Return




    } // End Render 


} //End Component

function mapStateToProps(state) {
    return { user: state.user };
}
export default connect(mapStateToProps, { fetchUser })(ShowUser);
