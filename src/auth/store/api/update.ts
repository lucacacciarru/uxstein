import wretch from 'wretch';
import { someAsyncOperation } from '../../../_shared/utils';
import {
  UpdateProfilePayload,
  UpdateProfileResponse,
} from '../types/updateProfile';

export async function updateProfileApi(
  _update: UpdateProfilePayload,
): Promise<UpdateProfilePayload> {
  await someAsyncOperation(false);
  const allUsers = await wretch(`${process.env.REACT_APP_API_URL}/users`)
    .get()
    .json();

  const userToUpdate: UpdateProfileResponse = allUsers.find(
    (item: any) => item.id === _update.id,
  );

  return {
    ...userToUpdate,
    ..._update,
  };
}
