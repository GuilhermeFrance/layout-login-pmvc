import { reactive } from "vue";
import {users} from "./users"

const STORAGE_KEY_USER = 'mock_user';
const STORAGE_KEY_TOKEN = 'mock_token';

const authState = reactive({

    user:JSON.parse(localStorage.getItem(STORAGE_KEY_USER)) || null,
    token:localStorage.getItem(STORAGE_KEY_TOKEN) || null

});

function generateToken(username) {
    return btoa(`${username}${Date.now()}`)
}

function login(username, password){
    return new Promise((resolve, reject) => {
        const user = users.find(u => u.username === username && u.password === password);
    
    
    setTimeout(()=>{

        if(user){

            const token = generateToken(username);

            authState.user = {id: user.id, username: user.username, name: user.name};
            authState.token = token;

            localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(authState.user));
            localStorage.setItem(STORAGE_KEY_TOKEN, authState.token)

            resolve(authState.user);
        }else{
            reject(new Error('Credenciais incorretas!'));
        }
    },250)  
        })}

function logout(){

        authState.user = null;
        authState.token = null;
        localStorage.removeItem(STORAGE_KEY_USER);
        localStorage.removeItem(STORAGE_KEY_TOKEN);
    }
function isAuthenticated(){
    return !!authState.token;
}

export default { authState, login, logout, isAuthenticated }