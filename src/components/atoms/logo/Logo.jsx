import propTypes from 'prop-types';
import logo from '../../../assets/logo.svg';
import { twMerge } from 'tailwind-merge';

const Logo = ({ className, handleClick }) => {
    const classes = twMerge(`w-16 ${className ? className : ''}`);
    return (
        <div className={classes} onClick={handleClick}>
            <a to={'/'} className='w-full'>
                <img src={logo} alt='logo' className='w-full' />
            </a>
        </div>
    );
};

Logo.propTypes = {
    className: propTypes.string,
    handleClick: propTypes.func,
};

export default Logo;
