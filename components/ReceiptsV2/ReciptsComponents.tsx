import { Box, Card, CardBody, Center, HStack, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faWarehouse, faTurnDown } from '@fortawesome/free-solid-svg-icons'
const ReciptsComponents = () => {
    return (
        <Box p={5}>
            <Box pb={5}>
                <HStack>
                    <FontAwesomeIcon icon={faClipboard} />
                    <Text fontWeight={500}>
                        รับของ
                    </Text>
                </HStack>
            </Box>
            <HStack spacing='24px' justifyContent={'center'}>
                <Box>
                    <Box borderRadius={20} px={3} py={1} bg='orange'>
                        <HStack justifyContent={'center'}>
                            <FontAwesomeIcon color='white' icon={faTurnDown} />
                            <Text color={'white'} >
                                20
                            </Text>
                        </HStack>
                    </Box>
                    <Center>
                        <Text mt={2} fontSize={'xs'} fontWeight={600}>
                            รอรับ
                        </Text>
                    </Center>
                </Box>
                <Box>
                    <Box borderRadius={20} px={3} py={1} bg='green'>
                        <HStack justifyContent={'center'}>
                            <FontAwesomeIcon color={'white'} icon={faCheckCircle} />
                            <Text color={'white'} >
                                160
                            </Text>
                        </HStack>
                    </Box>
                    <Center>
                        <Text mt={2} fontSize={'xs'} fontWeight={600}>
                            รับเรียบร้อย
                        </Text>
                    </Center>
                </Box>
                <Box>
                    <Box borderRadius={20} px={3} py={1} bg='blue.400'>
                        <HStack justifyContent={'center'}>
                            <FontAwesomeIcon color='white' icon={faWarehouse} />
                            <Text color={'white'} >
                                180
                            </Text>
                        </HStack>
                    </Box>
                    <Center>
                        <Text mt={2} fontSize={'xs'} fontWeight={600}>
                            จำนวนทั้งหมด
                        </Text>
                    </Center>
                </Box>
            </HStack>
        </Box>
    )
}
export default ReciptsComponents