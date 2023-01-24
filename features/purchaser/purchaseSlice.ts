import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { purchaseHrd, purchaseListRespone } from '../../type/purchaseListsType'
interface PruchaseLineReq {
    lineno: number,
    qtytoreceive: number
}
interface PruchaseReq {
    no: string
    purchaselines: PruchaseLineReq[]
}
interface purchaseState {
    purchaseRespone: purchaseListRespone | null
    responeState: any
    purchaseReq: PruchaseReq
    isSendPOLodding: boolean
    isSendPOSussec: boolean
    isSendPOError: any
    isSendPO: boolean | null
    POnumber: string
    isPO: boolean,
    isPOLoadding: boolean
    isPOError: any

}
const initialState: purchaseState = {
    purchaseRespone: null,
    responeState: null,
    purchaseReq: {
        no: '',
        purchaselines: []
    },
    isSendPOLodding: false,
    isSendPOSussec: false,
    isSendPOError: null,
    isSendPO: null,
    POnumber: '',
    isPO: false,
    isPOError: '',
    isPOLoadding: false
}

// First, create the thunk
export const fetchByNumber = createAsyncThunk(
    'purchase/fetchALL',
    async (payload, thunkAPI) => {
        const response = fetch('api/purchaseOrders').then(response => response.json())
        return response as any
    }
)

export const purchaseSlice = createSlice({
    name: 'purchase',
    initialState,
    reducers: {
        setQtyByLine: (state, action) => {
            const index = action.payload.index;
            const qtySet = action.payload.qtySet;
            if (state.purchaseRespone) {
                state.purchaseRespone.value[0].purchaseOrderLines[index].receiveQuantity = qtySet
                state.purchaseReq.purchaselines[index].qtytoreceive = qtySet
            }
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchByNumber.pending, (state, action) => {
            state.purchaseRespone = null
            state.isSendPO = false;
            state.isSendPOSussec = false;
            state.isSendPOError = null

            state.isPOLoadding = true
            state.isPO = false;
            state.isPOError = null;
        })
        builder.addCase(fetchByNumber.fulfilled, (state, action) => {
            state.isPOLoadding = false
            state.purchaseRespone = action.payload
            if (state.purchaseRespone?.value.length && state.purchaseRespone?.value.length > 0) {
                state.isPO = true
                const documentNo = state.purchaseRespone?.value[0].number;
                state.POnumber = documentNo;
                let purchaseArray: PruchaseLineReq[] = [];

                state.purchaseRespone.value[0].purchaseOrderLines.map((line, index) => {
                    const purchaseline: PruchaseLineReq = {
                        lineno: line.sequence,
                        qtytoreceive: line.receiveQuantity
                    }
                    purchaseArray.push(purchaseline)
                })

                const purchaseHrd: PruchaseReq = {
                    no: documentNo,
                    purchaselines: purchaseArray
                }
                state.purchaseReq = purchaseHrd
            }
        })
        builder.addCase(fetchByNumber.rejected, (state, action) => {
            state.purchaseRespone = null
            state.isPOLoadding = false
            state.isPO = false
            state.isPOError = action.payload;
        })
    },
})

export const { setQtyByLine } = purchaseSlice.actions

export const selectPurchase = (state: RootState) => state.purchaser

export default purchaseSlice.reducer