

/* parameters explained

confirm : confirm handler from antd (auto)


*/

import { Button, Input, Space } from "antd";
import { useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { theme_ } from "../../services/theme";


//for antd only; auto
export const SearchTextFiltersExternal = (dataIndex) => {

    //state / context
    const inputRef = useRef();

    //behaviour
    const handleConfirm = (selectedKeys, confirm, dataIndex) =>{
        confirm();
    }

    //render
    return{
    filterDropdown: ({confirm, setSelectedKeys, selectedKeys, clearFilters, close}) => (
                <div style={{ padding: 8 }}>

                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    ref={inputRef}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value]: [])}
                    onPressEnter={() => handleConfirm(selectedKeys, confirm, dataIndex)}////////////
                    style={{ display: "block", marginBottom: 10 }}
                />

                <Space>

                    <Button
                    type="primary"
                    icon={<IoSearch />}
                    onClick={() => handleConfirm(selectedKeys, confirm, dataIndex)}
                    >
                        Search
                    </Button>

                    <Button
                    style={{ width: 'max-content' }}
                    onClick={() => clearFilters()}
                    >
                        Reset
                    </Button>

                </Space>

            </div>
            
    ),
    filterIcon: (filtered) => (
        <IoSearch style={{
            color: filtered ? theme_['light'].token.colorPrimary : undefined
        }  } />     
    )
        
}}