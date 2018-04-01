
export function fetchCategories( ){

	const url = 'http://localhost:3001';

	let headers = { headers: { 'Authorization': 'whatever-you-want', 'Content-Type' : 'application/json' }}

	return fetch(`${url}/categories`, headers)
		.then((res) =>  res.json())
		.then(data => data.categories)
		
}

export function fetchAllPosts( ){

	const url = 'http://localhost:3001';

	console.log('--- api fetch');
	return fetch(`${url}/posts`, { headers: { 'Authorization': 'whatever-you-want', 'Content-Type' : 'application/json' }})
		.then((res) =>  res.json()
		)
		
}

export function fetchPostById( id ){

	const url = 'http://localhost:3001';

	console.log('--- api fetch by id' + JSON.stringify(id));
	return fetch(`${url}/posts/${id}`, { headers: { 'Authorization': 'whatever-you-want', 'Content-Type' : 'application/json' }})
		.then((res) =>  res.json()
		)
		
}

export function fetchPostsByCategory( category ) {


	const url = 'http://localhost:3001';

	console.log('--- api fetch posts by cat');
	return fetch(`${url}/${category}/posts`, { headers: { 'Authorization': 'whatever-you-want', 'Content-Type' : 'application/json' }})
		.then((res) =>  res.json()
		)

}

export function createPostAPI( post ) {
  const  keyPath = null
	const urlA = 'http://localhost:3001/posts/';

	console.log('--- api fetch create post ## ' + JSON.stringify(post));
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

export function votePostAPI( post, vote ) {
  const  keyPath = null
	const urlA = 'http://localhost:3001/posts/' + post.id;

	console.log('--- api fetch votePost  ## ' + JSON.stringify(urlA));
	console.log('--- api fetch votePost  ## ' + JSON.stringify(post));

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


export function fetchPostComments( postId ){

 const  keyPath = null
	const urlA = 'http://localhost:3001/posts/' + postId +'/comments';

	console.log('--- api fetchPostComments  ## ' + JSON.stringify(urlA));
	console.log('--- api fetchPostComments  ## ' + JSON.stringify(postId));

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

  console.log('--- api fetch create comment ## ' + JSON.stringify(comment));
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

  console.log('--- api fetch edit comment ## ' + JSON.stringify(comment));
  var headers = new Headers();
  console.log('--- api editCommentAPI  ## ' + JSON.stringify(urlA));

  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', 'whatever-you-want');
  var init = {
    method: 'PUT',
    headers: headers
  };
  if (comment) {
    init.body = JSON.stringify(comment)
  }
  return fetch(urlA, {init, Date.now()}).then((response) => response.json())
}











