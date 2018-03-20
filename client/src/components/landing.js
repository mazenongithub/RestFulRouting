import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const table_margin = {
    margin: 'auto',
};

class Landing extends Component {

    renderSurveys() {

        var returnValue = [];
        for (var i = 0; i < this.props.user.length; i++) {
            var user_id = this.props.user[i]._id;
            var firstname = this.props.user[i].firstname;
            var lastname = this.props.user[i].lastname;
            returnValue.push(<li>{user_id} {firstname} {lastname} </li>);
        }

        //return this.props.user.map(myuser => {
        //return (<option value={myuser._id}> {myuser.firstname}  {myuser.lastname} </option>)
        // });
        return (returnValue);
    };
    render() {
        return (
            <html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Basic MERN Program</title>
</head>
<body>
<table width="50%" border="0" cellspacing="0" cellpadding="10" style={table_margin}>
  <tr>
    <th colspan="3">Basic Program</th>
  </tr>
    <tr>
  <th colspan="3"><ul> 
  <li> <Link to="reactrouter/RestFulRouting">Add A Post</Link> </li> 
 <li> <Link to="reactrouter/:id/show">Show A Post</Link> </li> </ul> </th>
  </tr>
  <tr>
    <td>User ID:</td>
    <td colspan="2">
    <ul>
    {this.renderSurveys()}
    </ul>
   </td>
  </tr>
 
</table>

</body>
</html>

        ) //end of return
    } //end of render 
} //end of component 

function mapStateToProps({ user }) {
    return { user };
}

export default connect(mapStateToProps)(Landing);
