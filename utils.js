
export function isUser(data,id) {
  return data.map(val => val.id).includes(id)
}
export function indexOfUser(data =[], id) {
  return data.findIndex(val => val.id === id)
}
export function isActiveUser(data, id) {
  const index = indexOfUser(data, id)
  return data[index].isActive
}