import React from 'react'

const ButtonList = ({names}) => {
  return (
    <div className='flex p-2'>
        {names.map((button,index)=>(
            <>
                    <button className='m-2 rounded px-5 py-3 rounded-lg bg-gray-200'  key={index}>{button.name}</button>

              
            </>

        ))}



    </div>
  )
}

export default ButtonList