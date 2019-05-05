import * as React from 'react';
import classNames from 'classnames/bind';
const styles = require('./stylesheet.scss');
const cx = classNames.bind(styles);

function Home() {
    return (<div className={cx("home")}>Home</div>)
}

export default Home;