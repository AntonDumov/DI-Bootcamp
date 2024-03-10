import { useTheme } from '../ThemeContext';

const CurrentTheme = () => {
    const {theme} = useTheme();
    return <>{theme}</>;
};

export default CurrentTheme;
