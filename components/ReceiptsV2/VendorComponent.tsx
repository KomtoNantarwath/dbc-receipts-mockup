import { Box, Card, CardBody, HStack, Heading, Text, Divider, StackDivider, Stack } from "@chakra-ui/react"
import { purchaseHrd } from "../../type/purchaseListsType"
import Image from "next/image"

interface props {
    PurchaseHrd: purchaseHrd
}


const VendorComponent = ({ PurchaseHrd }: props) => {
    return (
        <>
            <Heading m={2} size='sm'>ผู้ขาย</Heading>
            <Box p={5}>
                <Stack divider={<StackDivider />} spacing='3'>
                    <HStack>
                        <Image loading="eager" width={35} height={35} src={'https://img.icons8.com/laces/64/null/user.png'} alt={'vendor'} />
                        <Text >{PurchaseHrd.vendorName}</Text>
                    </HStack>
                    <HStack>
                        <Image loading="eager" width={35} height={35} src={'https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/null/external-truck-transport-smashingstocks-detailed-outline-smashing-stocks-9.png'} alt={'truck'} />
                        <Box>
                            <Text fontSize={'xs'}>{PurchaseHrd.shipToAddressLine1}</Text>
                            <Text fontSize={'xs'}>{PurchaseHrd.shipToAddressLine2}</Text>
                        </Box>
                    </HStack>
                </Stack>
            </Box>
        </>
    )
}
export default VendorComponent