const url = "https://jsonplaceholder.typicode.com/posts"

async function createPost(header, body) {
    const config = {
        method: 'POST',
        headers: header,
        body: JSON.stringify(body)
    }
    const response = await fetch(url, config)
    const result = await response.json()
    console.log(result)
    console.log(result.title)
}

const header = {
    'Content-Type': 'application/json'
}
const data = {
    title: "mamad",
    body: "aali",
    userId: 1
}
createPost(header, data)
console.log(JSON.stringify(data))