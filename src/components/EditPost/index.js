import React, {Component} from 'react';
import {connect} from 'react-redux';
import{editPost, getPostById} from '../../actions/post';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'
import {arrayFromObject} from '../../utils/helpers'
import { Link } from 'react-router-dom'


class EditPost extends Component {
 
  state = {
    id: '',
    title: '',
    body: '',
    category : ''
  };

   constructor(props){
    super(props)

    const postsArray = arrayFromObject(this.props.posts)
    let {post} = this.props
    let postFilteredArray;
   
    if(postsArray.length > 0){
      postFilteredArray = postsArray.filter(post => this.props.match.params.postId === post.id );
      post = postFilteredArray[0]
    }
    
    console.log('post vale ' + JSON.stringify(post))     
    

    var newState = {id: post.id, title: post.title, body: post.body, category : post.category};

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

    const {history} = this.props;

     const postUpdate = {//testing
      id : this.state.id,
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
         <Link to={'/'}>Back to all post </Link>
      </form>
    )
  }
}

const mapStateToProps = ({categories, post, posts}) => ({ categories, post, posts})


const enhance = compose(
  connect(mapStateToProps, { editPost, getPostById }),
  withRouter
)
export default enhance(EditPost)