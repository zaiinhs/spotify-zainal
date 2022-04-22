import React from 'react';
import { logout } from '../../slice/authSlice';
import Logo from '../Logo';
import {
  Box,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  IconButton,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../store';
import { FiLogOut } from 'react-icons/fi';
import { FaChevronDown, FaRegUserCircle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { User } from '../../types/user';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const user: User | null = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();
  const bgNavbar = useColorModeValue('primary.500', 'gray.700');

  return (
    <Box as="nav" bg={bgNavbar} py={3} pos="sticky" zIndex={9999} top={0}>
      <HStack justify="space-between" className="container">
        <Link to="/create-playlist">
          <Logo />
        </Link>

        <Box display={{ base: 'block', sm: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<GiHamburgerMenu />}
              aria-label="habmburger menu"
              bg="transparent"
              _hover={{
                bg: 'transparent'
              }}
              _active={{
                bg: 'transparent',
              }}
              // px={0}
            >
              {user?.display_name.split(' ')[0]}
            </MenuButton>
            <MenuList>
              <MenuGroup title="Page">
                <Link to="/profile">
                  <MenuItem icon={<FaRegUserCircle />}>
                    Profile
                  </MenuItem>
                </Link>
              </MenuGroup>

              <MenuDivider />

              <MenuGroup title="Setting">
                <MenuItem
                  icon={<FiLogOut />}
                  onClick={() => dispatch(logout())}
                  color="red.500"
                >
                  Logout
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>

        <HStack gap={3} display={{ base: 'none', sm: 'flex' }}>
   
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<FaChevronDown />}
                bg="transparent"
                _hover={{
                  bg: 'transparent'
                }}
                _active={{
                  bg: 'transparent',
                }}
                px={0}
              >
                {user?.display_name.split(' ')[0]}
              </MenuButton>
              <MenuList>
                <Link to="/profile">
                  <MenuItem icon={<FaRegUserCircle />}>
                    Profile
                  </MenuItem>
                </Link>
                <MenuItem
                  icon={<FiLogOut />}
                  onClick={() => dispatch(logout())}
                  color="red.500"
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
