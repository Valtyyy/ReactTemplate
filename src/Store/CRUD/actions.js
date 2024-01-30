import { api } from "../../services/api"

// key: track request with a random char 
// key = random char

export const CRUDactions = {

    resetEntity: ({entityType}) => (dispatch) => {

        console.log('CRUD reset => ', entityType);

        dispatch({
            type: 'crud/reset/entityType',
            payload: { entityType }
        })
    },

    resetEntityKey: ({ entityType, key }) => (dispatch) => {

        dispatch({
            type: 'crud/reset/entityType/key',
            payload: { entityType, key }
        })
    },

    createEntity: ({entityType, data, key}) => async(dispatch) => {

        // pending the tracked request
        dispatch({
            type: 'tracker/pending',
            payload: { key }
        })

        let res = await api.createEntity(entityType, data);

        if(res.statusText == 'OK'){
            console.log('OK');
    
            dispatch({
                type: 'tracker/success',
                payload: { key }
            })

            dispatch({
                type: `crud/create`,
                payload: { entityType, data : res.data, key }
            })
        }
        else{
            console.log('NOT OK');

            dispatch({
                type: 'tracker/failed',
                payload: { key }
            })
        }
    },

    readEntity: ({entityType, filters, key}) => async(dispatch) => {

        // pending the tracked request
        dispatch({
            type: 'tracker/pending',
            payload: { key }
        })

        let res = await api.getEntity(entityType, filters);

        if(res.status == 200){
            console.log('OK');
    
            dispatch({
                type: 'tracker/success',
                payload: { key }
            })

            dispatch({
                type: `crud/read`,
                payload: { entityType, data: res.data, key }
            })
        }
        else{
            console.log('NOT OK');

            dispatch({
                type: 'tracker/failed',
                payload: { key }
            })
        }
    },

    loadPath: ({entityType, key}) => (dispatch) => {

        dispatch({
            type: 'crud/loadPath',
            payload: { entityType, key }
        })
    }
    
}