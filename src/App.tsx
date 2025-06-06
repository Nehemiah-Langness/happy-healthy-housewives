import { BrowserRouter, Link, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router';
import { baseUrl } from './base-url';
import logo from './assets/logo.png';
import icon from './assets/icon.png';
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { HomePage } from './pages/HomePage';
import { useEffect, useRef } from 'react';
import { RecipeHomePage } from './pages/RecipeHomePage';
import { RecipeFinderPage } from './pages/RecipeFinderPage';
import { RecipeTagPage } from './pages/RecipeTagPage';
import { RecipePage } from './pages/RecipePage';
import { AllergyDisclaimer } from './components/AllergyDisclaimer';
import { AcronymKey } from './components/AcronymKey';
import { AffiliateModal } from './components/AffiliateModal';
import { recipeList } from './services/recipe-list';
import { featureFlags } from './feature-flags';

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
                    <Route
                        path='/fp-recipes/*'
                        element={<Redirect replace={(path) => path.toLowerCase().replace('/fp-recipes', '/recipes/thm-fp')} />}
                    />
                    <Route
                        path='/fats-s-recipes/*'
                        element={<Redirect replace={(path) => path.toLowerCase().replace('/fats-s-recipes', '/recipes/thm-s')} />}
                    />
                    <Route
                        path='/xo-recipes/*'
                        element={<Redirect replace={(path) => path.toLowerCase().replace('/xo-recipes', '/recipes/thm-xo')} />}
                    />
                    <Route
                        path='/drinks-and-sippers/*'
                        element={
                            <Redirect
                                replace={(path) => path.toLowerCase().replace('/drinks-and-sippers', '/recipes/drinks-and-sippers')}
                            />
                        }
                    />
                    {featureFlags.findByIngredients && (
                        <Route path='recipe-finder'>
                            <Route index element={<RecipeFinderPage />} />
                        </Route>
                    )}
                    <Route path='recipes'>
                        <Route index element={<RecipeHomePage />} />

                        <Route path=':tag'>
                            <Route index element={<RecipeTagPage />} />

                            {recipeList.map((recipe) =>
                                recipe.redirects?.map((redirect) => (
                                    <Route
                                        key={`${recipe.slug}_${redirect}`}
                                        path={`${redirect}`}
                                        element={
                                            <Redirect replace={(path) => path.toLowerCase().replace(`/${redirect}`, `/${recipe.slug}`)} />
                                        }
                                    />
                                ))
                            )}

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

    const bodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bodyRef.current?.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, [pathname]);

    return (
        <div className='flex-grow-1 d-flex flex-column overflow-hidden print-overflow-visible'>
            <nav className='navbar navbar-expand-lg bg-light'>
                <div className='container'>
                    <Link to='/' className='navbar-brand'>
                        <img src={logo} className='d-none d-lg-inline-block' style={{ maxHeight: '5rem' }} />
                        <div className='d-lg-none d-flex align-content-center gap-1'>
                            <img src={icon} style={{ maxHeight: '2rem' }} />
                            <span className='dancing-script'>Happy Healthy Housewives</span>
                        </div>
                    </Link>
                    <button
                        className='navbar-toggler d-print-none'
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
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-print-none'>
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
                            {featureFlags.findByIngredients && (
                                <li className='nav-item'>
                                    <Link
                                        to='/recipe-finder'
                                        className={'nav-link ' + (pathname.startsWith('/recipe-finder') ? 'active' : '')}
                                        aria-current='page'
                                    >
                                        Recipe Finder
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='flex-grow-1 overflow-auto d-flex flex-column print-overflow-visible' ref={bodyRef}>
                <Outlet />
                <footer className='container pt-5 pb-1'>
                    <div className='d-flex justify-content-center flex-column'>
                        <span className='ff-title text-center'>Follow us on Instagram and Facebook</span>
                        <div className='d-flex gap-4 justify-content-center align-items-center d-print-none'>
                            <a style={{ fontSize: '2.2rem' }} href='https://www.instagram.com/happyhealthyhousewives/'>
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            <a style={{ fontSize: '2rem' }} href='https://www.facebook.com/happyhealthyhousewives/'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                        <div className='gap-1 flex-column justify-content-center align-items-center d-none d-print-flex'>
                            <div className='d-flex align-items-center gap-1 ff-link' style={{ fontSize: '0.8rem' }}>
                                <FontAwesomeIcon style={{ fontSize: '1.1rem' }} icon={faInstagramSquare} />
                                https://www.instagram.com/happyhealthyhousewives/
                            </div>
                            <div className='d-flex align-items-center gap-1 ff-link' style={{ fontSize: '0.8rem' }}>
                                <FontAwesomeIcon style={{ fontSize: '1rem' }} icon={faFacebook} />
                                https://www.facebook.com/happyhealthyhousewives/
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-3'>
                        <AllergyDisclaimer />
                        <div>
                            <AcronymKey />
                        </div>
                        <span className='text-center' style={{ fontFamily: 'var(--bs-body-font-family)', fontSize: '12px' }}>
                            &copy; {new Date().getFullYear()} Happy Healthy Housewives. All Rights Reserved.
                        </span>
                    </div>
                </footer>
                <AffiliateModal />
            </div>
        </div>
    );
}

export default App;
