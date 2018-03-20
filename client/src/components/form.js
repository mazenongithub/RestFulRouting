import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

const table_margin = {
  margin: 'auto',
};

class PostsNew extends Component {
  renderField(field) {
    return (<div><input type="text" {...field.input} /> {field.meta.touched ? field.meta.error : ""} </div>)

  }

  onSubmit(values) {
    console.log(values);

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
<table width="50%" border="0" cellspacing="0" cellpadding="10" style={table_margin}>
  <tr>
    <th colspan="3">Basic Program</th>
  </tr>
    <tr>
    <th colspan="3"><Link to="/">Back to Landing</Link></th>
  </tr>
  <tr>
    <td width="16%">First Name</td>
    <td colspan="2">
    <Field 
     name="firstname" 
     component={this.renderField} 
     />
     
     </td>
  </tr>
  <tr>
    <td>Last Name</td>
    <td colspan="2"><Field 
     name="lastname" 
     component={this.renderField} 
     /> </td>
     
  </tr>
  <tr>
    <td></td>
    <th width="39%"><button type="submit"> Submit </button></th>
    <th width="45%"><button id="btndelete"> Delete </button></th>
  </tr>
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
  connect(null, { createPost })(PostsNew)
);
