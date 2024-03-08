function outed(meet, boss){
    let names = Object.keys(meet)
    
    let score = (names.reduce((s, v)=> s + meet[v], 0) + meet[boss]) / names.length
    
    return score <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
  }