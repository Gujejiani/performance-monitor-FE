import io from 'socket.io-client'
const options = {
    auth: {
        token: 'sdsdssdsxs'
    }
}
const socket = io.connect('http://localhost:3000',options) // our server is at 3000

// socket.on('welcome', (data)=>{
//     console.log(data)
// aq iyo gio
// })

export default socket