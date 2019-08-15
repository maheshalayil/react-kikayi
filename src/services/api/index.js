import { api } from './kikayiApi';

export default class KikayiApiService { 
    static request = async (options) => {
        let response = { data:null, error: null, success: false}
        try {
            console.log('calling api', options);
            const res = await api.request(options);
            if(res.data && res.data.success) {
                return Promise.resolve(res.data);
            }
            Promise.resolve(response);
        } catch (error) {
            response.error = error;
            Promise.resolve(response);
        }
    }
}