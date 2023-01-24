import { Box, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { purchaseHrd } from "../type/purchaseListsType";


interface props {
    purchaseRespone: purchaseHrd
}


const ReportHrd = ({ purchaseRespone }: props) => {
    return (
        <Stack divider={<StackDivider />} spacing='4'>
            <Heading size='md'>Purchase Order</Heading>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                    Document No.
                </Heading>
                <Text pt='2' fontSize='sm'>
                    {purchaseRespone.number} ∙ {purchaseRespone.postingDate}
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                    Vendor Name
                </Heading>
                <Text pt='2' fontSize='sm'>
                    {purchaseRespone.vendorName}
                </Text>
            </Box>
            <Box>
                <Heading size='xs' textTransform='uppercase'>
                    Order Date
                </Heading>
                <Text pt='2' fontSize='sm'>
                    {purchaseRespone.orderDate}
                </Text>
            </Box>
        </Stack>
    )
}

export default ReportHrd