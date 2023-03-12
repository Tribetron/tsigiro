import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {decoded} from './RouteHelpers';
 
const AUTH_SESSION_KEY = 'hdsdsjlkfhdskjfhdsafsda';

const COUNTRY_SESSION_KEY = 'DLKSAJDNSADSKAJHDSAKJHGIUG';

const GLOBAL_SETTINGS = 'DSALKJDSAOJHDASOIHNDASOIHDSADHSAJKSALH';

/**
 * Sets the default authorization
 * @param {*} token
 */
export const setAuthorization = (token) => {
    if (token) axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
    else delete axios.defaults.headers.common['Authorization'];
};


const getUserFromCookie = () => {
    const user = sessionStorage.getItem(AUTH_SESSION_KEY);
    return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};

export const getGlobalSettings = () => {
    const user = sessionStorage.getItem(GLOBAL_SETTINGS);
    return user ? (typeof user == 'object' ? user : JSON.parse(user)) : null;
};
 
 export const setEntityCountry = (session) => {
        if (session){ 
            sessionStorage.setItem(COUNTRY_SESSION_KEY , session);
            return true
        }else {
            sessionStorage.removeItem(COUNTRY_SESSION_KEY);
            return false
        }
};

export const getEntityCountry = () => {
    const user = sessionStorage.getItem(COUNTRY_SESSION_KEY);
    return user
};

 export const setGlobalSettings = (session) => {
        if (session){ 
            sessionStorage.setItem(GLOBAL_SETTINGS, JSON.stringify(session));
            return true
        }else {
            sessionStorage.removeItem(GLOBAL_SETTINGS);
            return false
        }
    };

 export const setLoggedInUser = (session) => {
        if (session){ 
            sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify(session));
            return true
        }else {
            sessionStorage.removeItem(AUTH_SESSION_KEY);
            return false
        }
    };
    /**
     * Returns the logged in user
     */
  export const getLoggedInUser = () => {
        return getUserFromCookie();
    };

   export const setUserInSession = (modifiedUser) => {
        let userInfo = sessionStorage.getItem(AUTH_SESSION_KEY);
        if (userInfo) {
            const { token, user } = JSON.parse(userInfo);
            setLoggedInUser({ token, ...user, ...modifiedUser });
        }
    };

    
   export const isUserAuthenticated =  () => {
        const fromUrl = window.location.href.split('?')[1];
        if(fromUrl){
        const decodeURL = decoded(fromUrl || '');
        const originalURL = fromUrl && JSON.parse(decodeURL);
            if(originalURL.success === true){
                setLoggedInUser(originalURL);
                setGlobalSettings(originalURL.globalSettings[0]);
                setEntityCountry(originalURL.defaultCountry || originalURL.globalSettings[0]?.globalEntityCountries[0]);
            };
        };

        const user = getLoggedInUser();

        if (!user) {
            return false;
        }
        const decodeds = jwtDecode(user.token);
        const currentTime = Date.now() / 1000;
        if (decodeds.exp < currentTime) {
            return false;
        } else {
            return true;
        }
    };

    export const getDecodedUser = () =>{
        if(isUserAuthenticated()){
        return  jwtDecode(getLoggedInUser().token);
        }else{
            return {}
        }
    }

    export const encodeBase64 = (data) => {
    if (typeof btoa === "function") {
        return btoa(data);
    } else if (typeof Buffer === "function") {
        return Buffer.from(data, "utf-8").toString("base64");
    } else {
        throw new Error("Failed to determine the platform specific encoder");
    }
}

 
 