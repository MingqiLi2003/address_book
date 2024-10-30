import axios from 'axios'

const request = axios.create({
    baseURL: 'http://43.136.49.79:3000'
})

export default request