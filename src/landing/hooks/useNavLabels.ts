import { useTranslation } from 'react-i18next';

export const useNavLabels = () => {
    const { t } = useTranslation();
    const about = t('landing.navigation.about');
    const examples = t('landing.navigation.examples');

    const login = t('landing.navigation.login');
    const signup = t('landing.navigation.signup');

    const faq = t('landing.navigation.faq');
    const termsConditions = t('landing.navigation.termsConditions');
    const privacyPolicy = t('landing.navigation.privacyPolicy');

    return { navLabels: { about, examples, login, signup, faq, termsConditions, privacyPolicy } }
}