const deleteBtn = document.querySelectorAll('.delete')
const logItem = document.querySelectorAll('span.not')
const formToggle = document.querySelector('#formToggle')
const editBtn = document.querySelectorAll('.edit')
const editSubmit = document.querySelector('#editSubmit')
const closeBtn = document.getElementById('close')

Array.from(editBtn).forEach((el) => {
    el.addEventListener('click', editEntry)
})

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteEntry)
})

closeBtn.addEventListener('click', editEntry)


async function editEntry(){
    const formModal = document.getElementById('formModal')

    if(formModal.className === 'fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-ful'){
        formModal.className = 'fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-ful'
    } else {
        formModal.className = 'fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-ful'
    }

    const entryId = this.parentNode.parentNode.id
    console.log(`entryID: ${entryId}`)

    try { 
        const response = await fetch(`entries/${entryId}`, {
            method: 'get',
            headers: {'Content-type': 'application/json'}
        })
        const data = await response.json()
        console.log(data)
        document.updatedEntry.date.value = data[0].date
        document.updatedEntry.painScale.value = data[0].painScale
        document.updatedEntry.medsTaken.value = data[0].medsTaken
        document.updatedEntry.length.value = data[0].length
        document.updatedEntry.triggers.value = data[0].triggers
        document.updatedEntry.notes.value = data[0].notes
    } catch(err){
        console.log(err)
    }

    editSubmit.addEventListener('click', updateEntry)

    async function updateEntry(e){
        e.preventDefault()
        console.log("entryId:", entryId)
        try{
            const response = await fetch('entries/editEntry', {
                method: 'put',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    'entryIdFromJSFile': entryId,
                    date: document.updatedEntry.date.value, 
                    painScale: document.updatedEntry.painScale.value, 
                    medsTaken: document.updatedEntry.medsTaken.value, 
                    length: document.updatedEntry.length.value, 
                    triggers: document.updatedEntry.triggers.value,
                    notes: document.updatedEntry.notes.value
                })
            })
            const data = await response.json()
            console.log(data)
            location.reload()
        }catch(err){
            console.log(err)
        }
    }
}



async function deleteEntry(){
    console.log('clicked')
    const entryId = this.parentNode.parentNode.id
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

if(formToggle){
    formToggle.addEventListener('click', displayForm)
}

function displayForm(){
    const form = document.querySelector('form')
    return form.className === 'hide' ? form.className = 'flex flex-col items-center gap-3' : form.className = 'hide'
}

