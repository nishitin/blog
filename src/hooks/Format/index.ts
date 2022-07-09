export const UseDateFormat = (createdAt: string) => {
  const dateFormat = createdAt.replace(/T.+$/g, '')

  return {
    dateFormat,
  }
}
