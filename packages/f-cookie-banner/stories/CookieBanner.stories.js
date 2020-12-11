import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import CookieBanner from '../src/components/CookieBanner.vue';

export default {
    title: 'Components/Organisms',
    decorators: [withKnobs, withA11y]
};

export const CookieBannerComponent = () => ({
    components: { CookieBanner },
    props: {
        locale: {
            default: select('Locale', ['en-GB', 'es-ES'])
        },

        isHidden: {
            default: boolean('Is hidden', false)
        }
    },
    template: `<cookie-banner
        :locale="locale"
        :is-hidden="isHidden" />`
});

CookieBannerComponent.storyName = 'f-cookie-banner';
