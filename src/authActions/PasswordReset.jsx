import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { confirmThePasswordReset, checkUserRole } from '../utils/helpers';
import Logo from '../components/atoms/logo/Logo';
import FormInput from '../components/molecules/formInput/FormInput';
import Button from '../components/atoms/button/Button';

const PasswordReset = () => {
    const [formFields, setFormFields] = useState({});
    const [userRole, setUserRole] = useState('');
    const [error, setError] = useState({ message: '' });
    const [successMessage, setSuccessMessage] = useState(false);
    const [searchParams] = useSearchParams();

    let oobCode = searchParams.get('oobCode');

    const handleUserChange = (event) => {
        const { name, value } = event.currentTarget;
        setFormFields((formFields) => ({ ...formFields, [name]: value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (formFields.password !== formFields.repeatPassword) {
            return setError({ message: 'Hasła nie są takie same' });
        }

        try {
            if (oobCode) {
                await confirmThePasswordReset(oobCode, formFields.repeatPassword);
                const role = await checkUserRole(oobCode);
                setUserRole(role);
                setFormFields(null);
                setSuccessMessage(true);
            }
        } catch (error) {
            console.log(error);
            if (error.code === 'auth/invalid-action-code') {
                setError({ message: 'Link do resetowania hasła jest nieprawidłowy' });
            } else if (error.code === 'auth/expired-action-code') {
                setError({ message: 'Link do resetowania hasła wygasł' });
            }
            console.log(error.message);
        }
    };

    return (
        <div className=' bg-gradient-to-r flex h-screen w-full items-center justify-center from-slate-900 to-slate-700'>
            <div className='card relative flex flex-col items-center justify-center bg-pureWhite px-8 py-12 shadow-2xl lg:min-w-160'>
                <Logo className='w-24' />
                {successMessage && (
                    <>
                        <h3 className='mt-8 pt-2 font-hind font-700'>Hasło zostało zresetowane</h3>
                        <Button
                            tag='link'
                            path={
                                userRole === 'user'
                                    ? 'https://app.e-iza.pl/login'
                                    : 'https://admin.e-iza.pl/login'
                            }
                        >
                            Wróć do strony logowania
                        </Button>
                    </>
                )}
                <h3 className='mt-8 pt-2 font-hind font-700'>Podaj nowe hasło</h3>
                <form onSubmit={onSubmit} className='flex w-full flex-col'>
                    <FormInput
                        label='Hasło'
                        name='password'
                        type='password'
                        placeholder='Podaj hasło'
                        register={() => {}}
                        required={true}
                        error={error}
                        onChange={(e) => handleUserChange(e)}
                    />

                    <FormInput
                        label='Powtórz hasło'
                        name='repeatPassword'
                        type='password'
                        placeholder='Powtórz hasło'
                        register={() => {}}
                        required={true}
                        error={error}
                        onChange={(e) => handleUserChange(e)}
                    />
                    <Button type='submit' variant='primary' className='mt-8 w-full'>
                        Resetuj hasło
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default PasswordReset;
