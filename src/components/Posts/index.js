import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchPosts} from '../../actions'
import { connect } from 'react-redux'
import {arrayFromObject } from '../../utils/helpers'


class Posts extends Component{

	render(){

		const { posts, match } = this.props
    console.log('render posts -> ' + JSON.stringify(this.props));
    const postArray = arrayFromObject(posts, 'id')
    console.log('render postArray -> ' + JSON.stringify(postArray));

    return(
      <div className="Posts">
            <h1> Posts render </h1>
            <ol >
              {postArray.map((post) =>(
                 <li key={post.id}>
                    <p>{post.title}</p>
                 </li>
              ))}
              </ol>
      </div>
    )    
	}
}



const mapStateToProps = ({ posts}) => ({ posts})




export default connect(mapStateToProps)(Posts)