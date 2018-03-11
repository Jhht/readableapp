
export function fetchCategories( ){

	const url = 'http://localhost:3001';

	let headers = { headers: { 'Authorization': 'whatever-you-want', 'Accept' : 'application/json' }}

	return fetch(`${url}/categories`, headers)
		.then((res) =>  res.json())
		.then(data => data.categories)
		
}

export function fetchAllPosts( ){

	const url = 'http://localhost:3001';

	console.log('--- api fetch');
	return fetch(`${url}/posts`, { headers: { 'Authorization': 'whatever-you-want', 'Accept' : 'application/json' }})
		.then((res) =>  res.json()
		)
		
}

export function fetchPostsByCategory( category ) {


	const url = 'http://localhost:3001';

	console.log('--- api fetch posts by cat');
	return fetch(`${url}/${category}/posts`, { headers: { 'Authorization': 'whatever-you-want', 'Accept' : 'application/json' }})
		.then((res) =>  res.json()
		)

}

export function createPostAPI( post ) {
  const  keyPath = null
	const urlA = 'http://localhost:3001/posts/';

	console.log('--- api fetch create post ## ' + JSON.stringify(post));
	 return new Promise((resolve, reject) => {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', "_AUTH_KEY");
      var init = {
        method: 'POST',
        headers: headers
      };
      if (post) {
        init.body = JSON.stringify(post)
      }
      fetch(urlA, init).then((response) => {
        return response.text().then(text => {
          return text
            ? JSON.parse(text)
            : {}
        });
      }).then((data) => {
          resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });


}

