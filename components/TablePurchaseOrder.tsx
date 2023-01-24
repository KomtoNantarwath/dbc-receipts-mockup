import mockPruchases from "../mock/purchaseorders.json"

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Center,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Badge
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { purchaseListRespone, PurchaseOrderLines } from "../type/purchaseListsType"
import { useDispatch, useSelector } from "react-redux"
import { setQtyByLine } from "../features/purchaser/purchaseSlice"

interface props {
    purchaseLines: PurchaseOrderLines[]
}

export default function TablePurchaseOrder({ purchaseLines }: props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const [isIndex, setIndex] = useState(0)
    const [isQtyValue, SetIsQtyValue] = useState(0)

    function OpenModel(index: number, qty: number) {
        setIndex(index);
        SetIsQtyValue(qty > 0 ? qty : 1);
        onOpen();
    }

    function SetQtyToStore() {
        dispatch(setQtyByLine({ index: isIndex, qtySet: isQtyValue }))
        onClose();
    }


    return (
        <TableContainer>
            <Table variant='striped'>
                <Thead >
                    <Tr backgroundColor={"gainsboro"}>
                        <Th isNumeric>Qty. to Receive</Th>
                        <Th isNumeric>Qty. Received</Th>
                        <Th isNumeric>Qty. </Th>
                        <Th>Description</Th>
                        <Th>UOM</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {purchaseLines.map((line, index) => {
                        return (
                            <Tr key={line.id}>
                                <Td isNumeric >
                                    <Center>
                                        <Button colorScheme='teal' size='sm' onClick={() => OpenModel(index, line.receiveQuantity)}>
                                            แก้ไข
                                        </Button>
                                        <Badge ml='1' p='1.5' borderRadius='6' fontSize='xl' colorScheme={line.receiveQuantity > line.quantity ? 'red' : 'green'}>
                                            {line.receiveQuantity}
                                        </Badge>
                                    </Center>
                                </Td>
                                <Td isNumeric><Badge p='1.5' borderRadius='6' fontSize='xl' colorScheme='blue' >{line.receivedQuantity}</Badge></Td>
                                <Td isNumeric><Badge p='1.5' borderRadius='6' fontSize='xl' colorScheme='purple'>{line.quantity}</Badge></Td>
                                <Td>{line.description}</Td>
                                <Td>{line.unitOfMeasureCode}</Td>
                            </Tr>
                        )
                    })}

                </Tbody>
            </Table>
            <Modal
                isOpen={isOpen}
                isCentered
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>ใส่จำนวนที่จะรับของเข้าระบบ</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>จำนวน</FormLabel>
                            <NumberInput size='lg' onChange={(input) => SetIsQtyValue(parseInt(input))} defaultValue={isQtyValue > 0 ? isQtyValue : 1} >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => SetQtyToStore()}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </TableContainer>
    )
}
