import express from 'express'
import cors from "cors"
const app = express()
const port = 3000
import mongoose from 'mongoose';
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://Esmer:esmer123@cluster0.zbeu6hy.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(()=>console.log("not connected"))

  const menuSchema = new mongoose.Schema({
    name: String,
    title: String,
    price:Number
  });
  const Menu = mongoose.model('Menuj', menuSchema);
app.get('/menu', async (req, res) => {
    const getAllMenu=await Menu.find()
  res.send(getAllMenu)
})

app.get('/menu/:id', async (req, res) => {
    let {id}=req.params
    const getMenu=await Menu.findById(id)
  res.send(getMenu)
})
app.post('/menu', async (req, res) => {
    const obj=req.body
    const postMenu=new Menu(obj)
    await postMenu.save()
  res.send(postMenu)
})

app.put('/menu/:id', async (req, res) => {
    const obj=req.body
    let {id}=req.params
    const putMenu=await Menu.findByIdAndUpdate(id,obj)
  res.send(putMenu)
})

app.delete('/menu/:id', async (req, res) => {
    let {id}=req.params
    const deleteMenu=await Menu.findByIdAndDelete(id)
  res.send(deleteMenu)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})