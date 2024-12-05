const button = document.querySelector('.btn')
const input = document.querySelector('#inputId')
const myUL = document.querySelector('.list')
let musics = []

button.addEventListener('click', () => {
    myUL.innerHTML = ""
    const rbtCoreId = input.value
    const url = `https://api-rbt.mci.ir/content-management/public/ring-tones?rbtCoreId=${rbtCoreId}`
    axios.get(url).then((response) => {
        musics = response.data.data
        printMusics()
    })


})

function printMusics() {

    if (musics.length ===0){
        myUL.innerHTML = "موزیکی یافت نشد"
    }else{
        musics.forEach((music, index) => {
            myUL.innerHTML += `<li><img src=${music.coverURI}>${music.ringToneName} - ${music.singerName}</li>`
        })
    }



}

