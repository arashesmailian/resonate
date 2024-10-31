import { useQuery } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

import client from 'services/config';
import queryKeys from "./queryKeys";

import type {
    UserGetResponseType,
    UseUsersGetOptions
}  from './users.type'

const usersGetURL = () => {
    return `/users`;
};

export const usersGetFn = async (options?: AxiosRequestConfig) => {
    const { data } = await client<UserGetResponseType>({
        method: 'GET',
        url: usersGetURL(),
        ...options,
    });

    return data;
};

export const useUserGet = (options?: UseUsersGetOptions) => {
    return useQuery({queryKey: queryKeys.users, queryFn: usersGetFn, ...options});
};
