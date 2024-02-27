import { useState } from 'react';
import Paragraph from '../../atoms/paragraph/Paragraph';
import Button from '../../atoms/button/Button';
import Container from '../../atoms/container/Container';
import Toggle from '../../atoms/toggle/Toggle';
import Collapse from '../collapse/Collapse';

const CookieBanner = () => {
    const [acceptedCookies, setAcceptedCookies] = useState(
        JSON.parse(localStorage.getItem('acceptedCookies')),
    );
    const [cookies, setCookies] = useState(
        JSON.parse(localStorage.getItem('acceptedCookies')) || {
            necessary: false,
            marketing: false,
            analitics: false,
        },
    );

    const acceptCookies = () => {
        if (cookies.marketing || cookies.analitics) {
            cookies.necessary = true;
        }

        localStorage.setItem('acceptedCookies', JSON.stringify(cookies));
        setAcceptedCookies({ ...cookies, necessary: true });
    };

    if (acceptedCookies && acceptedCookies.necessary) {
        return null;
    }

    return (
        <div className='fixed bottom-0 left-0 right-0 z-50 bg-pureWhite p-4 text-black'>
            <Container className='grid'>
                <Paragraph variant='tertiary' className='pb-4'>
                    Ta strona używa plików cookie, aby zapewnić Ci lepsze doświadczenie użytkownika.
                    Korzystając z naszej strony, zgadzasz się na naszą politykę dotyczącą plików
                    cookie. Dowiedz się więcej o tym, jak używamy plików cookie i jak możesz je
                    kontrolować w naszej Polityce Prywatności.
                </Paragraph>
                <div className='py-8'>
                    <Collapse
                        title='Wymagane'
                        description='Wykorzystujemy pliki cookie niezbędne do zapewnienia poprawnego działania naszej strony internetowej. Korzystając z niej, zgadzasz się na ich użycie. Więcej informacji znajdziesz w naszej Polityce Prywatności.'
                        className='collapse-custom'
                        checked
                    >
                        <Toggle
                            checked={cookies.necessary || cookies.marketing || cookies.analitics}
                            onClick={() =>
                                setCookies({ ...cookies, necessary: !cookies.necessary })
                            }
                        />
                    </Collapse>
                    <Collapse
                        title='Marketingowe'
                        description='Czy chciałbyś otrzymywać spersonalizowane oferty i reklamy od naszych partnerów? Zgoda na pliki cookie marketingowe pozwoli nam dostosować treści reklamowe do Twoich zainteresowań. Zatwierdź, jeśli zgadzasz się na ich użycie.'
                        className='collapse-custom'
                        checked
                    >
                        <Toggle
                            className='z-20'
                            checked={cookies.marketing}
                            onClick={() =>
                                setCookies({ ...cookies, marketing: !cookies.marketing })
                            }
                        />
                    </Collapse>
                    <Collapse
                        title='Analityczne'
                        description='Pozwól nam śledzić działania użytkowników na naszej stronie za pomocą plików cookie analitycznych. Te dane pomagają nam zrozumieć, jak ludzie korzystają z naszej strony i jak możemy ją ulepszyć. Zgoda na pliki cookie analityczne jest ważna dla poprawy jakości naszych usług.'
                        className='collapse-custom'
                        checked
                    >
                        <Toggle
                            checked={cookies.analitics}
                            onClick={() =>
                                setCookies({ ...cookies, analitics: !cookies.analitics })
                            }
                        />
                    </Collapse>
                </div>
                <Button
                    variant='primary'
                    onClick={acceptCookies}
                    className='max-w-10 justify-self-end'
                >
                    Akceptuje
                </Button>
            </Container>
        </div>
    );
};

export default CookieBanner;
