import React from "react"

import "./account.css"

export default function Account(){
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='right'>
              <label>Username</label>
              <input type='text' required />
              <label>Email</label>
              <input type='text' required />
              <label>Password * </label>
              <input type='text' required />
              <button className='button'>Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
