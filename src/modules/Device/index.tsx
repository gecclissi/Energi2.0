import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React from "react"

export default function Device() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
      <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} h={'80vh'}>
        
        <Button w={'21rem'} h={'16rem'} colorScheme='blue' color={'white'} fontSize={'2xl'}
       onClick={onOpen}>Adiquirir Serviço
       <br/> Clique Aqui
        </Button>
         
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastrar Device</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nome do Device</FormLabel>
                <Input ref={initialRef} placeholder='Digite o nome' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Numero do Device</FormLabel>
                <Input placeholder='Digite o numero' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>
      </>
    )
  }