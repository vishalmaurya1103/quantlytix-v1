import React, { useState } from 'react'
import {
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
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Select,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { users } from '../../data/users'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const CircleIcon = ({ boxSize, color }) => {
  return <Box width={boxSize} height={boxSize} borderRadius='full' backgroundColor={color} />
}

const Search: React.FC = () => {
  const [client, setClient] = useState(users)

  const handleStarClick = (id, event) => {
    event.stopPropagation();
    const updatedClient = client.map((user) => {
      if (user.userID === id) {
        return { ...user, isBookmark: !user.isBookmark }
      }
      return user
    })
    setClient(updatedClient)
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
        <Flex>
          <Select placeholder='Location' ml='4'>
            <option value='option1'>US</option>
            <option value='option2'>UK</option>
            <option value='option3'>India</option>
          </Select>
          <Select placeholder='Experience' ml='4'>
            <option value='option1'>1 Year</option>
            <option value='option2'>2 Year</option>
            <option value='option3'>3 Year</option>
          </Select>
          <Select placeholder='Role' ml='4'>
            <option value='option1'>Software Engineer</option>
            <option value='option2'>Marketing</option>
            <option value='option3'>UI/UX</option>
          </Select>
          <Select placeholder='Category' ml='4'>
            <option value='option1'>IT</option>
            <option value='option2'>Markating</option>
            <option value='option3'>Bank</option>
          </Select>
        </Flex>
        <TableContainer>
          <Table variant='simple'>
            <Tbody>
              {client &&
                client.map((item) => (
                  <Tr key={item.userID}>
                    <Td>
                      <Link to={`/client/user/${item.userID}`}>
                        <Avatar size='md' name='Company Logo' src={item.userImgUrl} />
                      </Link>
                    </Td>
                    <Td>
                      <Link to={`/client/user/${item.userID}`}>
                        <Text fontSize='lg'>{item.userDesignationn}</Text>
                        <Text fontSize='xs'>
                          {item.companyName}, {item.time}
                        </Text>
                      </Link>
                    </Td>
                    <Td>
                      <Link to={`/client/user/${item.userID}`}>
                        <Text fontSize='lg'>{item.jobTime}</Text>
                        <Text fontSize='xs'>
                          {item.city}, {item.country}
                        </Text>
                      </Link>
                    </Td>
                    <Td>
                      <Link to={`/client/user/${item.userID}`}>
                        <Text fontSize='lg'>${item.workRate}/hr</Text>
                      </Link>
                    </Td>
                    <Td>
                      <Link to={`/client/user/${item.userID}`}>
                        <Flex align='center'>
                          <CircleIcon boxSize={4} color='red.500' />
                          <Box backgroundColor='red.500' borderRadius='full' p={1} ml={2}>
                            <Text fontSize='md' color='white'>
                              {item.department}
                            </Text>
                          </Box>
                        </Flex>
                      </Link>
                    </Td>
                    <Td>
                      <StarIcon
                        cursor='pointer'
                        color={item.isBookmark ? 'orange.500' : 'gray.300'}
                        fill={item.isBookmark ? 'orange.500' : 'transparent'}
                        stroke={item.isBookmark ? 'orange.500' : 'gray.300'}
                        onClick={(event) => handleStarClick(item.userID, event)}
                        _hover={{ stroke: 'orange.500', strokeWidth: '2px' }}
                      />
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  )
}

export default Search
