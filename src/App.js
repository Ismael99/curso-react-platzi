import React, {Fragment} from 'react';
import {ListOfCategory} from './components/ListOfCategory'
import {ListOfPhotoCard} from './components/ListOfPhotoCard'
import {Logo} from './components/Logo'
import {GlobalStyles} from './styles/GlobalStyles'; 

export const App = () =>(
    <Fragment>
        <GlobalStyles></GlobalStyles>
        <Logo/>
        <ListOfCategory></ListOfCategory>
        <ListOfPhotoCard/>
    </Fragment>
    
)