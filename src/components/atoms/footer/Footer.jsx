import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Footer = ({ children, id, sectionRef }) => {
    const classes = twMerge('mt-24 bg-darkBlue p-10 pt-24 text-center text-pureWhite sm:pt-32');

    return (
        <footer id={id} className={classes} ref={sectionRef}>
            {children}
        </footer>
    );
};

Footer.propTypes = {
    children: propTypes.node.isRequired,
    id: propTypes.string.isRequired,
    sectionRef: propTypes.object.isRequired,
};

export default Footer;
