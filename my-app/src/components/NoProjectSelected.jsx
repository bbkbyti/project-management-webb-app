import React from 'react'
import Button from './Button.jsx'

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className='mt-24 text-center w-2/3'>
            <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a Project or select a new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>Create new Project</Button>
            </p>
        </div>
    )
}
