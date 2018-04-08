
export function fetchCategories( ){

  const url = 'http://localhost:3001';

  let headers = { headers: { 'Authorization': 'whatever-you-want', 'Content-Type' : 'application/json' }}

  return fetch(`${url}/categories`, headers)
    .then((res) =>  res.json())
    .then(data => data.categories)
    
}

export function fetchAllPosts( ){

  const url = 'http://localhost:3001';

  return fetch(`${url}/posts`, { headers: { 'Authorization': 'whatever-you-want', 'Content-Type' : 'application/json' }})
    .then((res) =>  res.json()
    )
    
}

export function fetchPostById( id ){

  const url = 'http://localhost:3001';

  return fetch(`${url}/posts/${id}`, { headers: { 'Authorization': 'whatever-you-want', 'Content-Type' : 'application/json' }})
    .then((res) =>  res.json()
    )
    
}

export function fetchPostsByCategory( category ) {


  const url = 'http://localhost:3001';
  return fetch(`${url}/${category}/posts`, { headers: { 'Authorization': 'whatever-you-want', 'Content-Type' : 'application/json' }})
    .then((res) =>  res.json()
    )

}

export function createPostAPI( post ) {
  const  keyPath = null
  const urlA = 'http://localhost:3001/posts/';

  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'whatever-you-want');
  var init = {
    method: 'POST',
    headers: headers
  };
  if (post) {
    init.body = JSON.stringify(post)
  }
  return fetch(urlA, init).then((response) => response.json())
}



export function editPostAPI( post ) {
  const  keyPath = null
  const urlA = 'http://localhost:3001/posts/' + post.id;

  console.log('--- api fetch edit post ## ' + JSON.stringify(urlA));
  console.log('--- api fetch edit post ## ' + JSON.stringify(post));

  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'whatever-you-want');
  var init = {
    method: 'PUT',
    headers: headers
  };
  if (post) {
    init.body = JSON.stringify(post)
  }
  return fetch(urlA, init).then((response) => response.json())
}

export function deletePostAPI( id ){
  const  keyPath = null
  const urlA = 'http://localhost:3001/posts/' + id;


  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'whatever-you-want');
  var init = {
    method: 'DELETE',
    headers: headers
  };
 
  return fetch(urlA, init).then((response) => response.json())
}

export function votePostAPI( post, vote ) {
  const  keyPath = null
  const urlA = 'http://localhost:3001/posts/' + post.id;


  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'whatever-you-want');
  var init = {
    method: 'POST',
    headers: headers
  };
  if (post) {
    init.body = JSON.stringify({option : vote})
  }
  return fetch(urlA, init).then((response) => response.json())
}

export function voteCommentAPI( comment, vote ) {
  const  keyPath = null
  const urlA = 'http://localhost:3001/comments/' + comment.id;


  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'whatever-you-want');
  var init = {
    method: 'POST',
    headers: headers
  };
  if (comment) {
    init.body = JSON.stringify({option : vote})
  }
  return fetch(urlA, init).then((response) => response.json())
}

export function fetchPostComments( postId ){

 const  keyPath = null
  const urlA = 'http://localhost:3001/posts/' + postId +'/comments';


  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'whatever-you-want');
  var init = {
    method: 'GET',
    headers: headers
  };

  return fetch(urlA, init).then((response) => response.json())
}

export function createCommentAPI( comment ) {
  const  keyPath = null
  const urlA = 'http://localhost:3001/comments/';

  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'whatever-you-want');
  var init = {
    method: 'POST',
    headers: headers
  };
  if (comment) {
    init.body = JSON.stringify(comment)
  }
  return fetch(urlA, init).then((response) => response.json())
}

export function editCommentAPI( comment ) {
  const  keyPath = null
  const urlA = 'http://localhost:3001/comments/'+ comment.id;

  var headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'whatever-you-want');
  var init = {
    method: 'PUT',
    headers: headers
  };
  console.log(' comment body ' + JSON.stringify(comment))

  if(comment){
    init.body = JSON.stringify(comment);
  }

  console.log('## editComment body ' + JSON.stringify(init))
  return fetch(urlA, init).then((response) => response.json())
}

export function deleteCommentAPI( id, body, timestamp ) {
  const  keyPath = null
  const urlA = 'http://localhost:3001/comments/'+ id;

  var headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'whatever-you-want');
  var init = {
    method: 'DELETE',
    headers: headers
  };
  

  return fetch(urlA, init).then((response) => response.json())
}












