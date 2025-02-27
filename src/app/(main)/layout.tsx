import { FC, PropsWithChildren } from "react"

const UsersLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <div>ENCABEZADO MAIN</div>
            <main>{children}</main>
            <div>PIE DE PAGINA MAIN</div>
        </>
    )
}

export default UsersLayout