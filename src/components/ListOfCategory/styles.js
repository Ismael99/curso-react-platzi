import styled from 'styled-components';
import {fadeIn} from '../../styles/animations';

export const List = styled.ul`
    display:flex;
    overflow-x:auto;
    width:100%auto;
    &.fixed{
        ${fadeIn('.5s')}
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0,0,0,.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        padding-top: 15px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
    }
`

export const Item = styled.li`
    padding: 0 8px;
`