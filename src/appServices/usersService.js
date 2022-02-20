const KEYS ={
    users:'users',
    userId:'userId'
}


export const getMaritalStatuses = ()=>([
    { id: '1', title: 'Mariied' },
    { id: '2', title: 'Single' },
    { id: '3', title: 'Devorsed' }
])
  

export function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('users'));
}

export function updateLocalStorageWith(data) {
    localStorage.setItem('data', JSON.stringify(data))
    return true;
}

export function insertUser(data) {
    let users=getAllUsers();
    data['id'] = generateUserId()
    users.push(data)
    localStorage.setItem(KEYS.users, JSON.stringify(users))
}

export function generateUserId() {
    if (localStorage.getItem(KEYS.userId) == null)
        localStorage.setItem(KEYS.userId, '0')
    let id = parseInt(localStorage.getItem(KEYS.userId))
    localStorage.setItem(KEYS.userId, (++id).toString())
    return id;
}

export function getAllUsers() {
    if (localStorage.getItem(KEYS.users) == null)
        localStorage.setItem(KEYS.users, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.users));
}