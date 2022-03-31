import { StackProps } from '@chakra-ui/react';
import { useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useThrottledCallback } from 'use-debounce';
import { isElementInViewport } from '../../../_shared/utils/isElementInViewport';
import { getTemplates } from '../../store/selectors/getTemplates';

export const useTemplateRow = (category: 'mine' | 'default') => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const firstCardRef = useRef<HTMLDivElement>(null);
    const lastCardRef = useRef<HTMLDivElement>(null);

    const title = t(`template.container.category.${category}`);
    const templates = useSelector(getTemplates);

    const isDefault = category === 'default';
    const filteredByCategory = useMemo(() => {
        return templates.filter(template => template.isDefault === isDefault)
    }, [isDefault, templates]);

    const [disabled, setDisabled] = useState<'left' | 'right' | undefined>(
        'left',
    );

    const onScrollHandler = useThrottledCallback(() => {
        const isFirstInViewport = isElementInViewport(firstCardRef.current);
        if (isFirstInViewport) {
            setDisabled('left');
            return;
        }
        const isLastInViewport = isElementInViewport(lastCardRef.current);
        if (isLastInViewport) {
            setDisabled('right');
            return;
        }
        setDisabled(undefined);
    }, 500);

    const containerProps: StackProps = {
        width: '100%',
        overflowY: 'hidden',
        overflowX: 'scroll',
        scrollSnapType: 'y mandatory',
        scrollPadding: '20px',
        spacing: '20',
        p: '10',
        onScroll: onScrollHandler,
    };

    return {
        title,
        containerProps,
        disabled,
        containerRef,
        firstCardRef,
        lastCardRef,
        filteredByCategory
    }
}
