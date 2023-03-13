import ApiClient from "./Client";
import { getLoggedInUser } from './Cookie';

const version = '/api/v1';

const requestParams = {
        headers:{
            'x-access-token':getLoggedInUser()?.token
        }
    };

class RequestService {
 
   create = (data) => ApiClient().post(`${version}/property/requests`, data, requestParams);x

}

export default new RequestService();