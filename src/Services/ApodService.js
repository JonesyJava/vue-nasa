import { AppState } from '../AppState'
import { apodApi } from './AxiosService'

class ApodService {
  async searchApod (query) {
    const res = await apodApi.get('apod?api_key=P6gGwfAXfQFIs5BI5RZY0XGjfqzKAMFeJTC0P6R7&date=' + query)
    AppState.APOD = res.data
  }
}

export const apodService = new ApodService()
