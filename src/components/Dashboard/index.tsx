import { AddIcon, HamburgerIcon, InfoIcon, SettingsIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    Image,
    Link,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    useDisclosure,
    HStack,
    VStack,
} from '@chakra-ui/react'
import React from 'react'

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
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
                        <Button ref={btnRef} colorScheme='blue' onClick={onOpen}>
                            <HamburgerIcon />
                        </Button>
                        <Drawer
                            isOpen={isOpen}
                            placement='left'
                            onClose={onClose}
                            finalFocusRef={btnRef}
                        >
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader>Menu</DrawerHeader>
                                <DrawerBody>
                                    <VStack align={'start'}>
                                        <Link href={'Dispositivos'}><SettingsIcon /> Meus Dispositivos</Link>
                                        <Link href={'Device'}><AddIcon /> Adquirir dispositivo</Link>
                                        <Link href={'User'}><InfoIcon /> Meu Usuario</Link>
                                    </VStack>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
                    <Flex flex={{ base: 1 }} justify={{ base: 'flex-end', md: 'flex-end' }}>
                        <Link href='/'>
                            <Image src='images/gsense2.png' width={'50px'} height={'60px'} />
                        </Link>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
