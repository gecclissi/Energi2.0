import { Box, Flex, Text } from "@chakra-ui/react";

export default function Footer() {

  return (
    <>
      <Box>
        <Flex
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          textAlign={'center'}>
          <Flex flex={{ base: 1,md: 1 }} justify={'center'}>
            <Text> Email para contato <br/> gabriel.m.ecclissi@gmail.com</Text>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
