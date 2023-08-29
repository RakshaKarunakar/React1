import React from 'react'

export default function Demo() {
    //function
    function ClickButton(){
        alert("Hello")
    }
  return (
    <>
    <h1>Hello world</h1>
    <button onClick={ClickButton}> submit </button>
    </>
  )
}
