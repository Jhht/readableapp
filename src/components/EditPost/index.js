import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{createPost, getPostById} from '../../actions';
import {FormGroup, FormControl, ControlLabel, Button, ButtonGroup} from 'react-bootstrap';
import FormPost from './formPost'
import { initialize } from 'redux-form';



class PostForm extends Component {


  componentDidMount(){
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

    this.editPost();
    
    // call onSubmit function (if available)
    const {onSubmit} = this.props;
    if (onSubmit) {
      onSubmit();
    }
  }

  // handle cancellation
  handleCancel() {
    const { history , post} = this.props;
    history.push(`/`)

  }

  // create a new post
  editPost() {
    const { history , post} = this.props;

    console.log('-----> editPost ' + JSON.stringify(this.state));
   
  }


  render() {

    
    const {categories, post} = this.props;

    let formDefaults

    if(post != null){
      console.log('## post ' + post.title)


      
    }else{

    }

    

    return (
      <FormPost onSubmit={this.handleSubmit.bind(this)} post={post} initialValues={{'title': post.title, 'author': post.author, 'timestamp' : post.timestamp, 'body': post.body}}/>
    )
  }
}

const mapStateToProps = ({categories, post}) => ({ categories, post})


export default connect(mapStateToProps, {createPost , getPostById})(PostForm)