
import { isUser, indexOfUser, isActiveUser } from './utils.js';
import { userNextId } from './users_db.js';





export function creatCustomer(data, fulName = "", accountTyp = ",", balanc = 0) {
  if (balanc < 0) 
  return "❌ balance lower then ziro"
  if (!fulName)
    return "❌name not entered"
  if (!["regular", "premium", "student"].includes(accountTyp)) 
    return "❌invalid type account"
  const userAcount = {
    id: JSON.stringify(userNextId()),
    fullName: fulName,
    accountType: accountTyp,
    balance: balanc,
    isActive: true
    }
  data.push(userAcount)
  return "✅ Customer created successfully"
}

export function deposit(data, id = "", sum) {
  if (!isUser(data, id))
      return "❌ user not fuond"
  if (sum < 0)
    return "❌ balance lower then ziro"
  if (!isActiveUser(data, id)) 
     return "❌ user not active "
    data[indexOfUser(data, id)].balance += sum 
    return true

}
export function withdraw(data, id = "", sum) {
  if (data.find(val => val.id === id).balanc - sum < 0) {
    return "❌Withdraw failed: insufficient balance"
  }
  if (!isUser(data, id))
      return "❌ user not fuond"
  if (sum < 0)
    return "❌ balance lower then ziro"
  if (!isActiveUser(data, id)) 
     return "❌ user not active "
  return false
}

 
export function closeAccount(data=[], id) {
  if (!isUser(data, id)) 
    return "❌ user not fuond"
      data[indexOfUser(data, id)].isActive = false
    return "✅ Account closed successfully"
  }
export function getUserById(data, id) {
    if (isUser(data, id)) {
      return data.find(val => val.id === id)
  }
  return "❌user not found"
}