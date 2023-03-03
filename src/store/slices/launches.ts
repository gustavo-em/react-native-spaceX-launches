import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  Launch,
  LaunchesFulfilledAction,
  LaunchesState,
} from '../../models/launches';
import {LaunchesService} from '../../services/launchesService';

export const getLaunches = createAsyncThunk<
  Launch[], // Tipo de retorno da ação assíncrona
  void, // Tipo dos argumentos opcionais da ação (vazio no seu caso)
  {
    rejectValue: {message: string};
  }
>('launches/getLaunches', async function () {
  try {
    const launcheService = new LaunchesService();
    const response = await launcheService.getAll();
    return response;
  } catch (error) {
    console.log(error);
    return [] as Launch[]; // Retorna um array vazio em caso de erro
  }
});

const launchesSlice = createSlice({
  name: 'launches',
  initialState: {
    launches: [],
    status: 'idle',
    error: null,
  } as LaunchesState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getLaunches.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        getLaunches.fulfilled,
        (state, action: LaunchesFulfilledAction) => {
          state.status = 'succeeded';
          state.launches = action.payload;
        },
      )
      .addCase(getLaunches.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.payload
          ? action.payload.message
          : action.error.message;
      });
  },
});

export default launchesSlice.reducer;
