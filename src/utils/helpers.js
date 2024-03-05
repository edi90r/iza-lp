import { confirmPasswordReset, getAuth } from 'firebase/auth';
import { collection, getDoc, where } from 'firebase/firestore';
import { db } from '../firebase';

export const handleClick = (event, sectionRefs, sectionId) => {
    event.preventDefault();

    sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
};

export const confirmThePasswordReset = async (oobCode, newPassword) => {
    if (!oobCode || !newPassword) return;
    const auth = getAuth();
    return await confirmPasswordReset(auth, oobCode, newPassword);
};

export const checkUserRole = async (oobCode) => {
    if (!oobCode) return;
    try {
        const collectionRef = collection(db, 'passwordResetRequests');
        const query = await getDoc(collectionRef, where('oobCode', '==', oobCode));
        const data = query.data();
        console.log(data.role);

        return data.role;
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
};
