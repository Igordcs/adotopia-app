import { AnimalProvider } from "./animal/animalContext";
import { AuthProvider } from "./auth/authContext";
import React from 'react';
import { ChatProvider } from "./chat/chatContext";

const CombinedProviders: React.FC = ({children}: any) => {
    return (
        <AuthProvider>
            <AnimalProvider>
                <ChatProvider>
                    {children}
                </ChatProvider>
            </AnimalProvider>
        </AuthProvider>
    )
}

export default CombinedProviders;