import { Box, Card, CardBody, CardHeader, Center, Container, Heading, Img, Stack, StackDivider, Text } from "@chakra-ui/react";

const NoneDocument = () => {
    return (
        <Container maxW={'2xl'} mt={5}>
            <Card>
                <CardHeader>
                    <Heading size='md'>Porchase Order</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                ไม่พบเอกสาร
                            </Heading>
                        </Box>
                        <Center>
                            <Box>
                                <Img src="../image/notfind.gif" />
                                <Text pt='2' fontSize='sm'>
                                    ไม่พบเอกสารหรือว่าเอกสารมีการ Post รับของไปเรียบร้อยแล้ว
                                </Text>
                            </Box>
                        </Center>
                    </Stack>
                </CardBody>
            </Card>
        </Container>
    )
}

export default NoneDocument;