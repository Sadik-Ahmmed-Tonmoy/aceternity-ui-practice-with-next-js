import React, { ReactNode } from 'react';

const dashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
            <div className="w-full h-10 bg-red-500 text-center text-3xl"> Footer</div>
        </div>
    );
};

export default dashboardLayout;
