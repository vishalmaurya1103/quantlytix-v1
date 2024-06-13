import { ReactNode, useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as ChakraLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Link, useLocation } from 'react-router-dom'
import { userRole } from '../Utils/const';

const NavLink = ({ children, href, isActive }: { children: ReactNode, href: string, isActive: boolean }) => (
  <ChakraLink
    as={Link}
    to={href}
    px={2}
    py={1}
    height={'100%'}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: "#ffffff",
      color: '#000000',
      zIndex: 1,
    }}
    color={isActive ? '#000000' : '#ffffff'}
    bg={isActive ? '#ffffff' : 'transparent'}
    fontSize={isActive ? 'lg' : 'md'}
    zIndex={isActive ? 2 : 0}
  >
    {children}
  </ChakraLink>
)

export default function WithAction({ isLoggedIn }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [links, setLinks] = useState(Array<any>)
  const location = useLocation();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role === userRole.client) {
      setLinks([
        { label: 'Home', href: '/' },
        { label: 'Search', href: '/client/search' },
        { label: 'Selected', href: '/client/selected' },
      ])
    }
    else if (role === userRole.interviwer) {
      setLinks([
        { label: 'Home', href: '/' },
        { label: 'Interviews', href: '/interviwer/search' },
      ])
    }
    else if (role === userRole.admin) {
      setLinks([
        { label: 'Home', href: '/' },
        { label: 'Users', href: '/admin/addusers' },
      ])
    }
  }, [])

  return (
    <>
      <Box bg={"#000000"} px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box color={'#ffffff'}>QUANTLYTIX</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {links.map((link) => (
                <NavLink key={link.label} href={link.href} isActive={location.pathname === link.href}>
                  {link.label}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              leftIcon={<AddIcon />}>
              Action
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map((link) => (
                <NavLink key={link.label} href={link.href} isActive={location.pathname === link.href}>
                  {link.label}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
