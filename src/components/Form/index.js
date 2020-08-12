

import React, { useReducer } from 'react';

function Form(props) {
    const [state, dispatch] = useReducer(reducer, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.sendForm(state)

    }

    function reducer(state, action) {
        switch (action.type) {
            case 'name':
                return { ...state, name: action.payload };
            case 'age':
                return { ...state, age: action.payload };
            case 'phone':
                return { ...state, phone: action.payload };
            case 'email':
                return { ...state, email: action.payload };
            case 'model':
                return { ...state, model: action.payload };
            case 'year':
                return { ...state, year: action.payload };
            default:
                return { ...state }
        }
    }


    return (
        <div className='row' style={{ width: '100%', marginTop:30 }}>
            <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
            <h5>Alta conductor</h5>
                <p>Ingrese datos correspondientes</p>
                <form onSubmit={handleSubmit} className="form-group" style={{ margin: 40 }}>
                    <div className="form-group">
                        <input data-testid='input' onChange={event => {
                            dispatch({ type: 'name', payload: event.target.value });
                        }} type="text" className="form-control" placeholder="Nombre" />
                    </div>
                    <div className="form-group">
                        <input data-testid='input' onChange={event => {
                            dispatch({ type: 'age', payload: event.target.value });
                        }} type="text" className="form-control" placeholder="Edad" />
                    </div>
                    <div className="form-group">
                        <input data-testid='input' onChange={event => {
                            dispatch({ type: 'phone', payload: event.target.value });
                        }} type="text" className="form-control" placeholder="Telefono" />
                    </div>
                    <div className="form-group">
                        <input data-testid='input' onChange={event => {
                            dispatch({ type: 'email', payload: event.target.value });
                        }} type="text" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input data-testid='input' onChange={event => {
                            dispatch({ type: 'model', payload: event.target.value });
                        }} type="text" className="form-control" placeholder="Modelo" />
                    </div>
                    <div className="form-group">
                        <input data-testid='input' onChange={event => {
                            dispatch({ type: 'year', payload: event.target.value });
                        }} type="text" className="form-control" placeholder="Año" />
                    </div>
                    <button data-testid='button' type="submit" className="btn btn-primary mb-2" style={{ width: '100%' }}>{props.buttonlabel}</button>
                </form>
            </div>
            <div style={{ backgroundImage: `url(../../../assets/images/uber.png)`, height: 500 }} className='col-lg-6 col-md-4 col-sm-12 col-xs-12'>
            </div>
        </div>
    );
}

export default Form;