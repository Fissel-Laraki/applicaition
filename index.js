const express = require('express')
const app = express()


const PORT = process.env.PORT || 8080 
app.get("/path/:id",(req,res)=>{
  let id  = parseInt(req.params.id)
  if (isNaN(id)){
    res.send("Please a number")
  }else{
    res.send("salut "+id)
  }
})

app.listen(PORT,()=>{
  console.log("Serveur démarré")
})
