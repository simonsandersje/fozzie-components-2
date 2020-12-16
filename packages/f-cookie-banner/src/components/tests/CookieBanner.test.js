import { shallowMount } from '@vue/test-utils';
import CookieBanner from '../CookieBanner.vue';

xdescribe('CookieBanner', () => {
    describe('component', () => {
        it('should be defined', () => {
            // Arrange
            const propsData = {};

            // Act
            const wrapper = shallowMount(CookieBanner, {
                propsData
            });

            // Assert
            expect(wrapper.exists()).toBe(true);
        });
    });

    describe('method', () => {
        describe('isNotExcluded', () => {
            it.each([
                [true, 'je-location'],
                [true, '_ga'],
                [false, 'location'],
                [false, 'random-cookie-name']
            ])('should return "%s" when `cookie name` is "%s"', (
                expected,
                cookieName
            ) => {
                // Arrange
                const propsData = {};

                // Act
                const wrapper = shallowMount(CookieBanner, {
                    propsData
                });

                // Assert
                expect(wrapper.vm.isNotExcluded(cookieName)).toBe(expected);
            });
        });
    });
});


// acceptActions
// nonAcceptActions
// focusOnTitle
// checkCookieBannerCookie
// setCookieBannerCookie
// setLegacyCookieBannerCookie
// removeLegacyCookieBanners
// dataLayerPush
// isNotExcluded
// resendEvents
