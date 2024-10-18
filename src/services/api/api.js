import PostApiService from '@/services/api/PostApiService';
import AuthApiService from '@/services/api/AuthApiService';
import UserApiService from '@/services/api/UserService';
import ThemeApiService from '@/services/api/ThemeApiService';

export const $api = {
  posts: new PostApiService(),
  auth: new AuthApiService(),
  user: new UserApiService(),
  theme: new ThemeApiService(),
};
