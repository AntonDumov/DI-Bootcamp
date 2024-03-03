import './App.css';
import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import Exercise3 from './components/Exercise3';

function App() {

    // Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
    const myElement = <h1>I Love JSX!</h1>;
    // Create a constant variable named sum, which value is 5 + 5.
    // Render on the page, the following sentence "React is <sum> times better with JSX"
    const sum = 5 + 5;

    const user = {
        firstName: 'Bob',
        lastName: 'Dylan',
        favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
    };

    return (
        <div>
            {myElement}
            <h1>React is {sum} times better with JSX</h1>
            {/*In the App.js file, display a “Hello World!” message in a paragraph.*/}
            <p>
                Hello World!
            </p>
            <h3>{user.firstName} {user.lastName}</h3>
            <UserFavoriteAnimals favAnimals={user.favAnimals}></UserFavoriteAnimals>
            <Exercise3></Exercise3>
        </div>
    );
}

export default App;
