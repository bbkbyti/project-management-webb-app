import React from 'react'
import Input from './Input'

export default function NewProject() {
    return (
        <div>
            <menu>
                <li><button></button></li>
                <li><button></button></li>
            </menu>
            <div>
                <Input label="Title" />
                <Input label="Description" textarea />
                <Input label="Due Date" />
            </div>
        </div>
    )
}
