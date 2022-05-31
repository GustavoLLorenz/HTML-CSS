const inputTxt = document.querySelector('#input-text')
const inputCheckBox = document.querySelector('#input-checkbox')
const hrefLink = document.querySelector('#href')

hrefLink.addEventListener('click', function(e){
    e.preventDefault()
})

inputCheckBox.addEventListener('click', function(e){
    e.preventDefault()
})

inputTxt.addEventListener('keypress', function(e){
    if(e.key != 'a'){
        e.preventDefault()
    }
})


