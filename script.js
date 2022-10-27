function separateWordWith(word, separator) {
    let wordFinal, separatorFinal;
    if (word === null || separator === null) return 'A param is null, not allowed';
    if (typeof word === 'string' && typeof separator === 'string') return word.split(separator);
    function assignVar(param, store) {
        switch (typeof param) {
            case 'string':
                store = param;
                break;
            case 'object':
                if (typeof Object.values(param)[0] === 'string') {

                    store = Object.values(param)[0];
                }
                break;
            default:
                break;
        }
        return store;

    }
    assignVar(word, wordFinal);
    assignVar(separator, separatorFinal);
    if (wordFinal === undefined) return "Param1 is not a string";
    if (separatorFinal === undefined) return "Param2 is not a string";
    return wordFinal.split(separatorFinal);
}

console.log(separateWordWith({ p: 'jamaica es absurdo, fisica cuantica' }, 'ca'))
