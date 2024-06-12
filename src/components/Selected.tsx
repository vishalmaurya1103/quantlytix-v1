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
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

interface CircleIconProps {
  boxSize: number | string
  color: string
}

const CircleIcon: React.FC<CircleIconProps> = ({ boxSize, color }) => {
  return <Box width={boxSize} height={boxSize} borderRadius='full' backgroundColor={color} />
}

const Selected: React.FC = () => {
  const [isStarred, setIsStarred] = useState(false)

  const handleStarClick = () => {
    setIsStarred(!isStarred)
  }

  return (
    <Box p={4} position='absolute' top={20} left={20} right={20}>
      <Stack spacing={4}>
        <TableContainer>
          <Table variant='simple'>
            <Tbody>
              {[...Array(5)].map((_, index) => (
                <Tr key={index}>
                  <Td>
                    <Avatar size='md' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                  </Td>
                  <Td>
                    <Text fontSize='lg'>Senior Software Engineer/Developer</Text>
                    <Text fontSize='xs'>Axiom Corp : 1 day ago</Text>
                  </Td>
                  <Td>
                    <Text fontSize='lg'>Full Time</Text>
                    <Text fontSize='xs'>in London, UK</Text>
                  </Td>
                  <Td>
                    <Text fontSize='lg'>$50/hr</Text>
                  </Td>
                  <Td>
                    <Flex align='center'>
                      <CircleIcon boxSize={4} color={index % 2 === 0 ? 'red.500' : '#07acf2'} />
                      <Box
                        backgroundColor={index % 2 === 0 ? 'red.500' : '#07acf2'}
                        borderRadius='full'
                        p={1}
                        ml={2}
                      >
                        <Text fontSize='md' color='white'>
                          Software Development
                        </Text>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>
                    <StarIcon
                      cursor='pointer'
                      color={isStarred ? 'orange.500' : 'gray.300'}
                      fill={isStarred ? 'orange.500' : 'transparent'}
                      onClick={handleStarClick}
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
