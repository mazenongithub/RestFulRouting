import React, { Component } from 'react';
import { connect } from 'react-redux';

const width_70 = {
  width: '70%',
};

const width_100 = {
  width: '100%',
};

const width_50 = {
  width: '50%',
};

const table_margin = {
  margin: 'auto',
};

class Form extends Component {

  renderSurveys() {
    var returnValue = [];
    for (var i = 0; i < this.props.user.length; i++) {
      var user_id = this.props.user[i]._id;
      var firstname = this.props.user[i].firstname;
      var lastname = this.props.user[i].lastname;
      returnValue.push(<option value={user_id}>{firstname} {lastname} </option>);
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
    <th colspan="3"></th>
  </tr>
  <tr>
    <td>User ID:</td>
    <td colspan="2"><select name="user_id" id="user_id" style={width_70}>
    <option value=""> Enter New/ or Select to Edit  </option>
    {this.renderSurveys()}
    </select></td>
  </tr>
  <tr>
    <td width="16%">First Name</td>
    <td colspan="2"><input type="text" name="firstname" id="firstname" style={width_100} /></td>
  </tr>
  <tr>
    <td>Last Name</td>
    <td colspan="2"><input type="text" name="lastname" id="lastname" style={width_100} /></td>
  </tr>
  <tr>
    <td></td>
    <th width="39%"><button id="btninsertupdate" style={width_50}> Insert/Update </button></th>
    <th width="45%"><button id="btndelete" style={width_50}> Delete </button></th>
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

export default connect(mapStateToProps)(Form);
