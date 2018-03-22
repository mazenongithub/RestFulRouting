import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUser } from '../actions';
import _ from 'lodash';


const table_margin = {
    margin: 'auto',
};

class Landing extends Component {

    componentDidMount() {
        this.props.loadUser();

    }

    renderUsers() {
        return _.map(this.props.user, myUsers => {
            return (<li key={myUsers._id}> <Link to={`/reactrouter/${myUsers._id}/show`}>{myUsers.firstname}  {myUsers.lastname}</Link>  </li>)
        })

    };

    render() {
        return (
            <html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
<title>Basic MERN Program</title>
</head>
<body>
<table width="50%" border="0" cellSpacing="0" cellPadding="10" style={table_margin}>
<tbody>
  <tr>
    <th colSpan="3">Basic Program</th>
  </tr>
    <tr>
  <th colSpan="3"><ul> 
  <li> <Link to="/reactrouter/restfulrouting">Add A Post</Link> </li> 
 <li> <Link to="reactrouter/:id/show">Show A Post</Link> </li> </ul> </th>
  </tr>
  <tr>
    <td>User ID:</td>
    <td colspan="2">
    <ul>
    {this.renderUsers()}
    </ul>
   </td>
  </tr>
 </tbody>
</table>

</body>
</html>

        ) //end of return
    } //end of render 
} //end of component 

function mapStateToProps(state) {
    return { user: state.user };
}
export default connect(mapStateToProps, { loadUser })(Landing);
