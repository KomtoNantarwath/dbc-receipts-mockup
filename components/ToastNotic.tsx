import { useToast } from "@chakra-ui/react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../store"

import { fetchByNumber } from "../features/purchaser/purchaseSlice"

const ToastNotic = () => {
    const { isSendPOSussec, isSendPO, isSendPOError, POnumber, isSendPOLodding } = useSelector((state: RootState) => state.purchaser)
    const { token } = useSelector((state: RootState) => state.auther)
    const toast = useToast()
    const dispatch = useAppDispatch()


    useEffect(() => {
        if (isSendPOSussec && isSendPO) {
            toast({
                title: 'สำเร็จ',
                description: "ได้ทำการส่งข้อมูลไปยังระบบ ERP เรียบร้อย",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
            setTimeout(() => {
                dispatch(fetchByNumber())
            }, 1000);
        }
        if (!isSendPO && isSendPOError) {
            toast({
                title: 'ผิดพลาด',
                description: isSendPOError,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }, [isSendPO, isSendPOLodding])
    return (
        <>
        </>
    )
}
export default ToastNotic