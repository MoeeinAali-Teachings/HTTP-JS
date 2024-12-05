const axios = require('axios');


const url = 'https://jsonplaceholder.typicode.com/posts';
const data = {
    title: 'moeein',
    body: 'This is a new post.',
    userId: 1,
};
const headers = {
    'Content-Type':'Application/json'
}
axios.post(url, data,headers)
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));



