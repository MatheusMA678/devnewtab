import axios from 'axios'

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
})

export const tabnewsApi = axios.create({
  baseURL: 'https://www.tabnews.com.br/api/v1',
})
