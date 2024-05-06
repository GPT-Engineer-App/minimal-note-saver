import { Box, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navigation() {
  return (
    <Flex as="nav" p="4" bg="gray.100" justifyContent="space-between">
      <Box>
        <Link as={RouterLink} to="/" p="2">
          Home
        </Link>
        <Link as={RouterLink} to="/saved-notes" p="2">
          Saved Notes
        </Link>
      </Box>
    </Flex>
  );
}

export default Navigation;