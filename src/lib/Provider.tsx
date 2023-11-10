"use client";
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

type ProviderType = {
    children: React.ReactNode | React.ReactElement
}

const ReduxProvider = ({ children }: ProviderType) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider