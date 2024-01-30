import { Table } from "antd"
import { TableLayout_1 } from "../../Layout/TableLayout"
import { useEffect, useState } from "react";

/**

config = 
{
    columns,
    dataSource
    loading (state),
}

*/

export const DataTable = ({config, onFilter}) => {
    //state / values
    const { columns, loading, dataSource, tableParams, setTableParams, info } = config;

    //behaviour
    const onTableChangeHandler = async(pagination, filters) => {

        setTableParams({
            pagination,
            filters
        })

        //if(pagination.pageSize !== tableParams.pagination?.pageSize) resetDataAction();
    }

    useEffect(() => {

        let query = {...tableParams['filters'], ...{ page: tableParams.pagination.current, limit: tableParams.pagination.pageSize }}

        onFilter(query);

    }, [JSON.stringify(tableParams)])

    useEffect(() => {

        console.log(dataSource)

        setTableParams({
            ...tableParams,
            ...tableParams.pagination.total = info?.total,
        })
    
    }, [dataSource])

    //render
    return(
        <TableLayout_1>
            
            <Table 
            columns={columns}
            dataSource={dataSource}
            loading={loading}
            pagination={tableParams.pagination}
            onChange={onTableChangeHandler}
            />

        </TableLayout_1>
    )
}