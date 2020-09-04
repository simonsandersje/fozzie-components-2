import { axiosServices } from '@justeat/f-services';
import RegistrationServiceApi from '../RegistrationServiceApi';

jest.mock('@justeat/f-services');

let postMock;

const tenant = 'uk';
const url = 'http://localhost/account/register';
const data = {
    firstName: 'Ashton',
    lastName: 'Adamms',
    email: 'ashton.adamms+jetest@just-eat.com',
    password: 'Passw0rd'
};

describe('RegistrationServiceApi', () => {
    describe('when creating an account', () => {
        beforeEach(() => {
            postMock = jest.fn();
            axiosServices.createClient.mockReturnValue({ post: postMock });
        });

        afterEach(() => {
            jest.resetAllMocks();
        });

        it('should post correct data', async () => {
            // Act
            await RegistrationServiceApi.createAccount(url, tenant, data);

            // Assert
            expect(postMock).toHaveBeenCalledWith(url, data);
        });

        it('should pass Accept-Tenant header into client', async () => {
            // Act
            await RegistrationServiceApi.createAccount(url, tenant, data);

            // Assert
            expect(axiosServices.createClient).toHaveBeenCalledTimes(1);
            expect(axiosServices.createClient.mock.calls[0][0].headers).toStrictEqual({
                'Content-Type': 'application/json',
                'Accept-Tenant': tenant
            });
        });
    });
});
