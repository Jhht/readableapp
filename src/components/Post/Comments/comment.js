import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  voteForComment, deleteComment} from '../../../actions/comment'
import { Button } from 'react-bootstrap'
import CreateComment from './CreateComment'


class Comment extends Component {

	state = {
		edit : false
	}

	toggleEdit = () => {
	    this.setState(prevState => ({edit: !prevState.edit}))
	  }

	render(){
		const { edit } = this.state
		const {comment , voteForComment, deleteComment} = this.props;
			 
			if (edit) {
			      return (
			        <CreateComment 
			          toggleEdit={ this.toggleEdit}
			          commentId={comment.id}
			          defaults={{id : comment.id, body: comment.body, author: comment.author}}
			        />
			      )
			}

				return (
					<div key={comment.id}> 
						<p>Author: {comment.author}</p>
						<p>Body: {comment.body}</p>
						<p>Votes: {comment.voteScore}</p>
						<Button onClick={() => this.toggleEdit()} > Edit </Button>
   						<Button onClick={() => voteForComment(comment, 'upVote')}  > + </Button>
                        <Button onClick={() => voteForComment(comment, 'downVote')} > - </Button>
                        <Button onClick={() => deleteComment(comment.id)} > Del </Button>

					</div>);
	}
}

const mapStateToProps = ({ post, comments}) => ({ post, comments})

export default connect(mapStateToProps, {voteForComment, deleteComment} )(Comment)