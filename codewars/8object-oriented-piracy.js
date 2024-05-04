class Ship {
    constructor(draft, crew) {
        this.draft = draft
        this.crew = crew    
    }
        isWorthIt(){
            let loot = this.draft-this.crew*1.5
            return loot > 20
        }
}