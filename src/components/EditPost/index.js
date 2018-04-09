import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{editPost} from '../../actions/post';
import {FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';



class EditPost extends Component {
 
  state = {
    title: '',
    body: '',
    category : ''
  };

   constructor(props){
    super(props)

    const {post} = this.props;

    console.log('### didMount ' + post.title);
    var newState = {title: post.title, body: post.body, category : post.category};
    console.log('### didMount newState ' + JSON.stringify(newState));

    this.state  = (newState);
    console.log('### didMount state ' + JSON.stringify(this.state));

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }


  onTitleChange = ({target}) => { 
    console.log(' ### onTitleChange ' + JSON.stringify(this.state))
    this.setState({title: target.value}
  )}

   // update state whenever input text is changed
  handleChange(event) {
    const {name, value} = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit(event){ 
   

    this.editPost();
  }



  editPost(){
        console.log(' ### onTitleChange ' + JSON.stringify(this.props.post))

    const {post, history} = this.props;
        console.log(' ### onTitleChange ' + JSON.stringify(this.props.post))

     const postUpdate = {//testing
      id : post.id,
      title : this.state.title,
      body : this.state.body,
      category : this.state.category
    }
    console.log(' ### onTitleChange postUpdate ' + JSON.stringify(postUpdate))

    this.props.editPost(postUpdate).then(
      history.push("/")
    )
  }


  

  render() {

    const {category } = this.state
    const { categories } = this.props

    console.log(' ### render ' + JSON.stringify(this.props))

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="postTitle">
          <ControlLabel>Title</ControlLabel>
          <FormControl type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
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
          <ControlLabel>Body</ControlLabel>
          <FormControl componentClass="textarea" name="body" placeholder="Body" value={this.state.body} onChange={this.handleChange}/>
        </FormGroup>
        <Button bsStyle="primary" type="submit" >Create Post</Button>
      </form>
    )
  }
}

const mapStateToProps = ({categories, post}) => ({ categories, post})


export default connect(mapStateToProps, {editPost })(EditPost)