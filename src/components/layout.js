import React from 'react';
import theme from './layout.module.css';

export default ({children}) => {
    console.log(theme);
    return (
    <div className={theme['layout']}>
        {children}
    </div>
    )
}