// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.headerContainer}>
                <Link className={styles.logo} to="/series" />
            </div>
        );
    }
}

export default Header;
