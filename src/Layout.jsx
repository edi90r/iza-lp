import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';
import Hero from './components/organism/hero/Hero';
import Navbar from './components/organism/navbar/Navbar';
import Container from './components/atoms/container/Container';
import HeroCopy from './components/molecules/heroCopy/HeroCopy';
import HeroIllustration from './assets/illustrations/hero_Illustration.svg?react';
import LineRight from './assets/line-right.svg?react';
import LineLeft from './assets/line-left.svg?react';
import Section from './components/atoms/section/Section';
import './App.css';
import Title from './components/atoms/title/Title';
import Paragraph from './components/atoms/paragraph/Paragraph';
import Button from './components/atoms/button/Button';
import Wrapper from './components/atoms/wrapper/Wrapper';
import FeatureItem from './components/molecules/featureItem/FeatureItem';
import BenefitCard from './components/molecules/benefitCard/BenefitCard';
import Footer from './components/atoms/footer/Footer';
import CookieBanner from './components/molecules/cookieBanner/CookieBanner';
import { featureArr, benefitsArr } from './utils/sectionsData';
import { handleClick } from './utils/helpers';

const Layout = () => {
    const sectionRefs = {
        hero: useRef(null),
        about: useRef(null),
        features: useRef(null),
        benefits: useRef(null),
        contact: useRef(null),
    };

    return (
        <>
            <Navbar sectionRefs={sectionRefs} />
            <Hero className='relative  min-h-[600px]' id='hero' sectionRef={sectionRefs.hero}>
                <Container className='grid grid-cols-2 place-items-center'>
                    <HeroCopy
                        className='z-20 justify-self-start hover:cursor-default'
                        sectionRefs={sectionRefs}
                        handleClick={handleClick}
                    />

                    <div className='justify-self-end lg:pl-16 lg:pt-16'>
                        <HeroIllustration className='w-full' />
                    </div>
                    <LineLeft className='absolute bottom-0 left-0' />
                </Container>
            </Hero>
            <Section id='about' className='relative text-center' sectionRef={sectionRefs.about}>
                <Container>
                    <Title variant='secondary'> Iza - Innowacyjny Zdalny Asystent</Title>
                    <Paragraph variant='secondary' className='py-6'>
                        Aplikacja Iza to nowoczesne narzędzie, które zapewnia kompleksową opiekę
                        zdrowotną w sposób wygodny i dostępny. Dzięki spersonalizowanym funkcjom i
                        łatwemu kontaktowi z ekspertami, użytkownicy mogą szybko otrzymać potrzebną
                        pomoc. Iza umożliwia także uczestnictwo w zajęciach online, zapewniając
                        wsparcie zdrowotne bez względu na odległość.
                    </Paragraph>
                    <Paragraph variant='tertiary' className='py-4 text-base font-700'>
                        Pobierz Aplikację Dzisiaj i Zacznij Odkrywać Swoje Nowe Możliwości!
                    </Paragraph>
                    <Button
                        variant='primary'
                        className='px-8 py-4'
                        tag='link'
                        path='https://app.e-iza.pl'
                    >
                        Pobierz Aplikację
                    </Button>
                    <LineRight className='absolute bottom-0 right-0' />
                </Container>
            </Section>
            <Section
                id='features'
                className='relative text-center'
                sectionRef={sectionRefs.features}
            >
                <Container>
                    <Title variant='secondary'> Funkcje:</Title>
                    <Paragraph variant='secondary' className='py-6'>
                        Odkryj naszą aplikację, która zapewnia łatwy dostęp do kompleksowych
                        funkcji, umożliwiając Ci lepszą opiekę zdrowotną w zasięgu Twojej ręki.
                    </Paragraph>
                    <Wrapper className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
                        {featureArr.map((feature) => (
                            <FeatureItem
                                key={uuidv4()}
                                feature={feature.title}
                                description={feature.description}
                                icon={feature.iCon}
                                className='z-20'
                            />
                        ))}
                    </Wrapper>
                    <LineLeft className='absolute bottom-0 left-0' />
                </Container>
            </Section>
            <Section
                id='benefits'
                className='relative text-center'
                sectionRef={sectionRefs.benefits}
            >
                <Container>
                    <Title variant='secondary'>Korzyści:</Title>
                    <Paragraph variant='secondary' className='py-6'>
                        Odkryj zalety korzystania z naszej aplikacji - spersonalizowaną opiekę na
                        każdym kroku oraz łatwą komunikację z ekspertami zawsze w zasięgu Twojej
                        ręki.
                    </Paragraph>
                    <Wrapper className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16'>
                        {benefitsArr.map((benefit) => (
                            <BenefitCard
                                key={uuidv4()}
                                title={benefit.title}
                                description={benefit.description}
                                image={benefit.image}
                                className='z-20'
                            />
                        ))}
                    </Wrapper>
                    <LineRight className='absolute bottom-0 right-0' />
                </Container>
            </Section>
            <Footer id='contact' sectionRef={sectionRefs['contact']}>
                <p>Copyright © 2024 - All right reserved by r_Com</p>
            </Footer>
            <CookieBanner />
        </>
    );
};

export default Layout;
