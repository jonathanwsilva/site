import React from 'react';
import { Link } from 'gatsby';
import theme from './layout.module.css';

import 'normalize.css';

const capitalize = (str) => `${str[0].toUpperCase()}${str.slice(1)}`

const HeaderLink = ({ to, selected, children }) => (
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
                {['about'].map((topic) => (
                    <li key={`nav-${topic}`}>
                        <HeaderLink to={`/${topic}`} selected={selected === topic}>
                            {capitalize(topic)}
                        </HeaderLink>
                    </li>
                ))}
            </ul>
        </header>
    </div>
)

export default ({ selected, children }) => (
    <div className={theme['wrapper']}>
        <Header selected={selected} />
        <div className={theme['contentShell']}>
            {children}
        </div>
    </div>
)