<template>
    <div
        ref="cookieBanner"
        :class="[$style['c-cookieBanner'], $style['c-cookieBanner-overlay'], { [$style['c-cookieBanner--hidden']]: isHidden }]"
        attr="data-cookie-consent-overlay"
        :aria-hidden="isHidden">
        <div
            :class="$style['c-cookieBanner-card']">
            <div
                id="dialog1"
                :class="$style['c-cookieBanner-content']"
                role="dialog"
                aria-labelledby="cookieConsentLabel"
                aria-modal="true">
                <h2
                    id="cookieConsentLabel"
                    :class="$style['c-cookieBanner-title']">
                    <a
                        name="cookieConsentTitle"
                        tabindex="0"
                        data-consent-title>
                        {{ copy.mainTitle }}
                    </a>
                </h2>

                <p :class="$style['c-cookieBanner-text']">
                    {{ copy.text1 }}
                </p>
                <p :class="$style['c-cookieBanner-text']">
                    {{ copy.text2 }}
                </p>
                <p
                    :class="$style['c-cookieBanner-text']">
                    {{ copy.text3 }}
                    <a
                        :href="copy.linkHref"
                        :class="$style['c-cookieBanner-link']"
                        target="_blank">
                        {{ copy.linkText }}
                    </a>
                    {{ copy.text4 }}
                </p>
            </div>

            <div :class="$style['c-cookieBanner-CTA']">
                <button-component
                    tabindex="0"
                    role="button"
                    data-button-accept
                    is-full-width
                    @click.native="acceptActions">
                    {{ copy.buttonText2 }}
                </button-component>
                <button-component
                    tabindex="0"
                    role="button"
                    button-type="ghost"
                    data-button-nonaccept
                    is-full-width
                    @click.native="nonAcceptActions">
                    {{ copy.buttonText1 }}
                </button-component>
            </div>
        </div>
    </div>
</template>

<script>
import { globalisationServices } from '@justeat/f-services';

import ButtonComponent from '@justeat/f-button';
import '@justeat/f-button/dist/f-button.css';
import tenantConfigs from '../tenants';

export default {
    name: 'CookieBanner',

    components: {
        ButtonComponent
    },

    props: {
        locale: {
            type: String,
            default: 'en-GB'
        },

        isHidden: {
            type: Boolean,
            default: false
        },

        cookieExpiry: {
            type: Number,
            default: 7776000
        }
    },

    data () {
        const locale = globalisationServices.getLocale(tenantConfigs, this.locale, this.$i18n);
        const localeConfig = tenantConfigs[locale];
        const theme = globalisationServices.getTheme(locale);

        return {
            copy: { ...localeConfig },
            theme
        };
    },

    mounted () {
        this.removeLegacyCookieBanners();
        this.checkCookieBannerCookie();
        this.focusOnTitle();
    },

    methods: {
        /**
         * Actions for "Accept all cookies" button
         */
        acceptActions () {
            this.setCookieBannerCookie('full');
            this.dataLayerPush('full');
            this.isHidden = true;
        },
        /**
         * Actions for "Accept only required cookies" button
         */
        nonAcceptActions () {
            this.setCookieBannerCookie('necessary');
            this.dataLayerPush('necessary');
            this.isHidden = true;
        },
        /**
         * Set focus to the cookie consent banner title for accessibility
         */
        focusOnTitle () {
            const title = document.getElementById('cookieConsentLabel');
            title.firstChild.focus();
        },
        /**
         * Check if the cookie banner has been shown to this user
         */
        checkCookieBannerCookie () {
            this.isHidden = this.$cookies.get('je-cookieConsent') === 'full' || this.$cookies.get('je-cookieConsent') === 'necessary';
        },
        /**
         * Set the cookie for the user's choice
         */
        setCookieBannerCookie (cookieValue) {
            this.$cookies.set('je-cookieConsent', cookieValue, {
                path: '/',
                maxAge: this.cookieExpiry
            });
        },
        /**
         * Set the legacy cookie banner cookie
         */
        setLegacyCookieBannerCookie () {
            this.$cookies.set('je-banner_cookie', '2', {
                path: '/',
                maxAge: this.cookieExpiry
            });
        },
        /**
         * Remove legacy cookie banners (they should be removed in the consuming codebase, but just to be sure...)
         */
        removeLegacyCookieBanners () {
            const oldCookieBanner = document.querySelector('[data-cookiebanner]');
            const sitecoreCookieBanner = document.getElementsByClassName('cookie-policy')[0];
            const menuWebCookieBanner = document.querySelector('[data-cookie-anchor]');
            if (typeof oldCookieBanner !== 'undefined' && oldCookieBanner !== null) oldCookieBanner.innerHTML = '';
            if (typeof sitecoreCookieBanner !== 'undefined' && sitecoreCookieBanner !== null) sitecoreCookieBanner.innerHTML = '';
            if (typeof menuWebCookieBanner !== 'undefined' && menuWebCookieBanner !== null) menuWebCookieBanner.innerHTML = '';
            this.setLegacyCookieBannerCookie();
        },
        /**
         * Push tracking events
         */
        dataLayerPush (consentLevel) {
            const dataLayer = window.dataLayer || [];
            dataLayer.push({ event: 'trackConsent', userData: { consent: consentLevel } });
        },
        /**
         * Check for excluded cookies/storage
         */
        isNotExcluded () {
            return null;
        },
        /**
         * Remove all cookies not in the exclusion list
         */
        removeCookies () {
            return null;
        },
        /**
         * Remove all local storage not in the exclusion list
         */
        removeStorage () {
            return null;
        },
        /**
         * Resend GTM events
         */
        resendEvents () {
            return null;
        }
    }
};
</script>

<style lang="scss" module>
    .c-cookieBanner {
        font-family: $font-family-base;
    }

    .c-cookieBanner-overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 99999991;
    }

    .c-cookieBanner--hidden {
        display: none;
    }

    .c-cookieBanner-card {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: $white;
        z-index: 99999992;
    }

    .c-cookieBanner-CTA {
        min-width: 352px;
    }

    .c-cookieBanner-text {
        margin: 0;
        padding: 0;
    }

    .c-cookieBanner-link {
        color: $color-link-default;
    }

    .c-cookieBanner-title {
        @include font-size(heading-m);
        font-weight: $font-weight-bold;
        margin: spacing() 0;
        padding: 0;
        color: $color-headings;
        &:hover,
        &:focus {
            a {
                text-decoration: none;
            }
        }
    }

    .c-cookieBanner-content,
    .c-cookieBanner-CTA {
        margin: 0 auto;
        padding: spacing(x4);
    }

    @media (max-width: 768px) {
        .c-cookieBanner-card {
            flex-direction: column;
            padding: spacing(x2) 0;
        }

        .c-cookieBanner-content,
        .c-cookieBanner-CTA {
            padding: spacing(x0.5) spacing(x3);
        }

        .c-cookieBanner-CTA {
            min-width: initial;
            display: flex;
            flex-direction: row-reverse;
            margin: 0;
        }
    }

    @media (max-width: 600px) {
        .c-cookieBanner-title {
            @include font-size(heading-s);
        }

        .c-cookieBanner-CTA {
            display: block;
            margin: 0;
        }
    }
</style>
