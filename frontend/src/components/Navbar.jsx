import { HStack, Button, Box, IconButton } from '@chakra-ui/react';
import { useLocation,Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import useGlobalTheme from '../hooks/globalTheme';

const Navbar = () => {
    const location = useLocation();

    const { theme, toggleTheme } = useGlobalTheme();

    const buttons = [
        { name: 'Home', path: '/' },
        { name: 'Alumni', path: '/alumni' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Jobs', path: '/jobs' },
        { name: 'Forums', path: '/forums' },
        { name: 'About', path: '/about' },
    ];

    const activeButton = buttons.find((button) => location.pathname === button.path);

    return (
        <Box display="flex" justifyContent={{
            base: 'flex-start',
            md: 'center',
        }} mt={{
            base: '0',
            md: 6,
        }} pos="fixed" width="full" zIndex={4} overflowX="auto">
            <HStack bg="Background" w="fit" border={{md:"1px solid"}} p={3}>
                {buttons.map((button) => (
                    <Button
                        key={button.name}
                        rounded="none"
                        variant={activeButton === button ? 'solid' : 'ghost'}
                    >
                        {button.name}
                    </Button>
                ))}
                <Button variant="outline" rounded="none" as={Link} to="/login">
                    Login
                </Button>
                <IconButton

                    aria-label="Change Theme"
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                </IconButton>
            </HStack>
        </Box>
    );
}

export default Navbar;