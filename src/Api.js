// export const baseURL = 'http://localhost:3333'
export const baseURL = 'https://virtualmind-api.herokuapp.com'

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
