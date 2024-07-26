export const openOAuthWindow = (authUrl, name, width, height) => {
  const left = window.screen.width / 2 - width / 2
  const top = window.screen.height / 2 - height / 2

  return window.open(
    authUrl,
    name,
    `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars`
  )
}

export const handleOAuthCallback = (callbackUrl) => {
  const urlParams = new URLSearchParams(window.location.search)
  const token = urlParams.get('token')
  if (token) {
    // Handle the token, e.g., save to localStorage or state management
    localStorage.setItem('authToken', token)
    window.close()
  }
}
