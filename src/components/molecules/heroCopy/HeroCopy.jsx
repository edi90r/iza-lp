import propTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import Title from '../../atoms/title/Title';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Button from '../../atoms/button/Button';

const HeroCopy = ({ className = '', sectionRefs, handleClick }) => {
    const classes = twMerge('text-left', className);

    return (
        <div className={classes}>
            <Title variant='primary'>Gotowy na nowy standard opieki?</Title>
            <Paragraph variant='primary' className='py-6'>
                Odkryj wygodę i wsparcie, na które zasługujesz
            </Paragraph>
            <Button onClick={(event) => handleClick(event, sectionRefs, 'about')}>
                Dowiedz się więcej
            </Button>
        </div>
    );
};

HeroCopy.propTypes = {
    className: propTypes.string,
    sectionRefs: propTypes.object.isRequired,
    handleClick: propTypes.func.isRequired,
};

export default HeroCopy;
