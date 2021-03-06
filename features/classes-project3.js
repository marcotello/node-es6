class BankAccount {
  constructor (amount, name) {
    this.name = typeof name === 'string' ? name : this.generateRandomName();
    this.amount = typeof amount === 'number' ? amount : 0;
    this.lastUpdated = new Date();
  }
  set amount (val) {
    this._amount = val;
     this.lastUpdated = new Date();
  }
  get amount () {
    return this._amount;
  }
  deposit (amount) {
    this.amount += amount;
  }
  withdrawal (amount) {
    this.amount -= amount;
  }
  generateRandomName () {
    let randomName = '' + (Math.floor((Math.random() * 1000000000) + 1));
    while (randomName.length < 11) {
        randomName = '0' + randomName;
    }
    return randomName;
  }
  printName () {
    console.log(`The account name is: ${this.name}`);
  }
  printBalance () {
    console.log(`The balance is: ${this.amount} Last updated at ${this.lastUpdated}`);
  }
}

class SavingsAccount extends BankAccount {
  constructor (amount, name) {
    super(amount, name);
  }
  deposit(amount) {
    super.deposit(amount);
    console.log(`Congratulations you have saved ${this.amount}`);
  }
  withdrawal (amount) {
    console.log('Sorry, only deposits are permited.');
  }
}

var account = new BankAccount(100, 'MARCO-ACCOUNT');
account.printName();
account.deposit(100);
account.withdrawal(10)
account.printBalance();


var account2 = new BankAccount();
account2.printName();
account2.deposit(200);
account2.withdrawal(150)
account2.printBalance();

var account3 = new SavingsAccount(500, 'Savings-Account');
account3.printName();
account3.deposit(200);
account3.withdrawal(150)
account3.printBalance();
