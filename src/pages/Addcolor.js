import React from 'react'
import CustomInput from '../components/CustomInput'

const Addcolor = () => {
  return (
    <div className='mb-4 title'>
        <h3>Add Color</h3>
        <form action=''>
            <CustomInput type='color' label='Enter Color'/>
            <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Add Color</button>
        </form>
    </div>
  )
}

export default Addcolor