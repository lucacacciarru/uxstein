import { useBreakpointValue } from '@chakra-ui/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const useWorkflowTabs = () => {
    const { t } = useTranslation();

    const tabButtonsRefs: Record<number, React.RefObject<HTMLButtonElement>> = {
        0: useRef<HTMLButtonElement>(null),
        1: useRef<HTMLButtonElement>(null),
        2: useRef<HTMLButtonElement>(null),
        3: useRef<HTMLButtonElement>(null),
        4: useRef<HTMLButtonElement>(null),
    };

    const handleOnChange = (i: number) => {
        const actualRef = tabButtonsRefs[i].current;
        actualRef &&
            actualRef.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
    };

    const align = useBreakpointValue<'start' | 'center'>({
        base: 'start',
        sm: 'center',
    });

    const tabPanelProps = {
        dashboard: {
            title: t('landing.workflow.tabs.dashboard.title'),
            description: t('landing.workflow.tabs.dashboard.description'),
            src: ''
        },
        template: {
            title: t('landing.workflow.tabs.template.title'),
            description: t('landing.workflow.tabs.template.description'),
            src: ''
        },
        edit: {
            title: t('landing.workflow.tabs.edit.title'),
            description: t('landing.workflow.tabs.edit.description'),
            src: ''
        },
        save: {
            title: t('landing.workflow.tabs.save.title'),
            description: t('landing.workflow.tabs.save.description'),
            src: ''
        },
        share: {
            title: t('landing.workflow.tabs.share.title'),
            description: t('landing.workflow.tabs.share.description'),
            src: ''
        },
    }

    const buttonLabels = {
        dashboard: t('landing.workflow.tabs.dashboard.buttonLabel'),
        template: t('landing.workflow.tabs.template.buttonLabel'),
        edit: t('landing.workflow.tabs.edit.buttonLabel'),
        save: t('landing.workflow.tabs.save.buttonLabel'),
        share: t('landing.workflow.tabs.share.buttonLabel'),
    }

    return {
        align,
        tabPanelProps,
        buttonLabels,
        tabButtonsRefs,
        handleOnChange
    }
}