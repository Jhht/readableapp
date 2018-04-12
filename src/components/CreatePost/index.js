import React, {Component} from 'react';
import {connect} from 'react-redux';
import{createPost} from '../../actions/post';
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'
import { Link } from 'react-router-dom'
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';


class PostForm extends Component {
 
 


  // initialState, handlers
  constructor(props){

    super(props)
    this.initialState = {
      author: '',
      category: 'select',
      title: '',
      body: '',
    };
    this.setState(this.initialState);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }


  // update state whenever input text is changed
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  // handle form submission
  handleSubmit(event) {
    event.preventDefault();

    this.createPost();
    
    // call onSubmit function (if available)
    const {onSubmit} = this.props;
    if (onSubmit) {
      onSubmit();
    }
  }

  // handle cancellation
  handleCancel() {
    // call onCancel function (if available)
    const {history} = this.props;
    history.push('/');
  }

  // create a new post
  createPost() {
    const {author, category, title, body} = this.state;
    const { history } = this.props;


    const post = {//testing
      id : guid(),
      author : author,
      category : category,
      title : title,
      body : body,
      timestamp : Date.now()
    }

    this.props.createPost( post ).then( 
      history.push(`/`)
    );

  }


  render() {
    const {author, title, body} = this.state
    const {categories} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="postAuthor">
          <ControlLabel>Author</ControlLabel>
          <FormControl type="text" name="author" placeholder="Author Name" value={author} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup controlId="postTitle">
          <ControlLabel>Title: </ControlLabel>
          <FormControl type="text" name="title" placeholder="Title" value={title} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
        <ControlLabel>Category: </ControlLabel>
        <select
              name='category'
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
          <FormControl componentClass="textarea" name="body" placeholder="Body" value={body} onChange={this.handleChange}/>
        </FormGroup>
        <Button bsStyle="primary" type="submit" >Create Post</Button>
        <Button bsStyle="primary" type="submit" onClick={this.handleCancel}>Cancel</Button>
        <Link to={'/'}>Back to all post </Link>  
      </form>
    )
  }
}

export function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + s4() + s4() + s4();
  }

const mapStateToProps = ({categories, posts}) => ({ categories, posts})
const mapDispatchToProps = {createPost}


const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)
export default enhance(PostForm)
