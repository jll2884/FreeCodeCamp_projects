function rot13(str) { // LBH QVQ VG!
    let arr = str.split('');
    let reg = /[^A-Z]+/g;
    for(let letter in arr){
        if(reg.test(arr[letter])){
        }
        else{
            if(arr[letter].charCodeAt(0)-13<65){
                let num = 65-(arr[letter].charCodeAt(0)-12);
                let newLetter = 90-num;
                arr[letter] = String.fromCharCode(newLetter)
            }
            else{

                let letter_new= arr[letter].charCodeAt(0)-13;
                arr[letter]= String.fromCharCode(letter_new)
            }
        }
    }
    return arr.join('')
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");