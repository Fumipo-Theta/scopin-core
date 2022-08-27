import React from "react"

type Props = {
    className: string,
    onClick: React.MouseEventHandler
}

export const ModalBackground: React.FC<Props> = ({ className, onClick }) => {
    return <div className={className} onClick={onClick}></div>
}