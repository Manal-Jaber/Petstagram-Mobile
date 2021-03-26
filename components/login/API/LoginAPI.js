import Constants from 'expo-constants';
export const LoginAPI = async(email, password)=>{
    const response = await fetch(`${Constants.manifest.extra.Host}/api/login`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify({
            email,           //ES6: same as username:username (key same as value)
            password
          })
    })
    const data = await response.json();
    return data;
}
export const verifyToken = async(token)=>{
    const response = await fetch(`${Constants.manifest.extra.Host}/api/verify`,{
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `Bearer ${token}`
          },
    })
    const data = response.json();
    return data;
}