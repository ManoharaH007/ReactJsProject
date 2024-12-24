import React from 'react'

function Card({userName,btnText="Explore"}) {
    console.log(userName)
  return (
    <div className="flex flex-col rounded-xl  p-4 mb-25"
        style={{
          border: '0.88px solid red',
  
         
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="40"
            height="40"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{userName}</h1>
            <h1 className="font-bold font-RubikBold">{userName}</h1>
          </div>
          <div className="flex  justify-between font-mono">
            
            <button className="bg-yellow-400">{btnText}</button>
          </div>
        </div>
      </div>
  
  )
}

export default Card
