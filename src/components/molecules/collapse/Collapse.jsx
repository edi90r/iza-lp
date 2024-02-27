import propTypes from 'prop-types';
import Title from '../../atoms/title/Title';
import Paragraph from '../../atoms/paragraph/Paragraph';
import { twMerge } from 'tailwind-merge';

const Collapse = ({ title, description, checked, children, className }) => {
    const classes = twMerge('collapse collapse-arrow bg-base-200', className);
    return (
        <div className={classes}>
            <input type='radio' name='my-accordion-2' checked={checked} />
            <Title
                variant='secondary'
                className='collapse-title-custom collapse-title relative text-xl font-medium'
            >
                {title}
                <div className='absolute right-0 top-1/2 z-20 -translate-y-1/2'>{children}</div>
            </Title>
            <Paragraph variant='secondary' className='collapse-content'>
                <p>{description}</p>
            </Paragraph>
        </div>
    );
};

Collapse.propTypes = {
    title: propTypes.string,
    description: propTypes.string,
    checked: propTypes.bool,
    children: propTypes.node,
    className: propTypes.string,
};

export default Collapse;
