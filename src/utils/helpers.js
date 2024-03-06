import { confirmPasswordReset, getAuth, applyActionCode } from 'firebase/auth';

export const handleClick = (event, sectionRefs, sectionId) => {
    event.preventDefault();

    sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
};

export const confirmThePasswordReset = async (oobCode, newPassword) => {
    if (!oobCode || !newPassword) return;
    const auth = getAuth();
    await applyActionCode(auth, oobCode);
    return await confirmPasswordReset(auth, oobCode, newPassword);
};
