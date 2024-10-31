import { UseQueryOptions } from '@tanstack/react-query';
import queryKeys from "./queryKeys";

export type User={
    address: {
        city: string;
        geo: {
            lat: string;
            lng: string;
        };
        street: string;
        suite: string;
        zipcode: string;
    };
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}
export type UserGetResponseType = User[];

export type UseUsersGetOptions = Omit<
    UseQueryOptions<
        UserGetResponseType,
        unknown,
        UserGetResponseType,
        typeof queryKeys.users
    >,
    'queryFn' | 'queryKey'
>;
