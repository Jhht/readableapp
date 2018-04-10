import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import  Comments  from './Comments'
import { getPostById  } from '../../actions/post'
import { getPostComments} from '../../actions/comment'


class Post extends Component {

	componentDidMount(){
		console.log('## didMount Post ' + this.props.match.params);
		this.props.getPostById(this.props.match.params.postId);
		this.props.getPostComments(this.props.match.params.postId);
	}

	render(){
		const {post} = this.props;
		const postTime = post.timestamp
		const date = new Date( postTime*1000);
		const hours = date.getHours();
		const minutes = "0" + date.getMinutes();
		const seconds = "0" + date.getSeconds();

		const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
		return (
			<div key={post.id}> 
				<p>Title: {post.title}</p>
				<p>Author: {post.author}</p>
				<p>Time: {formattedTime}</p>
				<p>Category: {post.category}</p>
				<p>Body: {post.body}</p>
				<Link to={`/edit/${post.id}`}>Edit Post </Link>
				<p/>
				<Link to={'/'}>Back to all post </Link>
				<Comments key={post.id} post={post}/>
			</div>);
	}
}

const mapStateToProps = ({ comments, post}) => ({ comments,post})

export default connect(mapStateToProps, {getPostById, getPostComments} )(Post)