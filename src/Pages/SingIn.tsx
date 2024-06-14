import React, { useContext, useState } from 'react'
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
import { ILoginDetails } from './../Types/AuthType';
import { userRole } from '../Utils/const';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { useAuth } from '../Hooks/useAuth';
import { useLocalStorage } from '../Hooks/useLocalStorage';

const SignIn: React.FC = () => {
  const [user, setUser] = useState<ILoginDetails>({ email: '', password: '', role: userRole.client });
  const { login } = useAuth();

  let navigate = useNavigate();
  const { setItem } = useLocalStorage();

  const handleLogin = () => {
    login({
      password: user.password,
      email: user.email,
      role :user.role,
      authToken: "token",
      isAuthenticated : true
    });
    navigate('/home');
  };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} type="password" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>User role</FormLabel>
            <Select value={user.role} onChange={(e) => setUser({...user,role:e.target.value})} placeholder='Select role'>
              <option value='Client'>Client</option>
              <option value='Interviwer'>Interviwer</option>
              <option value='Admin'>Admin</option>
            </Select>
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handleLogin}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={signInImage}
        />
      </Flex>
    </Stack>
  )
}

export default SignIn