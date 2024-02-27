import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Paragraph = ({ children, className = '', variant }) => {
    const paragraphVariant = {
        primary: 'text-lg text-pureWhite ',
        secondary: 'text-base text- gray-900',
        tertiary: 'text-sm text-gray-600',
    };

    const classes = twMerge(
        'text-pureWhite font-400 font-montserrat',
        paragraphVariant[variant],
        className,
    );

    return <p className={classes}>{children}</p>;
};

Paragraph.propTypes = {
    children: propTypes.string.isRequired,
    className: propTypes.string,
    variant: propTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default Paragraph;
