import { ConfigProvider } from "antd"
import { theme_ } from "../../services/theme"


export const AntdConfigProvier = ({children}) => {
    //state


    //render
    return(
        <ConfigProvider
        theme={theme_['light']}
        >
            {children}
        </ConfigProvider>
    )
}