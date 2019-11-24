import React from 'react';

export interface AuthContext {
    username: string;
    canEdit: boolean;
}

export const defaultValue = {username: 'kamil', canEdit: true};

export default React.createContext<AuthContext>(defaultValue);