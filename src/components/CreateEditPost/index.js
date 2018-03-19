import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{createPost, getPostById} from '../../actions';
import {FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';


class PostForm extends Component {
 
  initialState = {
    author: '',
    category: 'select',
    title: '',
    body: '',
  };

  componentWillMount(){
    if(this.props.match.params.postId != null){
      this.props.getPostById(this.props.match.params.postId)
      console.log('--->' + this.props.post)

    }
  }



  // initialState, handlers
  constructor(props){

    super(props)
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const {onCancel} = this.props;
    if (onCancel) {
      onCancel();
    }
  }

  // create a new post
  createPost() {
    const {author, category, title, body} = this.state;
    const { history } = this.props;


    const post = {//testing
      id : 'dsfds',
      author : author,
      category : 'udacity',
      title : title,
      body : body
    }

    this.props.createPost( post ).then( 
      history.push(`/`)
    );

  }


  render() {
    const {author, category, title, body} = this.state
    const {categories, post} = this.props;

    if(post != null){
      console.log('## post ' + post.title)
    
    }
      console.log('## post ' + post.author)

    return (
      <form onSubmit={this.handleSubmit}>
              <input defaultValue={post.title} type="text" name="title" className="field-long" />
        <FormGroup controlId="postAuthor">
          <ControlLabel>Author</ControlLabel>
          <FormControl type="text" name="author" placeholder="Author Name" value={author} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup controlId="postTitle">
          <ControlLabel>Title</ControlLabel>
          <FormControl type="textarea" name="title" placeholder="Title" value={post.title} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup controlId="postBody">
          <ControlLabel>Body</ControlLabel>
          <FormControl componentClass="textarea" name="body" placeholder="Body" value={post.body} onChange={this.handleChange}/>
        </FormGroup>
        <Button bsStyle="primary" type="submit" >Save</Button>
        <Button bsStyle="primary" type="button" >Cancel</Button>
      </form>
    )
  }
}

const mapStateToProps = ({categories, post}) => ({ categories, post})


export default connect(mapStateToProps, {createPost , getPostById})(PostForm)