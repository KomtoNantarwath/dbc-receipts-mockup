import { Box, Button, Card, CardBody, Center, HStack, Heading, Input, StackDivider, Text, useNumberInput } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faWarehouse, faTurnDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { PurchaseOrderLines } from '../../type/purchaseListsType';

interface props {
    PurchaseOrderLines: PurchaseOrderLines
}
const ItemComponents = ({ PurchaseOrderLines }: props) => {
    function HookUsage(rec: number, reced: number, qty: number) {
        const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
            useNumberInput({
                step: 1,
                defaultValue: rec,
                min: 1,
                max: rec,
                precision: 2,
            })

        const inc = getIncrementButtonProps()
        const dec = getDecrementButtonProps()
        const input = getInputProps()

        return (
            <HStack maxW='320px'>
                <Button colorScheme='red' variant='solid' {...dec}>-</Button>
                <Input {...input} />
                <Button colorScheme='green' variant='solid' {...inc}>+</Button>
            </HStack>
        )
    }

    return (
        <Card className='card-atta' border={'2px'} borderColor={'blue.400'}>
            <CardBody >
                <Heading size='sm'>{PurchaseOrderLines.description}</Heading>
                <Box mt={3}>
                    <HStack justifyContent={'center'} spacing='10px' divider={<StackDivider />}>
                        <Box>
                            <HStack>
                                <FontAwesomeIcon color='#718096' icon={faTurnDown} />
                                <Text fontSize={'xs'} fontWeight={500} color={'#718096'}>
                                    รอรับ
                                </Text>
                            </HStack>
                            <Center>
                                <Text color={'orange'} fontSize={'md'} fontWeight={700}>{PurchaseOrderLines.receiveQuantity}</Text>
                            </Center>
                        </Box>
                        <Box>
                            <HStack>
                                <FontAwesomeIcon color='#718096' icon={faCheckCircle} />
                                <Text fontSize={'xs'} fontWeight={500} color={'#718096'}>
                                    รับเรียบร้อย
                                </Text>
                            </HStack>
                            <Center>
                                <Text color={'green'} fontSize={'md'} fontWeight={700}>{PurchaseOrderLines.receivedQuantity}</Text>
                            </Center>
                        </Box>

                        <Box>
                            <HStack>
                                <FontAwesomeIcon color='#718096' icon={faWarehouse} />
                                <Text fontSize={'xs'} fontWeight={500} color={'#718096'}>
                                    จำนวนทั้งหมด
                                </Text>
                            </HStack>
                            <Center>
                                <Text color={'blue.400'} fontSize={'md'} fontWeight={700}>{PurchaseOrderLines.quantity}</Text>
                            </Center>
                        </Box>
                    </HStack>
                </Box>
            </CardBody>
            <Box p={3} alignSelf={'center'}>
                {HookUsage(PurchaseOrderLines.receiveQuantity, PurchaseOrderLines.receivedQuantity, PurchaseOrderLines.quantity)}
            </Box>
        </Card>
    )
}
export default ItemComponents