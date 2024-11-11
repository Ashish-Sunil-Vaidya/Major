import { HStack, Button, Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
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
        <Box  display="flex" justifyContent="center" mt={3} pos="fixed" top={0} width="full" zIndex={4}>
            <HStack bg="Background" shadow="md" w="fit" p={3}>
                {buttons.map((button) => (
                    <Button
                        key={button.name}
                        rounded="none"
                        variant={activeButton === button ? 'solid' : 'ghost'}
                    >
                        {button.name}
                    </Button>
                ))}
                <Button variant="outline" rounded="none">
                    Login
                </Button>
            </HStack>
        </Box>
    );
}

export default Navbar;