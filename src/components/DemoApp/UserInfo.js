import { useEffect, useState } from "react";

const UserInfo = () => {

  const [users,setUsers] = useState([])

  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setUsers(data)
    })
    .catch((err)=>console.log(err.message))
  },[])

  const deleteUsers = (userId) => {
    const index = users.findIndex((user)=>user.id === userId)
    setUsers([...users.slice(0,index),...users.slice(index+1)])
  }
  return(
    <div>
      <header>
        <h3>Starting With React</h3>
      </header>
      <main>
        {
          // (function(){
          //   let useArr = [];
          //   users.forEach((user)=>{
          //     useArr.push(
          //       <section key={user.id}>
          //         <div>Name: {user.name}</div>
          //         <div>Email: {user.email}</div>
          //         <div>Username: {user.username}</div>
          //         <div>Phone: {user.phone}</div>
          //         <br/><br/>
          //       </section>
          //     )
          //   })
          //   return useArr
          // })()
          users.map((user)=>{
            return (
            <section key={user.id}>
              <div>Name: {user.name}</div>
              <div>Email: {user.email}</div>
              <div>Username: {user.username}</div>
              <div>Phone: {user.phone}</div>
              <button onClick={()=>deleteUsers(user.id)}>Delete</button>
              <br/>
              <br/>
            </section>
            )
          })
        }
      </main>
    </div>
  )
}

export default UserInfo;