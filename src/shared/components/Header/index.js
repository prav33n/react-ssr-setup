// @flow
import * as React from 'react';

import styles from './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.headerContainer}>
                <div className={styles.logo} />
            </div>
        );
    }
}

export default Header;
