import './App.css';

import ThemeSwitcher from './Components/ThemeSwitcher';
import { ThemeProvider } from './ThemeContext';
import CurrentTheme from './Components/CurrentTheme';
import CharacterCounter from './Components/CharacterCounter';
import TodoList from './Components/TodoList';

function App() {
    return (
        <div>
            <ThemeProvider>
                <h1>Exercise 1:</h1>
                <h2>Theme Switcher Example</h2>
                <ThemeSwitcher/>
                <p>Current theme: <CurrentTheme/></p>
            </ThemeProvider>
            <h1>Exercise 2:</h1>
            <CharacterCounter/>
            <h1>Exercise 3:</h1>
            <TodoList/>
        </div>
    );
}

export default App;
