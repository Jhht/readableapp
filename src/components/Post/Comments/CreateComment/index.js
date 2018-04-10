import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect , withRouter} from 'react-redux';
import{createComment , editComment} from '../../../../actions/comment';
import {FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';


class CreateComment extends Component {
 
  initialState = {
    id : '',
    author: '',
    body: '',
  };


  // initialState, handlers
  constructor(props){

    super(props)
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);


    const { defaults , toggleEdit} = this.props;

    if(defaults){
      var newState = {id : defaults.id, author: defaults.author, body: defaults.body};

      this.state  = (newState);
    }
  }


  // update state whenever input text is changed
  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  // handle form submission
  handleSubmit(event) {
    event.preventDefault();
    this.createComment();
    

  }

  // handle cancellation
  handleCancel() {
    this.props.toggleEdit()

  }

  // create a new post
  createComment() {
    const {author, body, edit, id} = this.state;
    const { history, post, toggleEdit } = this.props;

   

    if(toggleEdit){
       const commentUpdate = {//testing
          id : id,
          author : author,
          body : body,
          timestamp : Date.now(),      
          parentId : post.id,
      }
      this.props.editComment( commentUpdate )
    }else{
      const commentCreate = {//testing
          id : guid(),
          author : author,
          body : body,
          timestamp : Date.now(),      
          parentId : post.id,
      }
      this.props.createComment( commentCreate )
    }

  }


  render() {
    const {author, body} = this.state
    const {comment, toggleEdit} = this.props;

    const button = toggleEdit ? (
      <div>
        <Button bsStyle="primary" type="submit" >Save</Button>
        <Button bsStyle="primary" type="button" onClick={this.handleCancel}>Cancel</Button>
      </div>
      ) : (
        <Button bsStyle="primary" type="submit" >Save</Button>
      )

    return (
      <form onSubmit={this.handleSubmit}>
        <h4> Create a new comment! </h4>
        <FormGroup controlId="postAuthor">
          <ControlLabel>Author</ControlLabel>
          <FormControl type="text" name="author" placeholder="Author Name" value={author} onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup controlId="postBody">
          <ControlLabel>Body</ControlLabel>
          <FormControl componentClass="textarea" name="body" placeholder="Body" value={body} onChange={this.handleChange}/>
        </FormGroup>
        {button}          
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


const mapStateToProps = ({post, comment}) => ({ post, comment})


export default connect(mapStateToProps, {createComment, editComment})(CreateComment)