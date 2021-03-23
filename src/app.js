const express = require('express')
const app = express()
const port = 3003;

app.use(express.static('./'));

app.listen(port, () => {
  console.log(`LightChat available at http://localhost:${port}`)
})
