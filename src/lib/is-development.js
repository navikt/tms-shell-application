export default isDevelopment = () => {
  return typeof window !== undefined && /localhost/.test(window.location.href)
}