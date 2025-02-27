import React from 'react'

const ModalWrapper = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='fixed inset-0 w-full h-full bg-modal_bg z-[60] px-2.5 flex items-center justify-center'>
            {children}
        </div>
    )
}

export default ModalWrapper
