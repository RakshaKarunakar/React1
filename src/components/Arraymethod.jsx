import React from 'react'

export default function Arraymethod() {
    const Fruits= ["apple", "banana","orange", "mango"]
    const Details = [{
        name: "raksha",
        course: "BE",
        clgname: "KIT",
        address:"Manglore"
    }]

  return (
    <div>
        {Fruits[0]} 
        <ol>
            {Fruits.map((row)=>{
                return <li>{row}</li>
            })}
        </ol>
    
    <ol>
        {Details.map((row)=>{
            return (
                <div>
                    <p><strong>Name:</strong>{row.name}</p>
                    <p><strong>Course:</strong>{row.course}</p>
                    <p><strong>Clgname:</strong>{row.clgname}</p>
                    <p><strong>Address:</strong>{row.address}</p>
                </div>
            )
        })}
    </ol>

    </div>
  )
}
