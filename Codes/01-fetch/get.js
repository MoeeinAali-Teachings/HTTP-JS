async function getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data[2]))
        .catch(error => console.error('Error:', error));
}


getData()