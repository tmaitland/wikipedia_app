// const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${}&format=json&callback=?`
const wiki_link = 'https://en.wikipedia.org/wiki'
const randomEndpoint = '/Special:Random'

const searchTerm = document.querySelector(".searchTerm")
const search = document.querySelector(".search")
const random = document.querySelector(".random")
const output = document.querySelector(".output")

//function definitions
function getWiki(){
    const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`
    $.ajax({
        url: api_url,
        dataType: "json",
        success: data => {
            output.innerHTML =""
            for(let i = 0; i<data[1].length; i++){
            output.innerHTML += `
                <li>
                <a href="${data[3][i]}">${data[1][i]}</a>
                <p>${data[2][i]}</p>
                </li>
            `
            }
            //data[1] is for titles
            //data[2] is for description
            //data[3] is for links

            console.log(data)
        },
        error: error => {
            console.log(error)
        }
    })
}

//call functions and event listeners
search.addEventListener("click", getWiki)
random.addEventListener("click", function(){
    window.open(`${wiki_link}${randomEndpoint}`)
})
searchTerm.addEventListener("keypress", function(e) {
    if(e.key=="Enter") {
        getWiki(searchTerm.value)
    }
})