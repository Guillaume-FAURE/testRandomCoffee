function compareString(string1: string, string2: string):Array<string>{
    let string1Array=Array.from(string1) //string1 decomposed in characters
    let commonChar:Array<string> =[] //string to return
    for (let i=0; i<string1.length;i++){
        let tempRegex:RegExp = new RegExp(`${string1Array[i]}`);//return all the character, we could have add another regex comparison if we wanted just the letter
        let tempChar = string2.match(tempRegex)
        if (tempChar!==null && commonChar.includes(string1Array[i])===false) {commonChar.push(tempChar[0])}
    }
    commonChar.sort();//if we want to have the common characters in alphabetical order
    console.log(commonChar)
    return commonChar;
}

//Test function
compareString("Episthelmoz","Episteme")
