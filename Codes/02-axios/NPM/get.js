const axios = require('axios');

const url = 'https://api-rbt.mci.ir/content-management/public/ring-tones?rbtCoreId=12345';
axios.get(url)
    .then(response => console.log(response.data.data[0].coverURI))
    .catch(error => console.error('Error:', error));