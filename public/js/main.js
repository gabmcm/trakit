const deleteBtn = document.querySelectorAll('.del')
const logItem = document.querySelectorAll('span.not')
const formToggle = document.querySelector('#formToggle')
const editBtn = document.querySelectorAll('.edit')

Array.from(editBtn).forEach((el) => {
    el.addEventListener('click', editEntry)
})

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteEntry)
})

async function editEntry(){
    const form = document.querySelector('form')
    form.className = 'view'

    const entryId = this.parentNode.dataset.id
    try{
        const response = await fetch(`entries/${entryId}`, {
            method: 'get',
            headers: {'Content-type': 'application/json'}
        })
        const data = await response.json()
        console.log(data)
    } catch(err){
        console.log(err)
    }
}

async function deleteEntry(){
    console.log('clicked')
    const entryId = this.parentNode.id
    console.log(entryId)
    try{
        const response = await fetch('entries/deleteEntry', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'entryIdFromJSFile': entryId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

formToggle.addEventListener('click', displayForm)

function displayForm(){
    const form = document.querySelector('form')
    return form.className === 'hide' ? form.className = 'view' : form.className = 'hide'
}