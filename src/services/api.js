import axios from "axios";
import qs from "qs"

class API{
    constructor(baseURL){
        this.baseURL = baseURL;

        this.instance = axios.create({
            baseURL: this.baseURL,
            timeout: 1000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/josn',
                'Access-Control-Allow-Origin' : 'https://okibawa.com'
            }
        })
    }

    // ajax optional 
    async getEntity(entityType, filters){
        if(!!filters){
            let query = qs.stringify(filters, {arrayFormat: 'comma', encode: false});
            return await this.instance.get(`/${entityType}?${query}`)
        }
        return await this.instance.get(`/${entityType}/`);
    }

    // entity = data (body)
    async createEntity(entityType, entity){
        return await this.instance.post(`${entityType}`, entity)
    }

    // patch one entity
    async patchEntity(entityType, filters, newEntity){
        if(!filters) throw new Error('filters not defined');

        let query = qs.stringify(filters, {arrayFormat: 'comma', encode: false});
        return await this.instance.patch(`${entityType}?${query}`, newEntity);
    }

    // delete one entity to avoid delete all database
    async deleteEntity(entityType, filters){
        if(!filters) throw new Error('filters not defined');

        let query = qs.stringify(filters, {arrayFormat: 'comma', encode: false});
        return await this.instance.delete(`${entityType}?${query}`);
    }

    async login(credentials){
        if(!credentials) throw new Error('Credentials missing');

        return await this.instance.post('/user/login', credentials);
    }
}

const api = new API('https://okibawa.com/api');

export {
    api, API
}