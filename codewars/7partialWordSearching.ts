function wordSearch( query: string, seq: string[]) : string[] {
    let reg = new RegExp(query, "i");
    let result = seq.filter(x=> {
        return reg.test(x);
    })

    return result.length > 0 ? result : ["Empty"]
}