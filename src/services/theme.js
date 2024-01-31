import { theme } from 'antd'

export let theme_ = 
{
    light: {
        token: {
            fontFamily: 'Poppins',
            colorBgBase: '#fff',
            fontSize: 16,
            colorPrimary: "#B9615D",
            colorInfo: "#B9615D",
            colorTextBase: '#000'
          },
        
    },

    dark: {
        token: {
            fontFamily: 'Poppins',
            fontSize: 16,
            colorPrimary: "#0E0E0E",
            colorInfo: "#8B615D",
            colorBgBase: "#18181d",
            colorTextBase: '#fff'
          },
          algorithm: theme.darkAlgorithm
    }
}