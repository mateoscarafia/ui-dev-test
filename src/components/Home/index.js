import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import ACTION_TYPES from '../../redux/actionTypes'
import HttpRequest from '../../http/httpRequest'
import URL from '../../http/urls'

import Nav from '../Nav';
import Footer from '../Footer';
import Slider from '../Slider';
import Form from '../Form';

function Home() {

    const data = useSelector(state => state.postTextData);
    const [body, setBody] = useState(null);

    HttpRequest({
        url: URL.POST_FORM.url,
        method: URL.POST_FORM.method,
        data: body,
        begin: ACTION_TYPES.POST_FORM_BEGIN,
        success: ACTION_TYPES.POST_FORM_SUCCESS,
        failure: ACTION_TYPES.POST_FORM_FAILURE
    })

    return (
        <div>
            <Nav />
            <Slider />
            <div className="container">
                <Form buttonlabel='Enviar' sendForm={(formBody) => { setBody(formBody) }} />
                {<p data-testid='show-text'>{data?.text}</p>}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
