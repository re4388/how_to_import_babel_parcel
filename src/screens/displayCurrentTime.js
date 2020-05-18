import getCurrentTime from '../utils/getCurrentTime'
const time = getCurrentTime()

document.getElementById('time').innerHTML = `
    <div>
    current Time is ${time}
    </div>
`