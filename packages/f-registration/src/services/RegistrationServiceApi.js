import { axiosServices } from '@justeat/f-services';

export default {
    async createAccount (url, tenant, data, callback = () => {}) {
        const headers = {
            'Content-Type': 'application/json',
            'Accept-Tenant': tenant
        };

        const client = axiosServices.createClient({ headers, responseCallback: callback });
        return client.post(url, data);
    }
};
