function getFirstPython(list) {
    const dev = list.find(x=> x.language === 'Python')

    return dev ? `${dev.firstName}, ${dev.country}` : 'There will be no Python developers'
}