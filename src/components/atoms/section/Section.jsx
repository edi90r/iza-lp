import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Section = ({ children, className = '', sectionRef, id }) => {
    const classes = twMerge('bg-pureWhite pt-24 sm:pt-32 w-full', className);

    return (
        <section className={classes} ref={sectionRef} id={id}>
            {children}
        </section>
    );
};

Section.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,
    sectionRef: propTypes.object,
    id: propTypes.string.isRequired,
};

export default Section;
