import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Link, useLocation } from 'react-router-dom'

// Define the NavItem interface
interface NavItem {
  label: string
  href?: string
  children?: Array<NavItem>
}

// Define the NAV_ITEMS array using the NavItem interface
const NAV_ITEMS: Array<NavItem> = [
  { label: 'Home', href: '/' },
  { label: 'Search', href: '/search' },
  { label: 'Selected', href: '/selected' },
]

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  const location = useLocation()

  return (
    <Box>
      <Flex
        bg='#000000'
        color='#ffffff'
        minH='70px'
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle='solid'
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align='center'
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant='ghost'
            aria-label='Toggle Navigation'
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align='center'>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily='heading'
            color='#ffffff'
            fontSize='2xl'
          >
            QUANTLYTIX
          </Text>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav location={location} />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav location={location} />
      </Collapse>
    </Box>
  )
}

// Define props interface for DesktopNav
interface DesktopNavProps {
  location: { pathname: string }
}

const DesktopNav = ({ location }: DesktopNavProps) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const activeLinkColor = '#35865F'
  const activeBgColor = '#FFA629'
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction='row' spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger='hover' placement='bottom-start'>
            <PopoverTrigger>
              <Box
                as={Link}
                to={navItem.href ?? '#'}
                p={2}
                fontSize='sm'
                fontWeight={500}
                color={location.pathname === navItem.href ? activeLinkColor : linkColor}
                bg={location.pathname === navItem.href ? activeBgColor : 'transparent'}
                _hover={{ textDecoration: 'none', color: linkHoverColor }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow='xl'
                bg={popoverContentBgColor}
                p={4}
                rounded='xl'
                minW='sm'
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

// Define props interface for DesktopSubNav
interface DesktopSubNavProps {
  label: string
  href?: string
  subLabel?: string
}

const DesktopSubNav = ({ label, href, subLabel }: DesktopSubNavProps) => (
  <Box
    as={Link}
    to={href ?? '#'} // Provide a default value for href
    role='group'
    display='block'
    p={2}
    rounded='md'
    _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
  >
    <Stack direction='row' align='center'>
      <Box>
        <Text transition='all .3s ease' _groupHover={{ color: 'pink.400' }} fontWeight={500}>
          {label}
        </Text>
        <Text fontSize='sm'>{subLabel}</Text>
      </Box>
      <Flex
        transition='all .3s ease'
        transform='translateX(-10px)'
        opacity={0}
        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        justify='flex-end'
        align='center'
        flex={1}
      >
        <ChevronRightIcon color='pink.400' w={5} h={5} />
      </Flex>
    </Stack>
  </Box>
)

// Define props interface for MobileNav
interface MobileNavProps {
  location: { pathname: string }
}

const MobileNav = ({ location }: MobileNavProps) => (
  <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} location={location} />
    ))}
  </Stack>
)

// Define props interface for MobileNavItem
interface MobileNavItemProps {
  label: string
  href?: string
  children?: Array<NavItem>
  location: { pathname: string }
}

const MobileNavItem = ({ label, children, href, location }: MobileNavItemProps) => {
  const { isOpen, onToggle } = useDisclosure()
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const activeLinkColor = '#3a5a40'
  const activeBgColor = '#e69500'

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as={Link}
        to={href ?? '#'}
        justifyContent='space-between'
        alignItems='center'
        color={location.pathname === href ? activeLinkColor : linkColor}
        bg={location.pathname === href ? activeBgColor : 'transparent'}
        _hover={{ textDecoration: 'none' }}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <ChevronDownIcon
            transition='all .25s ease-in-out'
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle='solid'
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align='start'
        >
          {children &&
            children.map((child) => (
              <Box as={Link} key={child.label} py={2} to={child.href ?? '#'}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}
