import React from 'react';
import { useSelector } from 'react-redux'
import ACTION_TYPES from '../../redux/actionTypes'
import HttpRequest from '../../http/httpRequest'
import URL from '../../http/urls'

import Nav from '../Nav';
import Slider from '../Slider';
import Footer from '../Footer';
import Card from '../Card';

function Home() {

    const data = useSelector(state => state.getPokemonsData);

    HttpRequest({
        url: URL.GET_POKEMONS.url,
        method: URL.GET_POKEMONS.method,
        data: null,
        begin: ACTION_TYPES.GET_POKEMONS_BEGIN,
        success: ACTION_TYPES.GET_POKEMONS_SUCCESS,
        failure: ACTION_TYPES.GET_POKEMONS_FAILURE
    })

    return (
        <div>
            <Nav />
            <Slider />
            <div className="container">
                {data && <Card data={data} />}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
