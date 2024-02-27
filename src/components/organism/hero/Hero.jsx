import propTypes from 'prop-types';

import { twMerge } from 'tailwind-merge';

const Hero = ({ children, className = '', id, sectionRef }) => {
    const classes = twMerge('hero bg-hero-pattern text-pureWhite', className);

    return (
        <div className={classes} id={id} ref={sectionRef}>
            {children}
        </div>
    );
};

Hero.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
    id: propTypes.string.isRequired,
    sectionRef: propTypes.object.isRequired,
};

export default Hero;
