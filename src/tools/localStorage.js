
export const getFromStorage = key => {
    let data = localStorage.getItem(key)
    data = JSON.parse(data)
    return data
}

export const putInStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const updateStorage = (key, data) => {
    deleteFromStorage(key)
    putInStorage(key, data)
}

export const deleteFromStorage = key => {
    localStorage.setItem(key, null)
}