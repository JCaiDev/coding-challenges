function findAdmin(list, lang) {
    return list.filter(p => p.language === lang && p.githubAdmin === 'yes');
}