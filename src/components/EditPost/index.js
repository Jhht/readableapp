import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{editPost} from '../../actions/post';
import {FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'


class EditPost extends Component {
 
  state = {
    title: '',
    body: '',
    category : ''
  };

   constructor(props){
    super(props)

    const {post} = this.props;

    var newState = {title: post.title, body: post.body, category : post.category};

    this.state  = (newState);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

  }


   // update state whenever input text is changed
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }


  handleSubmit(event){ 
    this.editPost();
  }

  // handle cancellation
  handleCancel() {
    // call onCancel function (if available)
    const {history} = this.props;
    history.push('/');
  }


  editPost(){

      const {post, history} = this.props;

     const postUpdate = {//testing
      id : post.id,
      title : this.state.title,
      body : this.state.body,
      category : this.state.category
    }

    this.props.editPost(postUpdate).then(
      history.push("/")
    )
  }


  

  render() {

    const {category } = this.state
    const { categories } = this.props


    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="postTitle">
          <ControlLabel>Title: </ControlLabel>
          <FormControl type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
        <ControlLabel>Category: </ControlLabel>

        <select
              name='category'
              value={category}
              placeholder='Category'
              onChange={this.handleChange}
              className='ui selection dropdown'>
             { 
               categories.map( category => {
                  return(
                    <option key={category.path} value={category.name}>{category.name}</option>
                  )
                })
              }
          </select>
        </FormGroup>
        <FormGroup controlId="postBody">
          <ControlLabel>Text: </ControlLabel>
          <FormControl componentClass="textarea" name="body" placeholder="Body" value={this.state.body} onChange={this.handleChange}/>
        </FormGroup>
        <Button bsStyle="primary" type="submit" >Create Post</Button>
        <Button bsStyle="primary" type="button" onClick={this.handleCancel}>Cancel</Button>        
      </form>
    )
  }
}

const mapStateToProps = ({categories, post}) => ({ categories, post})


const enhance = compose(
  connect(mapStateToProps, { editPost }),
  withRouter
)
export default enhance(EditPost)