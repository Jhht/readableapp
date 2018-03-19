
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


