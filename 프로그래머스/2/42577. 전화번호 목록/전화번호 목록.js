function solution(phone_book) {
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    
    return true;
}

function solution2(phone_book) {
    const phoneSet = new Set(phone_book);
    
    for (let phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            const prefix = phone.substring(0, i);
            if (phoneSet.has(prefix)) {
                return false;
            }
        }
    }
    
    return true;
}