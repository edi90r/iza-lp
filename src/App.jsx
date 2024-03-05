import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Layout from './Layout';
import AuthActions from './authActions/AuthActions';
import PasswordReset from './authActions/PasswordReset';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout />} />
            <Route path='/confirm-reset-password' element={<PasswordReset />} />
            <Route path='/auth/action' element={<AuthActions />} />
        </>,
    ),
);

function App() {
    return (
        <RouterProvider router={router}>
            <Layout />;
        </RouterProvider>
    );
}

export default App;
