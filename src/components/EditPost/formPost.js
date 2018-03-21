import React, {Component} from 'react';
import { Field,  reduxForm } from 'redux-form';
import { initialize } from 'redux-form';


class FormPost extends Component {

 handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }
  

  render() {
     const {
      post,
      handleSubmit
    } = this.props

    const title = this.props.initialValues

    console.log('## form' + JSON.stringify(this.props))
    return (
      <form onSubmit={handleSubmit}>
          <label> Title </label>
          <Field
            name="title"
            component="input"
            type="text"
            placeholder="Title"
          />
        <button onClick={this.props.handleSubmit}>Submit</button>
      </form>
    );
  }
}



FormPost = reduxForm({
  form: 'post',                      // the name of your form and the key to
                                        // where your form's state will be mounted
  fields: ['title', 'author'],

},state => ({
  initialValues: {
    title: this.props.initialValues.title

  }, // a list of all your fields in your form
}))(FormPost);


export default FormPost;