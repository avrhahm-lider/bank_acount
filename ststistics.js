import { isActiveUser } from './utils.js';
export function stat(data) {
  const statics = {
totalUsers : data.length,
 activUsers : data.filter(val => val.isActive).length,
 totalMoney : data.reduce((acc, val) => acc + val.balance, 0),
maxBalance : data.map(val => val.balance).sort((a, b) => b - a)[0]
  }
  statics.average = statics.totalMoney / statics.totalUsers
  return statics
}


