const fetchOptions = (method: RequestInit['method']): RequestInit => {
  return {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }
}

export const axios = {
  get<T>(url: string): Promise<T> {
    return fetch(url, fetchOptions('GET'))
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .catch(e => {
        console.log(e)
      })
  }
}