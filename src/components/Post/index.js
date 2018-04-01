import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import  Comments  from './Comments'
import { getPostById , getPostComments} from '../../actions'


class Post extends Component {

	componentDidMount(){
		console.log('## didMount Post ' + this.props.match.params);
		this.props.getPostById(this.props.match.params.postId);
		this.props.getPostComments(this.props.match.params.postId);
	}

	render(){
		const {post} = this.props;
		console.log(' ## render post ' + post);
		return (
			<div key={post.id}> 
				<p>Title: {post.title}</p>
				<p>Author: {post.author}</p>
				<p>Category: {post.category}</p>
				<p>Body: {post.body}</p>
				<Link to={`/edit/${post.id}`}>Edit Post </Link>
				<Comments key={post.id} post={post}/>
			</div>);
	}
}

const mapStateToProps = ({ comments, post}) => ({ comments,post})

export default connect(mapStateToProps, {getPostById, getPostComments} )(Post)