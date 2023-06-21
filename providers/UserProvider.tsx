"use client"

import { MyUserCentextProvider } from "@/hooks/useUser";

interface UserProviderProps {
    children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderProps> = ({
    children
}) => {
    return(
        <MyUserCentextProvider>
            {children}
        </MyUserCentextProvider>
    )
};

export default UserProvider;