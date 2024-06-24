import React from 'react'
import { MdInfo, MdWork, MdFeedback } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { users } from '../../data/users'

const InterviwerUser: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const user = users.find((user) => user.userID === id)

  if (!user) {
    return <div>User not found</div>
  }
  return (
    <></>
    // <Box p={4}>
    //   <Flex alignItems='stretch' flexDirection='row'>
    //     <Box width='20%'>
    //       <Image
    //         alt={'User Image'}
    //         src={user.userImgUrl}
    //         width='100%'
    //         height='auto'
    //         borderRadius='md'
    //       />
    //     </Box>
    //     <Divider orientation='vertical' mx={4} />
    //     <Box pl={4} width='80%'>
    //       <Flex flexDirection='column' h='100%'>
    //         <Text fontSize='5xl' fontWeight='bold'>
    //           {user.userName}
    //         </Text>
    //         <Text fontSize='2xl'>{user.userDesignationn}</Text>
    //         <Text fontSize='1xl'>{user.email}</Text>
    //       </Flex>
    //     </Box>
    //   </Flex>
    //   <Divider my={4} />
    //   <Flex alignItems='center'>
    //     <Box width='20%'>
    //       <Stack spacing={1} textAlign='right'>
    //         <Stack direction='row' spacing={1}>
    //           <Text>Rating 1</Text>
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='yellow.400' />
    //         </Stack>
    //         <Stack direction='row' spacing={1}>
    //           <Text>Rating 2</Text>
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='gray.300' />
    //         </Stack>
    //         <Stack direction='row' spacing={1}>
    //           <Text>Rating 3</Text>
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='gray.300' />
    //           <Icon as={FaStar} color='gray.300' />
    //         </Stack>
    //         <Stack direction='row' spacing={1}>
    //           <Text>Rating 4</Text>
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='gray.300' />
    //           <Icon as={FaStar} color='gray.300' />
    //           <Icon as={FaStar} color='gray.300' />
    //         </Stack>
    //         <Stack direction='row' spacing={1}>
    //           <Text>Rating 5</Text>
    //           <Icon as={FaStar} color='yellow.400' />
    //           <Icon as={FaStar} color='gray.300' />
    //           <Icon as={FaStar} color='gray.300' />
    //           <Icon as={FaStar} color='gray.300' />
    //           <Icon as={FaStar} color='gray.300' />
    //         </Stack>
    //       </Stack>
    //     </Box>
    //     <Box width='80%'>
    //       <Tabs>
    //         <TabList>
    //           <Tab
    //             _selected={{ color: 'white', bg: 'blue.500' }}
    //             display='flex'
    //             alignItems='center'
    //             justifyContent='center'
    //             width='calc(100% / 3)'
    //           >
    //             <MdInfo size={20} style={{ marginRight: '5px' }} /> About
    //           </Tab>
    //           <Tab
    //             _selected={{ color: 'white', bg: 'blue.500' }}
    //             display='flex'
    //             alignItems='center'
    //             justifyContent='center'
    //             width='calc(100% / 3)'
    //           >
    //             <MdWork size={20} style={{ marginRight: '5px' }} /> Experience
    //           </Tab>
    //           <Tab
    //             _selected={{ color: 'white', bg: 'blue.500' }}
    //             display='flex'
    //             alignItems='center'
    //             justifyContent='center'
    //             width='calc(100% / 3)'
    //           >
    //             <MdFeedback size={20} style={{ marginRight: '5px' }} /> Feedback
    //           </Tab>
    //         </TabList>
    //         <TabPanels>
    //           <TabPanel>
    //             <p>About details goes here!!</p>
    //           </TabPanel>
    //           <TabPanel>
    //             <p>Experience details goes here!!</p>
    //           </TabPanel>
    //           <TabPanel>
    //             <p>Feedback details goes here!!</p>
    //           </TabPanel>
    //         </TabPanels>
    //       </Tabs>
    //     </Box>
    //   </Flex>
    // </Box>
  )
}

export default InterviwerUser