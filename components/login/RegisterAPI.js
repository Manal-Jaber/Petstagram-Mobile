import Constants from 'expo-constants';
export const RegisterAPI = async(username, email, password)=>{
    // const response = await fetch(`${Expo.Constants.extra.Host}/api/register`,{
    const response = await fetch(`${Constants.manifest.extra.Host}/api/register`,{

        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body: JSON.stringify({
            username,           //ES6: same as username:username (key same as value)
            email,
            password
          })
    })
    const data = await response.json();
    return data;
}