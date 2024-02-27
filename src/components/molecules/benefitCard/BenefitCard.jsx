import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import BenefitImage from '../../atoms/benefitImage/BenefitImage';
import Title from '../../atoms/title/Title';
import Paragraph from '../../atoms/paragraph/Paragraph';

const BenefitCard = ({ title, description, image, className }) => {
    const classes = twMerge('card w-96 bg-base-100 shadow-xl text-left', className);

    return (
        <div className={classes}>
            <div className='card-body'>
                <Title variant='secondary' className='text-base'>
                    {title}
                </Title>
                <Paragraph variant='secondary'>{description}</Paragraph>
            </div>
            <BenefitImage type={image} alt={title} />
        </div>
    );
};

BenefitCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default BenefitCard;
