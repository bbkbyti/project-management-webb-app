import { useRef, useState } from 'react'
import Input from './Input'


// Next: 
// add some validation for the input

export default function NewProject({ onAdd, onCancel }) {
    const [error, setError] = useState(false);


    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === ''
            || enteredDescription.trim() === ''
            || enteredDueDate.trim() === '') {

            setError(true)
            return;
        }
        setError(false);

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    return (
        <>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button onClick={onCancel}
                            className='text-stone-800 hover:text-stone-950'>Cancel
                        </button>
                    </li>
                    <li>
                        <button onClick={handleSave}
                            className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type='text' ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea />
                    <Input type='date' ref={dueDate} label="Due Date" />
                    {error && <p className=' flex items-center text-3xl'>You entered Invalid Entry. Please try again!</p>}
                </div>
            </div>
        </>
    )
}
