import React, {useState} from 'react';

function Input({type, className, placeholder, onSubmit, inputRef}) {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type={type} className={className} placeholder={placeholder} onChange={handleChange} ref={inputRef}/>
        </form>
    );
}

export default Input;