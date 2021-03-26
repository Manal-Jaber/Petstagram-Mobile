import Constants from 'expo-constants';
export const LogoutAPI = async(token)=>{
    const response = await fetch(`${Constants.manifest.extra.Host}/api/logout`, {
        method: 'Post',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json();
    return data;
}