const createAccount = (pin, amount) => {
	return {
		checkBalance(inputPin) {
			if (inputPin !== pin) return "invalid pin";
			return `${amount}`;
		},
		deposit(inputPin, newAmount) {
			if (inputPin !== pin) return "invalid pin";
			amount += newAmount;
			return `successfully deposited $${newAmount}.  current balance: $${amount}`;
		},
		withdraw(inputPin, withdrawalAmount) {
			if (inputPin !== pin) return "invalid pin";
			if (withdrawalAmount > amount)
				return "withdrawl amount exceeds account balance.  transaction cancelled";
			amount -= withdrawalAmount;
			return `successfully withdrew $${withdrawalAmount}.  current balance is $${amount}`;
		},
		changePin(oldPin, newPin) {
			if (oldPin !== pin) return "invalid pin";
			pin = newPin;
			return "pin successfully changed";
		},
	};
};

module.exports = { createAccount };
