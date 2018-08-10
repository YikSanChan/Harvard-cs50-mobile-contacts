// problem: what we get doesn't have a text name. name is an Object.
export const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=50&nat=us')
    const {results} = await response.json()
    return results
}