import { Card, CardBody, Image, Text } from "@chakra-ui/react";

export default function Home(){
    return(
        <>
            <Card>
                <CardBody>
                    <Text>Device</Text>
                    <Text>Imagens ilustrativas</Text>
                    <Image src="images/device1.png"/>
                </CardBody>
            </Card>
        </>
    )
}