export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333'
    : 'https://virtualmind-api.herokuapp.com'

export const QUESTIONS_GET = () => {
  return {
    url: `${baseURL}/questions`,
    options: {
      method: 'GET',
      mode: 'cors',
      cache: 'no-store'
    }
  }
}

export const ANSWERS_GET = () => {
  return {
    url: `${baseURL}/answers`,
    options: {
      method: 'GET',
      mode: 'cors',
      cache: 'no-store'
    }
  }
}
