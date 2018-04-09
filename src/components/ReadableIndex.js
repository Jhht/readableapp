import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPosts, getPostsByCategory } from '../actions/post'
import {getAllCategories } from '../actions/category'
import Posts from './Posts'
import Categories from './Categories'


const ReadableIndex = (props) => (
  <div>
    <h1> Readable Index </h1>
    <Categories/>
    <Posts/>
  </div>
)

export default ReadableIndex
