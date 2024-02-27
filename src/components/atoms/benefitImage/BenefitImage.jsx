import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import Image1 from '../../../assets/images/benefits_photo-1.jpg';
import Image2 from '../../../assets/images/benefits_photo-2.jpg';
import Image3 from '../../../assets/images/benefits_photo-3.jpg';

const BenefitImage = ({ type, alt }) => {
    const classes = twMerge('max-h-64');

    const image = {
        image1: (
            <figure className={classes}>
                <img src={Image1} alt={alt} />
            </figure>
        ),
        image2: (
            <figure className={classes}>
                <img src={Image2} alt={alt} />
            </figure>
        ),
        image3: (
            <figure className={classes}>
                <img src={Image3} alt={alt} />
            </figure>
        ),
    };

    return image[type];
};

BenefitImage.propTypes = {
    type: PropTypes.oneOf(['image1', 'image2', 'image3']),
    alt: PropTypes.string.isRequired,
};

export default BenefitImage;
