export const usersAcounts = []



function newID() {
  let id = 0
  function nextID() {
    return id++
  }
  return nextID
}
export const userNextId = newID()