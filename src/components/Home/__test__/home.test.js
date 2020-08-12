import React from 'react';
import ReactDOM from 'react-dom'
import Home from '../index'
import { Provider as ReduxProvider } from "react-redux";
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import renderer from "react-test-renderer"
import configureStore from "../../../redux/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

afterEach(cleanup)

it("Renders without crashing", ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<ReduxProvider store={reduxStore}><Home></Home></ReduxProvider>, div)
})
