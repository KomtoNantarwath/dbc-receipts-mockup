
import { useSelector } from 'react-redux';
import { Box, Button, Card, CardBody, CardHeader, Center, Container, HStack, Heading, Spinner, Stack, Text, useToast } from '@chakra-ui/react';
import { NextPage } from 'next';
import ItemComponents from '../components/ReceiptsV2/ItemComponents';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import ReciptsComponents from '../components/ReceiptsV2/ReciptsComponents';
import VendorComponent from '../components/ReceiptsV2/VendorComponent';
import Head from 'next/head'

// Store
import { fetchByNumber } from '../features/purchaser/purchaseSlice';
import { RootState, useAppDispatch } from '../store';
import ToastNotic from '../components/ToastNotic';

const ReceiptsV2: NextPage = () => {
    const router = useRouter()
    const toast = useToast()
    const dispatch = useAppDispatch()
    const { purchaseRespone, isPO } = useSelector((state: RootState) => state.purchaser)
    const [loadding, setLoadding] = useState(false)
    function sendReceipts() {
        setLoadding(true)
        setTimeout(() => {
            setLoadding(false)
            toast({
                position: 'top',
                title: 'Purchase Order.',
                description: "We've Posted purchase order for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }, 2000);
    }

    useEffect(() => {
        // login()
        dispatch(fetchByNumber())
    }, [])

    return (
        <div className='Warpper-receiptsV2'>
            <Head>
                <title>ระบบรับของ</title>
            </Head>
            <Card className='card-atta'>
                <CardHeader className='Hrd-atta' >
                    <Heading size='md' >
                        <HStack justifyContent={'space-between'}>
                            <h1>ระบบรับของ</h1>
                            <Button colorScheme='blackAlpha'
                                variant='solid' onClick={() => router.push('/receipts')}>
                                version 1
                            </Button>
                        </HStack>
                    </Heading>
                </CardHeader>
            </Card>
            <Container maxW='md'>
                {purchaseRespone ?
                    <Box p={3}>
                        <VendorComponent PurchaseHrd={purchaseRespone.value[0]} />
                        <ReciptsComponents />
                        <Heading m={2} size='sm'>สินค้าทั้งหมด</Heading>
                        <Stack spacing={4}>
                            {purchaseRespone.value[0].purchaseOrderLines.map((line => {
                                return <ItemComponents key={line.id} PurchaseOrderLines={line} />
                            }))}
                        </Stack>
                    </Box>
                    : <Center >
                        <Spinner />
                    </Center>}
                <div className='Wapper-footer'>
                    <HStack p={3} justify='space-between'
                        flexWrap='wrap'>
                        <Button flex='1' variant='outline' onClick={() => router.push('/')}>
                            กลับ
                        </Button>
                        <Button
                            flex='2'
                            isLoading={loadding}
                            loadingText='กำลังรับของเข้าระบบ'
                            colorScheme='blue'
                            variant='solid'
                            onClick={() => sendReceipts()}
                        >
                            รับของ
                        </Button>
                    </HStack>
                </div>
                <ToastNotic />
            </Container>
        </div >
    )
}

export default ReceiptsV2

