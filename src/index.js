// import './style.css'
import './screens/displayCurrentTime'
import getTodaysDate from './getDate.js'

const date = getTodaysDate()

document.getElementById('app').innerHTML = `
<h1> Import statement example </h1>
<div>
    Today's date is : ${date}
</div>
`
