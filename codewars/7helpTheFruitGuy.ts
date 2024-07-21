function removeRotten(bagOfFruits: string[] | null | undefined): string[] {
    return bagOfFruits ? bagOfFruits.map(x=> x.toLowerCase().replace('rotten', '')) : [];
}