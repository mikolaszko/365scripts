import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { updateOneTaskService } from 'services'
import { ApiError, Task } from 'types'

type patchOneTaskActionArgs = {
  taskId: number
  payload: Partial<Task>
  onFailure?: (error: any) => void
  onStart?: () => void
  onSuccess?: () => void
}

export const patchOneTaskAction = createAsyncThunk<
  Task,
  patchOneTaskActionArgs,
  { rejectValue: ApiError }
>(
  'prospects/patchOneTaskAction',
  async (
    { taskId, payload, onSuccess, onFailure, onStart },
    { rejectWithValue, signal }
  ) => {
    try {
      onStart?.()
      const results = await updateOneTaskService(
        { taskId, payload },
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

