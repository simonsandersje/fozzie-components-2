import CheckoutComponent from '../../../test-utils/component-objects/f-checkout.component';

describe('f-checkout component tests', () => {
    before(() => {
        browser.url('?path=/story/components-organisms--checkout-component');
        browser.switchToFrame(0);
        CheckoutComponent.waitForCheckoutComponent();
    });

    it('should display the f-checkout component', () => {
        // Assert
        expect(CheckoutComponent.isCheckoutComponentDisplayed()).toBe(true);
    });

    it('should display the allergen link', () => {
        // Assert
        expect(CheckoutComponent.isAllergenLinkDisplayed()).toBe(true);
    });

    it.skip('should submit the checkout form', () => {
        // Arrange
        const addressInfo = {
            mobileNumber: '07777777779',
            line1: 'Test House',
            line2: 'High Street',
            city: 'Test City',
            postcode: 'AR51 1AA',
            note: 'Doorbell is broken'
        };

        // Act
        CheckoutComponent.populateCheckoutForm(addressInfo);
        CheckoutComponent.selectOrderTime('Wednesday 00:30');
        CheckoutComponent.goToPayment();

        // Assert
        // Waiting for route here, so we can grab redirect url and show form submits.
    });

    it('should display times in ascending order, with default text "As soon as possible" showing first', () => {
        // Act
        CheckoutComponent.selectOrderTime('As soon as possible');

        // Assert
        expect(CheckoutComponent.isOrderTimeDropdownDisplayed()).toBe(true);
        expect(CheckoutComponent.getOrderTimeOptionText(0)).toBe('As soon as possible');
        expect(CheckoutComponent.getOrderTimeOptionText(1)).toBe('Wednesday 00:30');
        expect(CheckoutComponent.getOrderTimeOptionText(2)).toBe('Wednesday 00:45');
    });

    it('should prevent a user from writing a note of over 200 characters', () => {
        // Arrange
        const userNote = 'A';
        const addressInfo = {
            note: userNote.repeat(300)
        };

        // Act
        CheckoutComponent.inputUserNote(addressInfo);

        // Assert
        expect(CheckoutComponent.userNoteMaxCharacterCount()).toEqual('200');
    });

    it.skip('should enable a user to submit without adding a note', () => {
        // Arrange
        const addressInfo = {
            mobileNumber: '07777777779',
            line1: 'Test House',
            line2: 'High Street',
            city: 'Test City',
            postcode: 'AR51 1AA',
            note: ''
        };

        // Act
        CheckoutComponent.populateCheckoutForm(addressInfo);
        CheckoutComponent.selectOrderTime('Wednesday 00:30');
        CheckoutComponent.goToPayment();

        // Assert
        // Waiting for route here, so we can grab redirect url and show form submits.
    });
});
