const url = 'https://jsonplaceholder.typicode.com/posts';
axios.get(url)
    .then(response => console.log(response.data[1].title))
    .catch(error => console.error('Error:', error));

