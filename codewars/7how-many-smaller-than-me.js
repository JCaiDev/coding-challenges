const smaller = nums => nums.map((x, i) => 
    nums.slice(i).filter(y=> x >  y).length)

    