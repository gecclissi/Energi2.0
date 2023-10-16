
import { Box, Button, Card, CardBody, CardFooter, CardHeader, FormControl, FormLabel, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import React from "react"

export default function User() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    return (
        <>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} h={'80vh'}>
                <Card w={'21rem'} h={'16rem'} bgColor={'blue'}>
                    <CardHeader textAlign={'center'}>
                        <Heading size='lg' color={'white'}> Device</Heading>
                    </CardHeader>
                    <CardBody color={'white'}>
                        <Text>Devide de </Text>
                        <Text>Numero </Text>
                    </CardBody>
                    <CardFooter justifyContent={'center'} >
                        <Button onClick={onOpen} colorScheme='red'>Deletar</Button>
                    </CardFooter>
                </Card>
             </Box>
        </>
    )
}