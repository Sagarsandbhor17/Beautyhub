const express = require("express");
const cors=require("cors");
let PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Backend Project')
})

app.listen(PORT, async () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
