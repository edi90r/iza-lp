import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import FeatureIcon from '../../atoms/featureIcon/FeatureIcon';
import Title from '../../atoms/title/Title';
import Paragraph from '../../atoms/paragraph/Paragraph';

const FeatureItem = ({ feature, description, icon, className }) => {
    const classes = twMerge('relative pl-16 text-left', className);

    return (
        <div className={classes}>
            <Title variant='secondary' className='text-base'>
                <FeatureIcon type={icon} />
                {feature}
            </Title>
            <Paragraph variant='secondary' className='mt-2 text-base leading-7 text-gray-900'>
                {description}
            </Paragraph>
        </div>
    );
};

FeatureItem.propTypes = {
    feature: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    icon: propTypes.string.isRequired,
    className: propTypes.string,
};

export default FeatureItem;
