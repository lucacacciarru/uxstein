import { useTranslation } from 'react-i18next';

export const useNavLabels = () => {
    const { t } = useTranslation();
    const about = t('landing.navBar.about');
    const examples = t('landing.navBar.examples');

    const login = t('landing.navBar.login');
    const signup = t('landing.navBar.signup');

    return { navBar: { about, examples, login, signup } }
}