
const connect = require('./configs/db')
const app = require('./index')

app.listen(4000,async()=>{
    try {
        await connect();
        console.log("Listening to port 4000");
    } catch (err) {
        console.log("something went wrong")
    }
})