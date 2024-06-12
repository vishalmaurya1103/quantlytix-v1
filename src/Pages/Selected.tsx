import { useState } from 'react'
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
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { users } from '../data/users'

const CircleIcon = ({ boxSize, color }) => {
  return <Box width={boxSize} height={boxSize} borderRadius='full' backgroundColor={color} />
}

const Selected: React.FC = () => {
  const [client, setClient] = useState(users)

  const handleStarClick = (id) => {
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
        <TableContainer>
          <Table variant='simple'>
            <Tbody>
              {client &&
                client.map((item) => (
                  <Tr key={item.userID}>
                    <Td>
                      <Avatar size='md' name='Company Logo' src={item.userImgUrl} />
                    </Td>
                    <Td>
                      <Text fontSize='lg'>{item.userDesignationn}</Text>
                      <Text fontSize='xs'>
                        {item.companyName}, {item.time}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize='lg'>{item.jobTime}</Text>
                      <Text fontSize='xs'>
                        {item.city}, {item.country}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize='lg'>${item.workRate}/hr</Text>
                    </Td>
                    <Td>
                      <Flex align='center'>
                        <CircleIcon boxSize={4} color='red.500' />
                        <Box backgroundColor='red.500' borderRadius='full' p={1} ml={2}>
                          <Text fontSize='md' color='white'>
                            {item.department}
                          </Text>
                        </Box>
                      </Flex>
                    </Td>
                    <Td>
                      <StarIcon
                        cursor='pointer'
                        color={item.isBookmark ? 'orange.500' : 'gray.300'}
                        fill={item.isBookmark ? 'orange.500' : 'transparent'}
                        stroke={item.isBookmark ? 'orange.500' : 'gray.300'}
                        onClick={() => handleStarClick(item.userID)}
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

export default Selected
