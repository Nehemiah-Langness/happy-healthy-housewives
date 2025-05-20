import { BrowserRouter, Link, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router';
import { baseUrl } from './base-url';
import logo from './assets/logo.png';
import icon from './assets/icon.png';
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { HomePage } from './pages/HomePage';
import { useEffect } from 'react';
import { RecipeHomePage } from './pages/RecipeHomePage';
import { RecipeTagPage } from './pages/RecipeTagPage';
import { RecipePage } from './pages/RecipePage';

function Redirect({ to, replace }: { to: string; replace?: undefined } | { to?: undefined; replace: (current: string) => string }) {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (to) {
            navigate(to);
        } else if (replace) {
            navigate(replace(location.pathname));
        }
    }, [location.pathname, navigate, replace, to]);
    return null;
}

function App() {
    return (
        <BrowserRouter basename={baseUrl}>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path='/carb-e-meals/*'
                        element={<Redirect replace={(path) => path.toLowerCase().replace('/carb-e-meals', '/recipes/thm-e')} />}
                    />
                    <Route path='recipes'>
                        <Route index element={<RecipeHomePage />} />

                        <Route path=':tag'>
                            <Route index element={<RecipeTagPage />} />
                            <Route path=':recipe' element={<RecipePage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Layout() {
    const { pathname } = useLocation();

    return (
        <div className='flex-grow-1 d-flex flex-column overflow-hidden'>
            <nav className='navbar navbar-expand-lg bg-light'>
                <div className='container'>
                    <a className='navbar-brand' href='#'>
                        <img src={logo} className='d-none d-lg-inline-block' style={{ maxHeight: '5rem' }} />
                        <div className='d-lg-none d-flex align-content-center gap-1'>
                            <img src={icon} style={{ maxHeight: '2rem' }} />
                            <span className='ff-title'>Happy Healthy Housewives</span>
                        </div>
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link to='/' className={'nav-link ' + (pathname === `/` ? 'active' : '')} aria-current='page'>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/recipes'
                                    className={'nav-link ' + (pathname.startsWith('/recipes') ? 'active' : '')}
                                    aria-current='page'
                                >
                                    Recipes
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='flex-grow-1 overflow-auto'>
                <Outlet />
                <footer className='container pt-5 pb-1'>
                    <div className='d-flex justify-content-center flex-column'>
                        <span className='ff-title text-center'>Follow us on Instagram and Facebook</span>
                        <div className='d-flex gap-4 justify-content-center align-items-center'>
                            <a style={{ fontSize: '2.2rem' }} href='https://www.instagram.com/happyhealthyhousewives/'>
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            <a style={{ fontSize: '2rem' }} href='https://www.facebook.com/happyhealthyhousewives/'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                    </div>
                    <div className='text-center'>
                        <span className='text-center' style={{ fontFamily: 'var(--bs-body-font-family)', fontSize: '12px' }}>
                            &copy; {new Date().getFullYear()} Happy Healthy Housewives. All Rights Reserved.
                        </span>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App;
