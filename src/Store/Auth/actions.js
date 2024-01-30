import { api } from "../../services/api"


export const AuthActions = {

    login: ({credentials}) => async(dispatch) => {

        dispatch({
            type: 'auth/pending'
        })

        let res = await api.login(credentials);

        if(res.statusText == 'OK'){

            print('Auth OK');

            dispatch({
                type: 'auth/success',
                payload: res.data
            })
        }
        else{
            print('Auth not OK');

            dispatch({
                type: '/auth/delete'
            })
        }
    }
}