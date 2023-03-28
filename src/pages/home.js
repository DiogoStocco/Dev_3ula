import React from 'react';
import Titulo from './../components/Titulo/index';
import Filme from './../components/Filme/index';

export default function Home() {
    return (
        <div>
            <Titulo title="Home" text='Teste'/>
            <Filme />
        </div>
    )
}