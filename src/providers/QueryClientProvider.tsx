import type { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import {queryClient} from '../services/queryClient'

type AppQueryClientProviderProps= {
    children?: ReactNode;
}

function AppQueryClientProvider({ children }: AppQueryClientProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default AppQueryClientProvider;
