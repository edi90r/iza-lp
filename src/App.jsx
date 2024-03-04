import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Layout from './Layout';
import ForgetPassword from './authActions/ForgetPassword';
import AuthActions from './authActions/AuthActions';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Layout />} />
            <Route path='/forget-password' element={<ForgetPassword />} />
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
