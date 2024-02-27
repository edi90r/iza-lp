import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const Toggle = ({ checked, onClick, dataAttrKey, className = '' }) => {
    const classes = twMerge('toggle', className);

    return (
        <input
            type='checkbox'
            className={classes}
            checked={checked}
            onClick={onClick}
            data-attrkey={dataAttrKey}
            value={checked ? 'on' : 'off'}
            readOnly
        />
    );
};

Toggle.propTypes = {
    checked: propTypes.bool,
    onClick: propTypes.func,
    type: propTypes.string,
    dataAttrKey: propTypes.string,
    value: propTypes.string,
    className: propTypes.string,
};

export default Toggle;
