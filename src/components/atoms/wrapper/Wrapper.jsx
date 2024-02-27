import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Wrapper = ({ children, className }) => {
    const classes = twMerge('w-full flex flex-wrap', className);

    return <div className={classes}>{children}</div>;
};

Wrapper.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
};

export default Wrapper;
