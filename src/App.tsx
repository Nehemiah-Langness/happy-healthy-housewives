import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router';
import { baseUrl } from './base-url';
import logo from './assets/logo.png';
import icon from './assets/icon.png';
import 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

function App() {
    return (
        <BrowserRouter basename={baseUrl}>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function HomePage() {
    return (
        <div className='container pt-5 d-flex flex-column gap-5'>
            <img className='w-100' src={effectiveBaseUrl + '/banner.png'} />

            <div className='d-flex flex-column gap-4'>
                <div className='ff-title text-center border-bottom border-info border-2' style={{ fontSize: '4rem' }}>
                    What's New
                </div>
                <RecipeLink
                    image='/recipe-images/twice-baked-cheesy-potatoes.jpeg'
                    title='Twice Baked Cheesy Potatoes (THM E) (GF)'
                    description="Trying to up your daily protein goals but also miss cheesy starchies? All your dreams (and goals) are possible with Bri's Twice Baked Cheesy Potatoes!"
                />
                <RecipeLink
                    image='/recipe-images/brownie-batter-fruit-dip.jpg'
                    title='Brownie Batter Fruit Dip (THM FP) (GF) (DF)'
                    description="Want a tasty dessert that's easy and weight loss friendly? Look no further! Bri's yogurt based dip is just the thing you need for your sweet cravings."
                />
            </div>
        </div>
    );
}

const effectiveBaseUrl = import.meta.env.PROD ? baseUrl : '';

function RecipeLink({ image, description, title }: { image: string; title: string; description: string }) {
    return (
        <div style={{ cursor: 'pointer' }} className='d-flex flex-column flex-lg-row recipe-link'>
            <div
                className='flex-shrink-0'
                style={{ background: `center/cover url('${effectiveBaseUrl + image}')`, minHeight: '22rem', width: '16rem' }}
            ></div>
            <div className='d-flex flex-column gap-2 px-3 py-1'>
                <h1 className='ff-title'>{title}</h1>
                <span className=''>{description}</span>
            </div>
        </div>
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
                            <span className='ff-title'>Happy Health Housewives</span>
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
                                <a className={'nav-link ' + (pathname === `/` ? 'active' : '')} aria-current='page' href='#'>
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className={'nav-link ' + (pathname === `/recipes` ? 'active' : '')} aria-current='page' href='#'>
                                    Recipes
                                </a>
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
