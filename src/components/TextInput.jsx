import React from 'react'

const TextInput = (props) => {
    return (
        <div className="col-12">
            <input className='form-control' required  {...props} />
            <div className='invalid-feedback'>{props.invalid}</div>
        </div>
    )
}

export default TextInput