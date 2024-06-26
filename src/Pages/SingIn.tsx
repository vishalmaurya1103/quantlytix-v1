import React from 'react'
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Select,
} from '@chakra-ui/react'
import signInImage from '../images/image.png'

interface SignInProps {
  onSignIn: () => void
}

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  const handleRoleChange = (event) => {
    localStorage.setItem('userRole', event)
  }
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input type='email' />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input type='password' />
          </FormControl>
          <FormControl id='password'>
            <FormLabel>User role</FormLabel>
            <Select
              onChange={(e) => handleRoleChange(e.target.value)}
              defaultValue='Client'
              placeholder='Select role'
            >
              <option value='Client'>Client</option>
              <option value='Interviwer'>Interviwer</option>
              <option value='Admin'>Admin</option>
            </Select>
          </FormControl>

          <Stack spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'} onClick={onSignIn}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={signInImage} />
      </Flex>
    </Stack>
  )
}

export default SignIn
