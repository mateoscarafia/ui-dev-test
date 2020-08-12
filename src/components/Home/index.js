import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import ACTION_TYPES from '../../redux/actionTypes'
import HttpRequest from '../../http/httpRequest'
import URL from '../../http/urls'

import Form from '../Form';

function Home() {

    const data = useSelector(state => state.postTextData);
    const [body, setBody] = useState(null);

    HttpRequest({
        url: URL.POST_TEXT.url,
        method: URL.POST_TEXT.method,
        data: body,
        begin: ACTION_TYPES.POST_TEXT_BEGIN,
        success: ACTION_TYPES.POST_TEXT_SUCCESS,
        failure: ACTION_TYPES.POST_TEXT_FAILURE
    })

    return (
        <div>
            <div className="container">
                <Form sendForm={(formBody) => { setBody(formBody) }} />
                {<p>{data?.text}</p>}
            </div>
        </div>
    );
}

export default Home;
