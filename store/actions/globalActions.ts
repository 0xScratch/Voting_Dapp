import { ContestantStruct, GlobalState, PollStruct } from "@/utils/types";
import { PayloadAction } from "@reduxjs/toolkit";

export const globalActions = {
    setWallet: (state: GlobalState, action: PayloadAction<string>) => {
        state.wallet = action.payload
    },
    setCreateWallet: (state: GlobalState, action: PayloadAction<string>) => {
        state.createModal = action.payload
    },
    setUpdateWallet: (state: GlobalState, action: PayloadAction<string>) => {
        state.updateModal = action.payload
    },
    setDeleteWallet: (state: GlobalState, action: PayloadAction<string>) => {
        state.deleteModal = action.payload
    },
    setContestWallet: (state: GlobalState, action: PayloadAction<string>) => {
        state.contestModal = action.payload
    },
    setPolls: (state: GlobalState, action: PayloadAction<PollStruct[]>) => {
        state.polls = action.payload
    },
    setPoll: (state: GlobalState, action: PayloadAction<PollStruct>) => {
        state.poll = action.payload
    },
    setContestants: (state: GlobalState, action: PayloadAction<ContestantStruct[]>) => {
        state.contestants = action.payload
    },
}