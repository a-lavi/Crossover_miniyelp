const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

const express = require('express')
const cors = require('cors')

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(cors())
const restaurants = [
    {
        id: 1,
        restaurant: "Restaurant test1",
        tags: "tags test1",
        city: "city test1",
        comments: "comment test1"
    },
    {
        id: 2,
        restaurant: "Restaurant test2",
        tags: "tags test2",
        city: "city test2",
        comments: "comment test2"
    },
    {
        id: 3,
        restaurant: "Restaurant test3",
        tags: "tags test3",
        city: "city test3",
        comments: "comment test3"
    },
]


const port = process.env.PORT || 5050


app.get('/api/restaurants', (req, res) => {
    res.json({data:restaurants})
})



app.listen(port, () => console.log('conncted to mongoDB on port  '+ port))