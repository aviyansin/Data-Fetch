import { useEffect, useState } from "react"


function App(){
const[products,setproducts]= useState([])


  useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res)=>{
return res.json()
})

.then((result)=>{

console.log(result)


setproducts(result)

})

  },[])
return (
<>

<h1>Ecommers Data</h1>

{


products.map((pro)=>{

  return (
    
    
    <div className="item">

  
    <div key={pro.Id}>
    <h3>user id ={pro.userId}</h3>
      <h3> id = {pro.id}</h3>
      <h4>Tittle = {pro.title}</h4>
      <h4>Body = {pro.body}</h4>
   

    </div>
    </div>

  )

}) 



}

</>




)}


export default App

