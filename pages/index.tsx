import { NextPage } from 'next';
import { Spinner, Center, Container, Text, Stack, Button, Box } from '@chakra-ui/react'
import Image from 'next/image';
import heroImage from '../public/image/business-3d-close-up-of-cardboard-box.png'
import { useRouter } from 'next/router'
import Head from 'next/head';

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <div className='Warpper'>
      <Head>
        <title>ระบบรับของ</title>
      </Head>
      <Container maxW='container.sm' >
        <Center>
          <Stack className='image-center' spacing={6} >
            <Image loading='lazy' width={200} className='img' src={heroImage} alt={'heroImage'} />
            <Box>
              <Text fontSize='4xl' color={'white'} fontWeight={700}>ระบบรับของ</Text>
              <Text color={'white'} >เพื่อสำหรับบันทึกรับสินค้าเข้าคลัง จำนวนสินค้าจะ Link เข้าไปแสดงใน Stock ให้อัตโนมัติและการบันทึกลงระบบ ERP</Text>
            </Box>
            <Button colorScheme='whiteAlpha' borderRadius={20} variant='solid' onClick={() => router.push('/receiptsV2')}>
              Get Start
            </Button>
          </Stack>
        </Center>
      </Container>
    </div>
  )
}

export default Home

