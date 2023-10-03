import { Box, Card, CardBody, Image, Stack, Text, VStack } from "@chakra-ui/react";
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <>
            <Stack direction={['column', 'row']}>
                <VStack bg={"#006FFF"} alignItems={"center"} w={{base:"none" ,sm:"50%",md:"50%"}}>
                    <Box color={'white'} textAlign={"center"}>
                        <Text fontSize='5xl'>Device</Text>
                        <Text>Imagens ilustrativas</Text>
                        <Image width={'250px'} height={'400px'} src="images/device2.png" />
                        <Text>Imagem do Sensor</Text>
                    </Box>
                    <Box color={'white'} textAlign={"center"}>
                        <Image width={'250px'} height={'400px'} src="images/device1.png" />
                        <Text>Imagem do Dispositivo</Text>
                    </Box>
                </VStack>
                <VStack alignItems={"center"} w={{base:"none" ,sm:"50%" ,md:"50%"}} >
                    <Box textAlign={"center"}>
                    <Text fontSize='5xl'>Sobre G-SENSE</Text>
                    <Text fontSize={{base:'1xl' , sm:'2xl',mb:'2xl'}} textAlign={"justify"}>Partimos à pesquisa de um dispositivo capaz de ler assinaturas de
              gás e como fazer a relação máquina-homem capaz de indicar ao
              usuário possíveis falhas na infraestrutura de sua residência bem
              como na própria instalação e manutenção de soluções gasosas:
              aprender uma nova linguagem de programação que possibilite
              transformar leituras de dispositivos em uma notificação objetiva e
              de baixa latência.</Text>
                    </Box>
                </VStack>
            </Stack>
        </>
    )
}