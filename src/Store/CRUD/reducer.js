
const entityType = ['item'];

const INITTIAL_STATE = {  }

entityType.map((e) => {
    INITTIAL_STATE[e] = {}
})

const Reducer = (state = INITTIAL_STATE, action) => {
    const { payload } = action;

    //console.log('CRUD Reducer type => ', action.type)
    //console.log('state => ', state)

    switch(action.type){

        // CRUD
        
        case `crud/create`:
            return {
                ...state,
                [payload.entityType]: {
                    ...state[payload.entityType],
                    [payload.key]: {
                        ...state[payload.entityType][payload.key],
                        info: state[payload.entityType][payload.key].total + 1,
                        result: payload.data.result
                    }
                }
            }

        case 'crud/read':

            console.log('read payload => ', payload)

            //let toAdd = state[payload.entityType].filter((e) => !payload.data.result.includes(e))

            return {
                ...state,
                [payload.entityType]: {
                    ...state[payload.entityType],
                    [payload.key]: {
                        info: payload.data.info,
                        result: payload.data.result
                    }
                }
            }

        case `crud/update`:


        case `crud/delete`:

        // Reset

        case 'crud/reset/entityType':
            return {
                ...state,
                [payload.entityType]: {}
            }


        case 'crud/reset/entityType/key':
            return {
                ...state,
                [payload.entityType]: {
                    ...state[payload.entityType],
                    [payload.key]: {}
                }
            }

        // Loading

        case 'crud/loadPath':

            if (!state.hasOwnProperty(payload.entityType)) {

                return {
                ...state,
                [payload.entityType]: {
                    [payload.key]: {},
                },
                };
            }

            if (!state[payload.entityType].hasOwnProperty(payload.key)) {

                return {
                ...state,
                [payload.entityType]: {
                    ...state[payload.entityType],
                    [payload.key]: {},
                },
                };
            }

            return state;
        

        //default
        default:
            return state
    }
}

export default Reducer;