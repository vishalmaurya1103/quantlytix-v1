import { Button, Box, Flex, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

const AddUsers: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={20}>
      <Flex justifyContent='center'>
        <Button colorScheme='teal' size='lg' onClick={onOpen}>New</Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter name" />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter email" />
            </FormControl>
            <FormControl id="Designation" mb={4}>
              <FormLabel>Designation</FormLabel>
              <Input placeholder="Enter Designation" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant='ghost' onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default AddUsers;
