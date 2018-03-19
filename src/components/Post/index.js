import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPostById } from '../../actions'


class Post extends Component {

	componentDidMount(){
		console.log('## didMount Post ' + this.props.match.params);
		this.props.getPostById(this.props.match.params.postId);
	}

	render(){
		const {post} = this.props;
		console.log(' ## render post ' + post);
		return (
			<div> 
				<p>Title: {post.title}</p>
				<p>Author: {post.author}</p>
				<p>Category: {post.category}</p>
				<p>Body: {post.body}</p>
				<Link to={`/edit/${post.id}`}>Edit Post </Link>

			</div>);
	}
}

const mapStateToProps = ({ post}) => ({ post})

export default connect(mapStateToProps, {getPostById} )(Post)