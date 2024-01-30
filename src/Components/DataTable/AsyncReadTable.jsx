
/**

config = 
{
    columns,
    entityType, -}
    localKey (random char, don't care about that)
}

*/

import { useEffect, useState } from "react";
import { DataTable } from "./DataTable";
import { useDispatch, useSelector } from "react-redux";
import { CRUDactions } from "../../Store/CRUD/actions";
import { keySelector } from "../../Store/RequestTracker/selector";
import { selectEntityKEY } from "../../Store/CRUD/selector";


export const AsyncReadTable = ({config}) => {
    //state / values
    const { columns, entityType, localKey } = config;
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const [ tableParams, setTableParams ] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
            total: 10
        }
    })

    const data = useSelector(selectEntityKEY(entityType, localKey));
    const requestTracker = useSelector(keySelector(localKey));

    //behaviour
    const onFilterHandle = async(query) =>{

        //dispatch(CRUDactions.resetEntityKey({ entityType, key: localKey }));
        await dispatch(CRUDactions.readEntity({ entityType, filters: query, key: localKey}));
    }

    //useEffect(() => {
    //    (async() => {
//
    //        await dispatch(CRUDactions.readEntity({ entityType, filters: { page: 2, limit: 10 }, key: localKey}))
    //    })()
    //}, [])

    //track request to update loading state
    useEffect(() => {

        switch(requestTracker){

            case 'pending':
                setLoading(true);
                break;

            case 'success':
                setLoading(false);
                break;

            case 'failed':
                setLoading(false);
                break;
        }

    console.log('dtaaaaaa => ', data)

    }, [requestTracker])

    //render
    return(
        <>
            <DataTable config={{
                columns,
                dataSource: data?.result,
                info: data?.info,
                loading,
                tableParams,
                setTableParams
                //resetDataAction: dispatch(CRUDactions.resetEntity({ entityType }))
            }} 
            onFilter={onFilterHandle}
            />
        </>
    )
}