class Journey{
    constructor(object, crew, balloons) {
        this.weight = object.weight
        this.crew = crew
        this.balloons = balloons

        this.isPossible = () => {
            let liftCap = this.balloons* 0.0048
            let totalWeight = this.crew*80 + this.weight

            return liftCap > totalWeight
        }
    }
}