import React from 'react';
import ReactDOM from 'react-dom'
import Form from '../index'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import renderer from "react-test-renderer"

afterEach(cleanup)

it("Renders without crashing", ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Form></Form>, div)
})

it("Renders button correctly", ()=>{
    const {getByTestId} = render(<Form buttonlabel='Enviar'></Form>)
    expect(getByTestId('button')).toHaveTextContent('Enviar')
})

it("Matches snapshot", ()=>{
    const tree = renderer.create(<Form buttonlabel='Enviar'></Form>).toJSON();
    expect(tree).toMatchSnapshot();
})