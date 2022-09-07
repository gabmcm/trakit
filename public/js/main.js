const deleteBtn = document.querySelectorAll('.del')
const logItem = document.querySelectorAll('span.not')

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteEntry)
})

async function deleteEntry(){
    const entryId = this.parentNode.dataset.id
    try{
        const response = await fetch('entries/deleteEntry', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'entryFromJSFile': entryId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}