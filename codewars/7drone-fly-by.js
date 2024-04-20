function flyBy(lamps, drone) {
    return [...lamps].fill("o", 0, drone.length).join('')
}