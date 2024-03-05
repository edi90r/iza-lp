import { useEffect } from 'react';
import { useNavigate, useSearchParams, Outlet } from 'react-router-dom';

const AuthActions = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    let mode = searchParams.get('mode');
    let oobCode = searchParams.get('oobCode');

    useEffect(() => {
        if (mode === 'resetPassword' && oobCode) {
            const resetPasswordPath = `/confirm-reset-password?oobCode=${oobCode}`;
            navigate(resetPasswordPath, { replace: true });
        }
    }, [mode, oobCode, navigate]);

    return <Outlet />;
};

export default AuthActions;
