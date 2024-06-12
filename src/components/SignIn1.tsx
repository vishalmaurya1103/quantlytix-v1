import React, { useState, FormEvent, ChangeEvent } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Stack,
  Flex,
  Image,
  Text,
  HStack,
} from '@chakra-ui/react'
import signInImage from '../images/image.png'

interface SignInProps {
  onSignIn: () => void
}

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // API call
    if (email === 'test@test.com' && password === '1234') {
      onSignIn()
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <>
        <Box bg={"#000000"} px={4} >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
         
          <HStack spacing={8} alignItems={'center'}>
            <Box color={'#ffffff'}>QUANTLYTIX</Box>
          
          </HStack>
          
        </Flex>

       
      </Box>
      <Flex
        height='calc(100vh - 60px)'
        width='100vw'
        align='center'
        justify='center'
        paddingTop='60px'
      >
        <Box
          display='flex'
          width={{ base: '90%', md: '80%' }}
          height={{ base: '90%', md: '80%' }}
          boxShadow='lg'
          borderRadius='lg'
          overflow='hidden'
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box flex='1' display={{ base: 'none', md: 'block' }}>
            <Image src={signInImage} alt='Sign In' objectFit='cover' height='100%' width='100%' />
          </Box>
          <Box flex='1' p={8} display='flex' flexDirection='column' justifyContent='center'>
            <Heading mb={6}>Sign In</Heading>
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id='email'>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type='email'
                    bg='#f7e7c7'
                    focusBorderColor='transparent'
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    _hover={{ bg: '#f7e7c7' }}
                    required
                  />
                </FormControl>
                <FormControl id='password'>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type='password'
                    bg='#f7e7c7'
                    focusBorderColor='transparent'
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    _hover={{ bg: '#f7e7c7' }}
                    required
                  />
                </FormControl>
                <Button
                  type='submit'
                  bg='#FFA629'
                  size='lg'
                  fontSize='md'
                  _hover={{ bg: '#FFA629' }}
                  _active={{ bg: '#FFA629' }}
                >
                  Sign In
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default SignIn
