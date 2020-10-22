import RegistrationComponent from '../../../test-utils/component-objects/f-registration.component';

describe('f-registration component tests', () => {
    beforeEach(() => {
        // Arrange
        browser.url('http://localhost:8080');
    });

    it('should display inline errors if mandatory fields are empty', () => {

        // Arrange
        const userInfo = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        // Act
        RegistrationComponent.populateRegistrationForm(userInfo);
        RegistrationComponent.submitRegistrationForm();

        // Assert
        expect(RegistrationComponent.errorMessageFirstnameText()).toBe('Please include your first name');
        expect(RegistrationComponent.errorMessageLastnameText()).toBe('Please include your last name');
        expect(RegistrationComponent.errorMessageEmailText()).toBe('Please enter your email address');
        expect(RegistrationComponent.errorMessagePasswordText()).toBe('Please enter a password');
    });

    it('should display error summary if errors are present on form submit', () => {

        // Asset
        expect(RegistrationComponent.errorSummaryContainerRole()).toBe('alert');
        expect(RegistrationComponent.errorSummaryContainerMessageCount()).toBe(0);
        expect(RegistrationComponent.errorSummaryContainerDisplayed()).toBe(false);

        // Act
        RegistrationComponent.submitRegistrationForm();

        // Assert
        expect(RegistrationComponent.errorSummaryContainerMessageCount()).toBe(1);
        expect(RegistrationComponent.errorSummaryContainerMessageText()).toBe('There are 4 errors in the form.');


    });

    it('should show and be able to click the legal documentation', () => {
        // Act
        RegistrationComponent.waitForRegistrationForm();

        // Assert
        expect(RegistrationComponent.termsAndConditionsLinkCanBeClicked()).toBe(true);
        expect(RegistrationComponent.privacyPolicyLinkCanBeClicked()).toBe(true);
        expect(RegistrationComponent.cookiesPolicyLinkCanBeClicked()).toBe(true);
    });
});
