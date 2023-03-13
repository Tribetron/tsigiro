import ApiClient from "./Client";
import { getLoggedInUser } from './Cookie';

const version = '/api/v1';

const requestParams = {
        headers:{
            'x-access-token':getLoggedInUser()?.token
        }
    };

class PropertyService {
 
    getPropertyList = (query) => ApiClient().
        get(`${version}/properties?${query}`, requestParams);

}

export default new PropertyService();