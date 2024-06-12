import { useState } from 'react'
import {
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Box,
  Stack,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Avatar,
  Flex,
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'
import { StarIcon } from '@chakra-ui/icons'
import { users } from '../data/users'

const CircleIcon = ({ boxSize, color }) => {
  return <Box width={boxSize} height={boxSize} borderRadius='full' backgroundColor={color} />
}
const Search: React.FC = () => {
  const [isStarred, setIsStarred] = useState(false)
  const [client, setClient] = useState(users)
  const handleStarClick = () => {
    setIsStarred(!isStarred)
  }

  return (
    <Box p={4} position='absolute' top={20} left={20} right={20}>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Icon as={FaSearch} color='gray.300' />
          </InputLeftElement>
          <Input type='text' placeholder='Profile Name' />
        </InputGroup>
        <TableContainer>
          <Table variant='simple'>
            <Tbody>
              {client &&
                client.map((itme: any) => {
                  return (
                    <Tr>
                      <Td>
                        <Avatar size='md' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                      </Td>
                      <Td>
                        <Text fontSize='lg'>{itme.role}</Text>
                        <Text fontSize='xs'>{itme.company} : {itme.date}</Text>
                      </Td>
                      <Td>
                        <Text fontSize='lg'>{itme.status}</Text>
                        <Text fontSize='xs'>{itme.city}, {itme.country}</Text>
                      </Td>
                      <Td>
                        <Text fontSize='lg'>${itme.rate}/hr</Text>
                      </Td>
                      <Td>
                        <Flex align='center'>
                          <CircleIcon boxSize={4} color='red.500' />
                          <Box backgroundColor='red.500' borderRadius='full' p={1} ml={2}>
                            <Text fontSize='md' color='white'>
                              {itme.category}
                            </Text>
                          </Box>
                        </Flex>
                      </Td>
                      <Td>
                        <StarIcon
                          cursor='pointer'
                          color={itme.isBookmarked ? 'orange.500' : 'gray.300'}
                          fill={itme.isBookmarked ? 'orange.500' : 'transparent'}
                          onClick={handleStarClick}
                          _hover={{ stroke: 'orange.500', strokeWidth: '2px' }}
                        />
                      </Td>
                    </Tr>
                  )
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  )
}

export default Search
