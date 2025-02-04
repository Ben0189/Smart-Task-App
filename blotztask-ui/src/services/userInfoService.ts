import { UserInfoDTO } from '@/model/user-info-dto';
import { fetchWithAuth } from '@/utils/fetch-with-auth';

interface UserInfoAPIResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export const fetchCurrentUserInfo = async (): Promise<UserInfoAPIResponse<UserInfoDTO>> => {
  const result = await fetchWithAuth<UserInfoAPIResponse<UserInfoDTO>>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_WITH_API}/UserInfo/current-user-info`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return result;
};
