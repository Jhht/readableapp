import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPosts, getAllCategories, getPostsByCategory } from '../actions'
import Posts from './Posts'
import Categories from './Categories'

class ReadableIndex extends Component {
  componentDidMount () {
    console.log('## DidMount ReadableIndex props: ' + JSON.stringify(this.props))
    console.log('## DidMount ReadableIndex match params: '  + JSON.stringify(this.props.match.params))

     this.props.getPosts()
     this.props.getAllCategories();

  }

  componentDidUpdate (prevProps) {
    console.log('## DidUpdate ReadableIndex match params ' + JSON.stringify(prevProps.match.params));
    if (prevProps.match.params !== this.props.match.params) {
      const { category } = this.props.match.params;
      
      console.log('## DidUpdate ReadableIndex category ' + category);
      
      if( category != null){
        this.props.getPostsByCategory(category);
      }else{
        this.props.getPosts();
      }
    }
  }



  render () {
    return (
      <div>
        <h1> Readable index </h1>
        <Categories />
        <Posts />
      </div>
    )
  }
}

const mapStateToProps = ({categories, posts}) => ({ categories, posts})
const mapDispatchToProps = {getPosts, getAllCategories, getPostsByCategory}
export default connect(mapStateToProps, mapDispatchToProps)(ReadableIndex)
