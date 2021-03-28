import React, {useState, useEffect, Fragment} from 'react';
import {Category} from '../Category'
import {List, Item} from './styles';
//https://petgram-server-ismael-ismael99.vercel.app/categories

export const ListOfCategory = () =>{
    const [categorias, setCategorias] = useState([]);
    const [showFixed, setShowFixed] = useState(false);
    useEffect(() => {
        window.fetch('https://petgram-server-ismael-ismael99.vercel.app/categories')
        .then(res => res.json())
        .then(response => {setCategorias(response)})
    }, []);
    //Dependencias para ejecutarse, vacio, solo en el renderizado se ejecutara


    useEffect(()=>{
        const onScroll = e =>{
            const newShowFixed = window.scrollY > 200
            showFixed !== newShowFixed && setShowFixed(newShowFixed);
        }
        document.addEventListener('scroll', onScroll)
        return () => document.removeEventListener('scroll', onScroll);
    }, [showFixed])
    const renderList = (fixed) =>(
        <List className={fixed? 'fixed': ''}>
        {
            categorias.map((category, key) => <Item><Category key={category.id} {...category} /></Item>)
        }
    </List>
    )
    //Show fixed = true, entonces renderiza el componente
    return(
        <Fragment>
            {renderList()}
            {showFixed && renderList(true)}
        </Fragment>
    )
}