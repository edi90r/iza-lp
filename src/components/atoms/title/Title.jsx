import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Title = ({ children, variant, className = '' }) => {
    const titleVariants = {
        primary: 'text-pureWhite font-700 text-4xl',
        secondary: 'text-black font-700 text-3xl',
        tertiary: 'text-gray-600 font-700 text-2xl',
    };

    const classes = twMerge(
        `text-pureWhite font-700 font-hind ${titleVariants[variant]}`,
        className,
    );

    switch (variant) {
        case 'primary':
            return <h1 className={classes}>{children}</h1>;
        case 'secondary':
            return <h2 className={classes}>{children}</h2>;
        case 'tertiary':
            return <h3 className={classes}>{children}</h3>;
        default:
            return <h1 className={classes}>{children}</h1>;
    }
};

Title.propTypes = {
    children: propTypes.node.isRequired,
    variant: propTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
    className: propTypes.string,
};

export default Title;
