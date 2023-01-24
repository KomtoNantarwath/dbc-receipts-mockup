import { useEffect, useState } from 'react'
import { NextPage } from 'next';
import { useSelector } from 'react-redux';

import { Stack, StackDivider, Button, Container, Spinner, Center, Card, CardHeader, Heading, HStack } from '@chakra-ui/react'
import TablePurchaseOrder from '../components/TablePurchaseOrder'


import { fetchByNumber } from '../features/purchaser/purchaseSlice';
import { RootState, useAppDispatch } from '../store';
import ReportHrd from '../components/ReportHrd';
import ToastNotic from '../components/ToastNotic';
import Head from 'next/head';
import { useRouter } from 'next/router'


type Profile = {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
}

const Receipts: NextPage = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { purchaseRespone } = useSelector((state: RootState) => state.purchaser)
    const [loadding, setLoadding] = useState(false)

    useEffect(() => {
        dispatch(fetchByNumber())
    }, [])

    function sendReceipts() {
        setLoadding(true)
        setTimeout(() => {
            setLoadding(false)
        }, 2000);
    }

    if (purchaseRespone) {
        return (
            <div>
                <Head>
                    <title>ระบบรับของ</title>
                </Head>
                <Card className='card-atta'>
                    <CardHeader className='Hrd-atta' >
                        <Heading size='md' >
                            <HStack justifyContent={'space-between'}>
                                <h1>ระบบรับของ</h1>
                                <Button colorScheme='blackAlpha'
                                    variant='solid' onClick={() => router.push('/receiptsV2')}>
                                    version 2
                                </Button>
                            </HStack>
                        </Heading>
                    </CardHeader>
                </Card>
                <Container maxW={'2xl'} mt={5}>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <ReportHrd purchaseRespone={purchaseRespone?.value[0]} />
                        <TablePurchaseOrder purchaseLines={purchaseRespone?.value[0].purchaseOrderLines} />
                        <Button
                            isLoading={loadding}
                            loadingText='กำลังรับของเข้าระบบ'
                            colorScheme='teal'
                            variant='outline'
                            onClick={() => sendReceipts()}
                        >
                            ยืนยันการรับของ
                        </Button>
                    </Stack>
                    <ToastNotic />
                </Container>
            </div>
        )
    }
    return (
        <Center>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Center>
    )
}

export default Receipts

