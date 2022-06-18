import React from 'react'

export default function Input() {

  const postData = () => {
    console.log('hello')
  }

  return (
    <div>
        <input placeholder='user' type="text" />
        <input placeholder='message' type="text" />
        <button onClick={() => postData()}>Send Me</button>
    </div>
  )
}
