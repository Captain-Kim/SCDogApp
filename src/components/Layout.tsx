import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
  }

const Layout : React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            {children}
        </div>
    );
};

export default Layout;