import { confirmPasswordReset, getAuth, verifyPasswordResetCode } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
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
        const auth = getAuth();
        const email = await verifyPasswordResetCode(auth, oobCode);
        const collectionRef = collection(db, 'passwordResetRequests');
        const docQuery = query(collectionRef, where('email', '==', email));
        const docSnap = await getDocs(docQuery);
        if (!docSnap.empty) {
            return docSnap.docs[0].data().role;
        } else {
            console.log('No document found for the given email');
        }
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
};

export const renderResetPasswordCopy = (userRole) => {
    switch (userRole) {
        case 'user':
            return 'Wpisz nowe hasło dla konta użytkownika';
        case 'admin':
            return 'Wpisz nowe hasło dla admina';
        default:
            return 'Wygląda na to, że twój link wygasł. Spróbuj ponownie.';
    }
};
