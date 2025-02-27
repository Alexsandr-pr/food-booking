import React from 'react'

const Layout = ({
    childrenLeft,
    childrenRight,
    className,
}: {
    childrenLeft: React.ReactNode;
    childrenRight: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`flex content-layout ${className}`}>
            <main className={`content-layout__main`}>
                {childrenLeft}
            </main>
            <aside className={`content-layout__aside flex flex-col gap-[30px] `}>
                {childrenRight}
            </aside>
        </div>
    )
}

export default Layout
