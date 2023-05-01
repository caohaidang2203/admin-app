import React from 'react'
import CustomInput from '../components/CustomInput'

const Addbrand = () => {
  return (
    <div className='mb-4 title'>
        <h3>Add brand</h3>
        <form action=''>
            <CustomInput type='text' label='Enter brand'/>
            <button className='btn btn-success border-0 rounded-3 my-5' type='submit'>Add brand</button>
        </form>
    </div>
  )
}

export default Addbrand