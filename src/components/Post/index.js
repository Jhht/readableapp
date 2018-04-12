import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import  Comments  from './Comments'
import { getPostById, deletePost  } from '../../actions/post'
import { getPostComments} from '../../actions/comment'
import { Button } from 'react-bootstrap'
import {formatDate, arrayFromObject} from '../../utils/helpers'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'
import ErrorCmp from '../Error'

class Post extends Component {

	componentDidMount(){
		this.props.getPostById(this.props.match.params.postId)
		this.props.getPostComments(this.props.match.params.postId)

		
	}

	render(){
		const {post, deletePost} = this.props;
		const postTime = formatDate(post.timestamp)

		let arryPost = arrayFromObject(this.props.post)

		console.log('--- ' + arryPost.length)

		if(arryPost.length === 0)
			return ( <ErrorCmp />)
		
		return (
			<div key={post.id}> 
				<p>Title: {post.title}</p>
				<p>Author: {post.author}</p>
				<p>Comments: {post.commentCount}</p>
				<p>Time: {postTime}</p>
				<p>Category: {post.category}</p>
				<p>Body: {post.body}</p>
				<Button onClick={() => deletePost(post.id)} > Delete me :( </Button>
				<br/>
				<p><Link to={`/edit/${post.id}`}>Edit Post </Link>   <b>or</b>
				<Link to={'/'}>Back to all post </Link>  </p>
				<Comments key={post.id} post={post}/>
			</div>);
	}
}

const mapStateToProps = ({ comments, post}) => ({ comments,post})

const enhance = compose(
  connect(mapStateToProps, {getPostById, getPostComments, deletePost}),
  withRouter
)
export default enhance(Post)