import React, {Fragment} from 'react';
import {Link} from 'gatsby';
import theme from './layout.module.css';

import 'normalize.css';

const HeaderLink = ({to, selected, children}) => (
    <Link to={to} className={selected ? theme['linkSelected'] : theme['link']}>
        {children}
    </Link>
)

const Header = ({selected}) => (
    <div className={theme['headerWrapper']}>
        <header>
            <h3>Jonathan Silva</h3>
            <ul>
                {/* For now, just hardcode the navigable pages */}
                <li>
                    <HeaderLink to='/about' selected={selected === 'About'}>
                        {"About"}
                    </HeaderLink>
                </li>
                <li>
                    <HeaderLink to='/projects' selected={selected === 'Projects'}>
                        {"Projects"}
                    </HeaderLink>
                </li>
                <li>
                    <HeaderLink to='/blog' selected={selected === 'Blog'}>
                        {"Blog"}
                    </HeaderLink>
                </li>
            </ul>
        </header>
    </div>
)

export default ({selected, children}) => (
    <Fragment>
        <Header selected={selected}/>
        <div className={theme['contentShell']}>
            {children}
        </div>
    </Fragment>
)