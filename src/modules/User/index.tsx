
import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"

export default function User() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <>
            <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} h={'80vh'}>
                <Card w={'21rem'} h={'16rem'} bgColor={'blue'}>
                    <CardHeader textAlign={'center'}>
                        <Heading size='lg' color={'white'}> SUA CONTA</Heading>
                    </CardHeader>
                    <CardBody color={'white'}>
                        <Text>Nome:</Text>
                        <Text>Email:</Text>
                    </CardBody>
                    <CardFooter justifyContent={'center'} >
                        <Button onClick={onOpen} colorScheme='blue'>Alterar</Button>
                    </CardFooter>
                </Card>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Alterar informação</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Nome</FormLabel>
                                <Input ref={initialRef} placeholder='Digite o novo nome' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Email</FormLabel>
                                <Input placeholder='Digite o novo numero' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Senha</FormLabel>
                                <Input placeholder='Digite a nova senha' />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button  colorScheme='blue' onClick={onClose}>Editar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    )
}