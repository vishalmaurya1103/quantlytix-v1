import React from 'react'
import { Stack, Text, Image, Flex, Card, CardBody, Heading, SimpleGrid } from '@chakra-ui/react'
import Image1 from '../images/image1.png'

const Home: React.FC = () => {
  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={8}
        align='center'
        justify='center'
        p={8}
      >
        <Flex
          flex='1'
          flexDirection='column'
          alignItems={{ base: 'center', md: 'flex-start' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text as='b' fontSize={{ base: '3xl', md: '5xl' }} mb={4}>
            Welcome to Quantlytix
          </Text>
          <Text
            mt={20}
            fontSize={{ base: 'lg', md: '2xl' }}
            fontWeight='medium'
            lineHeight='taller'
          >
            We're thrilled to have you here. Our team of experts is committed to understanding your
            unique needs and delivering tailored solutions that exceed your expectations.
          </Text>
        </Flex>
        <Flex flex='1' justifyContent='center'>
          <Image
            boxSize={{ base: '400px', md: '400px' }}
            objectFit='cover'
            src={Image1}
            alt='Quantlytix'
          />
        </Flex>
      </Stack>
      <Flex
        flex='1'
        flexDirection='row'
        alignItems={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}
        pl={{ base: '20px', md: '0' }}
        pr={{ base: '20px', md: '0' }}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} p={{ base: '20px', md: '0' }}>
          <Stack>
            <Heading size='lg' pl={{ base: '0px', md: '30px' }}>
              Recruitment
            </Heading>
            <Card
              bg='#FCD19C'
              borderRadius='xl'
              height='100%'
              p={6}
              ml={{ base: 0, md: 6 }}
              mr={{ base: 4, md: 0 }}
            >
              <CardBody>
                <Stack mt='6' spacing='3'>
                  <Text fontSize='lg'>
                    Empowering businesses with top-tier talent, one hire at a time. Discover your
                    next star employee with our expert recruitment services.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Stack>
          <Stack>
            <Heading size='lg'>Speed</Heading>
            <Card bg='#FCD19C' borderRadius='xl' height='100%' p={6}>
              <CardBody>
                <Stack mt='6' spacing='3'>
                  <Text fontSize='lg'>
                    Accelerating your recruitment process with precision and efficiency. Streamline
                    hiring and secure top talent faster than ever before.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Stack>
          <Stack>
            <Heading size='lg'>Growth</Heading>
            <Card
              bg='#FCD19C'
              borderRadius='xl'
              height='100%'
              p={6}
              ml={{ base: 6, md: 0 }}
              mr={{ base: 0, md: 4 }}
            >
              <CardBody>
                <Stack mt='6' spacing='3'>
                  <Text fontSize='lg'>
                    Fuel your organization's rapid expansion with our agile recruitment strategies.
                    Harnessing speed and precision to propel your team towards unparalleled success.
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Stack>
        </SimpleGrid>
      </Flex>
    </>
  )
}

export default Home
