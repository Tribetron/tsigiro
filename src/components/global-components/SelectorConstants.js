import Properties from './Properties.svg';
import Investments from './Investments.svg';
// import {getDecodedUser, getLoggedInUser} from '../../API/Cookies';
// import {encoded} from '../../API/RouterHelpers';

const handleInvestmentsRedirection =()=>{
    // const validAuth = JSON.stringify(getLoggedInUser());
    // const urlEncodedAuth = encoded(validAuth);
    // window.location.href = process.env.REACT_APP_INVESTMENTS +"?"+urlEncodedAuth;
};

const handlePropertiesRedirection =()=>{
    // const validAuth = JSON.stringify(getLoggedInUser());
    // const urlEncodedAuth = encoded(validAuth);
    // window.location.href = process.env.REACT_APP_PROPERTIES +"?"+urlEncodedAuth;
};

const handleFuneralCoverRedirection =()=>{
    // const validAuth = JSON.stringify(getLoggedInUser());
    // const urlEncodedAuth = encoded(validAuth);
    // window.location.href = process.env.REACT_APP_PROPERTIES +"?"+urlEncodedAuth;
}

export const SelectorConstants =  [
            {
            redirectURL:handlePropertiesRedirection,
            image: Properties,
            title:'Tsigiro Properties',
            description:'Property Investments made simple and accessible'
            },
            {
            redirectURL:handleInvestmentsRedirection,
            image: Investments,
            title:'Tsigiro Investments',
            description:'Buy equity and manage your investments with ease'
            },
            {
            redirectURL:handleFuneralCoverRedirection,
            image: Properties,
            title:'Tsigiro Funeral Cover',
            description:'Diginified funeral and financial services'
            }
]