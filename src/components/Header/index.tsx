'use client'

import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  Image,
  Link,
} from '@chakra-ui/react'

export default function WithSubnavigation() {

  return (
    <>
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
            <Link href='/'>
              <Image src='images/gsense.png' width={'130px'} height={'60px'} />
            </Link>
          </Flex>

          <Link alignSelf={'start'}>Home</Link>


          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'}>
              Logar
            </Button>
            <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}
