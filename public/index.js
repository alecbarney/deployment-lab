console.log(`Javascript linked successfully!`)


function sendCritical(){
    console.log('Sent Critical')
    axios.get(`/api/critical`).then(
        res => {
            alert(res.data)
        }
    ).catch(err => console.log(err))
}
function sendWarning(){
    console.log('Sent Warning')
    axios.get(`/api/warning`).then(
        res => {
            alert(res.data)
        }
    ).catch(err => console.log(err))
}
function sendInfo(){
    console.log('Sent Info')
    axios.get(`/api/info`).then(
        res => {
            alert(res.data)
        }
    ).catch(err => console.log(err))
}
function sendError(){
    console.log('Sent Error')
    axios.get(`/api/error`).then(
        res => {
            alert(res.data)
        }
    ).catch(err => console.log(err))
}



document.getElementById('critical').addEventListener('click',sendCritical)
document.getElementById('warning').addEventListener('click',sendWarning)
document.getElementById('info').addEventListener('click',sendInfo)
document.getElementById('error').addEventListener('click',sendError)