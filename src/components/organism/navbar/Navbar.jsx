import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Container from '../../atoms/container/Container';
import Logo from '../../atoms/logo/Logo';
import { useScroll } from '../../../hooks/hooks';
import { twMerge } from 'tailwind-merge';
import { handleClick } from '../../../utils/helpers';

const Navbar = ({ sectionRefs }) => {
    const [active, setActive] = useState(false);
    const scrollY = useScroll();
    const classes = `fixed w-screen inset-x-0 left-1/2 z-50 -translate-x-1/2 flex items-center transition-{bg, text, min-h} duration-500 ease-in-out`;
    const conditionalClasses = active
        ? 'bg-pureWhite text-darkBlue min-h-20'
        : ' bg-transparent text-pureWhite min-h-16';

    useEffect(() => {
        if (scrollY === 0) {
            return setActive(false);
        }
        return setActive(true);
    }, [scrollY]);

    return (
        <nav className={twMerge(classes, conditionalClasses)}>
            <Container className='flex'>
                <Logo
                    className={`${active ? 'w-14' : 'w-12'} transition-{w} duration-300 ease-in-out hover:cursor-pointer`}
                    handleClick={(event) => handleClick(event, sectionRefs, 'hero')}
                />

                <div className='inline-flex flex-1 justify-end'>
                    <ul className='menu menu-horizontal'>
                        <li onClick={(event) => handleClick(event, sectionRefs, 'about')}>
                            <a href='#about'>O aplikacji IZA</a>
                        </li>
                        <li onClick={(event) => handleClick(event, sectionRefs, 'features')}>
                            <a href='#features'>Funkcje</a>
                        </li>
                        <li onClick={(event) => handleClick(event, sectionRefs, 'benefits')}>
                            <a>Korzyści</a>
                        </li>
                        <li onClick={(event) => handleClick(event, sectionRefs, 'contact')}>
                            <a>Kontakt</a>
                        </li>
                        <li>
                            <a
                                className={`rounded-md border-darkBlue hover:bg-pureWhite hover:text-darkBlue hover:shadow-custom ${active ? 'bg-darkBlue text-pureWhite' : 'bg-pureWhite text-darkBlue'}`}
                                href='#'
                            >
                                Zaloguj
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

Navbar.propTypes = {
    sectionRefs: propTypes.object.isRequired,
};

export default Navbar;
