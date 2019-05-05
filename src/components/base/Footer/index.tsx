import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './stylesheet.scss';
const cx = classNames.bind(styles);

function Footer() {
    return (<header className={cx("footer")}>Footer</header>)
}

export default Footer;