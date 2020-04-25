// TODO: investigate whether this hurts performance
// GOTO /about page (like a redirect, but needn't reload browser)

import {navigate} from 'gatsby';
export default ()=>{
    navigate('/about')
    return null
};