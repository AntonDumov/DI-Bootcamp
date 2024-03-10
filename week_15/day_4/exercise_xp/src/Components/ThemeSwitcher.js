import { useTheme } from '../ThemeContext';

const ThemeSwitcher = () => {
    const { theme, switchTheme } = useTheme();
    return (
        <>
            <button onClick={switchTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'}</button>
        </>
    );
};

export default ThemeSwitcher;