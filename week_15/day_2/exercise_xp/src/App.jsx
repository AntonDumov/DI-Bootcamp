import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom'; // Modify Switch to Routes
import { Navbar, Container, Nav } from 'react-bootstrap';
import ErrorBoundary from './Components/ErrorBoundary';
import PostList from './Components/PostList.jsx';
import Example1 from './Components/Example1.jsx';
import Example2 from './Components/Example2.jsx';
import Example3 from './Components/Example3.jsx'; // Import ErrorBoundary here

const HomeScreen = () => <h1>Home</h1>;

const ProfileScreen = () => <h1>Profile</h1>;

const ShopScreen = () => {
    throw new Error('shop');
};

const fetchWebhook = async () => {
    const r = await fetch('https://webhook.site/da646a7d-d560-41d9-a9c7-061f4d59ca49', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key1: 'myusername',
            email: 'mymail@gmail.com',
            name: 'Isaac',
            lastname: 'Doe',
            age: 27
        })
    })
    console.log(r);
}


const App = () => (
    <>
        <BrowserRouter>
            <Navbar>
                <Container fluid>
                    <Nav>
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="*" element={<div>Not Found</div>}/>
                <Route path="/" element={
                    <ErrorBoundary>
                        <HomeScreen/>
                    </ErrorBoundary>
                }/>
                <Route path="/profile" element={
                    <ErrorBoundary>
                        <ProfileScreen/>
                    </ErrorBoundary>
                }/>
                <Route path="/shop" element={
                    <ErrorBoundary>
                        <ShopScreen/>
                    </ErrorBoundary>
                }/>
            </Routes>
        </BrowserRouter>
        <h1>Exercise 2:</h1>
        <PostList/>
        <h1>Exercise 3:</h1>
        <div>
            <Example1/>
            <Example2/>
            <Example3/>
        </div>
        <h1>Exercise 4:</h1>
        <button onClick={fetchWebhook}>Click to fetch</button>
    </>
);

export default App;
