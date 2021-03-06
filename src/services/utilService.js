function concatNumObj(obj1, obj2) {
    const concatedObj = { ...obj1 }
    Object.keys(obj2).forEach(key => {
        concatedObj[key] = concatedObj[key] ? (concatedObj[key] + obj2[key]) : obj2[key]
    })
    return concatedObj
}


function makeId(length = 15) {
    let id = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return id
}


function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}



export const utilService = {
    concatNumObj,
    makeId,
    getRandomInt,
}
