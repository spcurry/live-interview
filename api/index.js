/**
 * TO-DO:  
 *  - Create an express router
 *  - Define the "customers" API route here.
 *  - Export the router to be used by "../index.js"
 */

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// respond with "hello world" when a GET request is made to the homepage
app.get('/customers', cors(), async (req, res) => {

    const options = {
        // hostname: 'interview.form.io',
        // // port: 443,
        // path: '/customers/submission',
        // method: 'GET',
        headers: {
            'x-token': 'emJCDsJIYxn2yHB2uKFx8Y3EahjxBf'
        }
    };


    const response = await fetch('https://interview.form.io/customers/submission', options);
    const data = await response.json();
    res.send(data);

})

app.listen(8000, () => {
    console.log(`Example app listening on port 8000`)
})
