import { stat } from './ststistics.js';
import { creatCustomer } from './actions_user_acount.js';

export function UIstat(data) {
  const statics = stat(data)
  console.log(`
===== Statistics =====
Total Customers:  ${statics.totalUsers}
Active Accounts:  ${statics.activUsers}
Total Money:      ${statics.totalMoney}
Average Balance:  ${statics.average}
Highest Balance:  ${statics.maxBalance}
  `)


}
export function menu() {
  console.log(`
======== menu ========
Create Customer => 1
Show Customers  => 2
Deposit         => 3
Withdraw        => 4
Search Customer => 5
Close Account   => 6
Show Statistics => 7
EXIT            => 0 

  `)
}
