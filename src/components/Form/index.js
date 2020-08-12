

import React, { useState } from 'react';

function Form(props) {

    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.sendForm({ text: text })

    }

    return (
        <form onSubmit={handleSubmit} className="form-inline" style={{ margin: 40 }}>
            <div className="form-group mx-sm-3 mb-2">
                <input onChange={event => {
                    setText(event.target.value);
                }} type="text" className="form-control" placeholder="Escribe algo..." />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Enviar</button>
        </form>
    );
}

export default Form;