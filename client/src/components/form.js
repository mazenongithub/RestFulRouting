import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {


  renderField(field) {
    return (<div><input type="text" {...field.input} /> {field.meta.touched ? field.meta.error : ""} </div>)

  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });


  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<title>Basic MERN Program</title>
</head>
<body>
<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
<table width="95%" border="0" cellSpacing="0" cellPadding="10">
<tbody>
  <tr>
    <th colSpan="4" scope="col">Create New User:</th>
  </tr>
  <tr>
    <td width="19%">&nbsp;</td>
    <td width="33%">&nbsp;</td>
    <td width="25%"><Link to="/">Landing Page </Link></td>
    <td width="23%">&nbsp;</td>
  </tr><tr>
    <td>&nbsp;</td>
    <td>First Name:</td>
    <td colSpan="2">    <Field 
     name="firstname" 
     component={this.renderField} 
     /></td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>Last Name</td>
    <td colSpan="2"><Field 
     name="lastname" 
     component={this.renderField} 
     /> </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td colSpan="2"><button type="submit"> Submit </button></td>
  </tr>
  </tbody>
</table>
</form>
</body>
</html>

    ) //end of return
  } //end of render 
} //end of component 

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
export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(

  connect(null, { createPost })(PostsNew));
