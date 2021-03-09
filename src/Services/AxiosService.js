// @ts-ignore
import axios from 'axios'

export const apodApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/',
  timeout: 3000
})
// https://api.nasa.gov/planetary/apod?api_key=MmXuDmeGyvIhKzNlAhRgLxqF5tlGR3Nu1tVdNBOm

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=MmXuDmeGyvIhKzNlAhRgLxqF5tlGR3Nu1tVdNBOm
