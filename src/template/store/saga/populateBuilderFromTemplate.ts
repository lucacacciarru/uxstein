// TODO: add logic for failure case (if the id does not match a template)
import { put, select } from 'redux-saga/effects';
import { updateBuilder } from '../../../builder/store/actions/update';
import { UpdatePayload } from '../../../builder/store/types/update';
import { getTemplateById } from '../selectors/getTemplateById';
import { Template } from '../types/general';
import { PopulateBuilderFromTemplateAction } from '../types/populateBuilderFromTemplate';

export function* populateBuilderFromTemplateSaga(action: PopulateBuilderFromTemplateAction) {
    const template: Template | undefined = yield select(getTemplateById(action.payload.templateId));
    if (template) {
        const updatePayload: UpdatePayload = { ...template.builderData };
        yield put(updateBuilder(updatePayload));
    }
}