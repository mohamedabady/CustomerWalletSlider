export const ShortcutMoneyAmount = (amount) => {
    let divisionAmount;
    if (amount > 0) {
        divisionAmount = amount >= 1000000 ? amount / 1000000 : amount / 1000;
    } else if (amount < 0) {
        divisionAmount = amount <= -1000000 ? amount / 1000000 : amount / 1000;
    } else {
        divisionAmount = 0
    }

    let stringifiedAmount = divisionAmount.toFixed(1);
    
    if (stringifiedAmount[stringifiedAmount.length - 1] == '0') {
        
        stringifiedAmount = stringifiedAmount.slice(0, stringifiedAmount.length - 2)
    }

    if (amount >= 1000000) {
        return stringifiedAmount + 'M';
    } else if (amount >= 1000 && amount < 1000000) {
        return stringifiedAmount + 'K'
    } else {
        return amount;
    }
}