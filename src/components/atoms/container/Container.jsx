import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Container = ({ children, className, as = 'div' }) => {
    const classes = twMerge('container mx-auto px-4', className);
    const Component = as;

    return <Component className={classes}>{children}</Component>;
};

Container.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
    as: propTypes.string,
};

export default Container;
