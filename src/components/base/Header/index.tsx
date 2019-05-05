import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './stylesheet.scss';
const cx = classNames.bind(styles);

function Header() {
    return (<header className={cx("header")}>
        <div className={cx('logo')}>FlamingoBeom</div>
        <div>search</div>
        <ul className={cx('utils')}>
            <li>GitHub 아이콘</li>
            <li>LogIn</li>
        </ul>
    </header>)
}

export default Header;