import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ApiError, Task } from 'types'

type PH_ACTION_ARGS= {
  onFailure?: (error: any) => void
  onStart?: () => void
  onSuccess?: () => void
}

export const PH_ACTION_NAME= createAsyncThunk<
  PH_RETURN_TYPE,
  PH_ACTION_ARGS,
  { rejectValue: ApiError }
>(
  'LOGICAL/NAME/STORE',
  async (
    { onSuccess, onFailure, onStart },
    { rejectWithValue, signal }
  ) => {
    try {
      onStart?.()
      const results = await PH_SERVICE_NAME(
        { id/payload or BOTH },
        { signal }
      )
      onSuccess?.()
      return results
    } catch (error: any) {
      onFailure?.(error)
      return rejectWithValue(
        axios.isAxiosError(error) && error.response
          ? error.response.data
          : { error }
      )
    }
  }
)

