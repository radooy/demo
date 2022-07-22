import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface appState {
  modalOpen: boolean,
  btcPrice: number | null
}

const initialState: appState = {
  modalOpen: false,
  btcPrice: null
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showModal: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.modalOpen = true
    },
    closeModal: (state) => {
      state.modalOpen = false
    },
    setPrice: (state, action: PayloadAction<number>) => {
        state.btcPrice = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { showModal, closeModal, setPrice } = appSlice.actions

export default appSlice.reducer