import React from 'react'

export default function Arrowfunction() {
    const Hello = () =>{
        alert("Hello")
    }

    const Name = (name) => {
      alert("My name is " +name)
    }

    const Age = (age) => {
      alert(" My Age is " +age)
    }

    const Details =( n,a) => {
      alert(`My name is "'${n}" My age is "'${a}"`)
    }

  return (
    <div >
        <button onClick={Hello}>Hello</button>
        <>
        <button className="btn btn-primary m-2" onClick= { () => Name("Raksha") }> My Name is </button>
        </>
        <>
        <button className="btn btn-primary m-2" onClick={() => Age("23") }> My Age is </button>
        </>
        <>
        <button className="btn btn-warning m-1" onClick={( ) => Details ("'Raksha'" ,"'23'")  } > My details </button >
       
        </>
    </div>
  )
}
