import { useNavigate, useSearchParams } from 'react-router-dom';

const AuthActions = ({ children }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    let mode = searchParams.get('mode');
    let oobCode = searchParams.get('oobCode');

    if (mode === 'resetPassword' && oobCode) {
        console.log('test');
        const resetPasswordPath = `/confirm-reset-password?oobCode=${oobCode}`;

        navigate(resetPasswordPath, { replace: true });
    }

    return children;
};

export default AuthActions;
