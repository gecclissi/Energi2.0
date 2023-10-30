import {
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
    const [color, setColor] = useState<string>('red');

  useEffect(() => {
    const colorInterval = setInterval(changeColor, 3000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  }

  return (
    <>
      <Stack direction={["column", "row"]}>
        <VStack
          bg={"#006FFF"}
          alignItems={"center"}
          w={{ base: "none", sm: "50%", md: "50%" }}
        >
          <Box color={"white"} textAlign={"center"}>
            <Text fontSize="5xl">Device</Text>
            <Text>Imagens ilustrativas</Text>
            <Image width={"250px"} height={"400px"} src="images/device2.png" />
            <Text>Imagem do Sensor</Text>
          </Box>
          <Box color={"white"} textAlign={"center"}>
            <Image width={"250px"} height={"400px"} src="images/device1.png" />
            <Text>Imagem do Dispositivo</Text>
          </Box>
        </VStack>
        <VStack
          alignItems={"center"}
          w={{ base: "none", sm: "50%", md: "50%" }}
        >
          <Box textAlign={"center"}>
            <Text as={'b'} fontSize="5xl">Sobre G-SENSE</Text>
            <Text
              style={{ color }}
              fontSize={{ base: "1xl", sm: "2xl", mb: "2xl" }}
              textAlign={"justify"}
            >
              Iniciamos nossa busca por um dispositivo capaz de efetuar a
              leitura das assinaturas de gás, enquanto também exploramos
              maneiras de estabelecer uma conexão eficaz entre a máquina e o
              usuário. O objetivo é proporcionar aos usuários a capacidade de
              detectar possíveis falhas na infraestrutura de suas residências,
              bem como a identificação de problemas na instalação e manutenção
              de sistemas de gás. Nesse processo, estamos empenhados em adquirir
              conhecimento em uma nova linguagem de programação, permitindo a
              tradução das leituras dos dispositivos em notificações diretas,
              rápidas e de baixa latência.
              <br />
              Além disso, estamos comprometidos em aperfeiçoar a eficiência e a
              confiabilidade das leituras de gás, buscando soluções tecnológicas
              de ponta que nos permitam monitorar e analisar continuamente os
              dados coletados. Isso não apenas garantirá a segurança dos
              usuários, mas também contribuirá para a conservação de recursos e
              para a redução dos impactos ambientais. Estamos entusiasmados com
              o desafio de inovar nessa área e, ao mesmo tempo, melhorar a
              interação entre a tecnologia e as necessidades do usuário.
            </Text>
          </Box>
        </VStack>
      </Stack>
    </>
  );
}
