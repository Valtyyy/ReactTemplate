import style from './homepage.module.css'
import { selectEntityKEY, selectItem } from '../../Store/CRUD/selector'
import { AsyncReadTable } from '../../Components/DataTable/AsyncReadTable'
import { SearchTextFiltersExternal } from '../../Components/SearchFilterTable/SearchFilterTable'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CRUDactions } from '../../Store/CRUD/actions'
import { settings } from '../../services/settings'
import { Typography } from 'antd'

export const HomePage = ({}) => {

    //state
    const dispatch = useDispatch()

    //values
    const localKey = 'a2'
    const entityType = 'item'
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            ...SearchTextFiltersExternal(entityType)

        },
        {
            title: 'group',
            dataIndex: 'group',
            ...SearchTextFiltersExternal(entityType)
        },
        {
            title: 'price',
            dataIndex: 'price',
            render: (record) => (
                <Typography.Text>{record/100} $</Typography.Text>
            )
        }
    ]

    //behaviour
    useEffect(() => {

        // load correct path
        dispatch(CRUDactions.loadPath({ entityType, key: localKey }))
    }, [])

    //render
    return(
        <div className={style.wrapper} style={{ boxShadow: settings.boxShadow }}>

            <AsyncReadTable config={{
                columns,
                entityType,
                localKey,
            }} />

        </div>
    )
}