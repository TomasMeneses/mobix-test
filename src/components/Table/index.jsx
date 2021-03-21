import React, { useEffect, useState } from 'react';

import Checkbox from '@material-ui/core/Checkbox';

import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

import { TableStyled, SectionTr, IconSpan } from './styles';



export default function Table({data}) {
    
    
    const [sectionByIdExpandMap, setSectionByIdExpandMap] = useState({});

    
    const [permissionsList, setPermissionsList] = useState([])
    

    function handleSetPermission(event, permissionName) {
        console.log(event.target.checked);
        

        if(!event.target.checked) {
            setPermissionsList([...permissionsList, permissionName]);
        }else {
            let permissionsTemp = [...permissionsList];
            const newPermissions = permissionsTemp.filter(element => element !== permissionName);
            
            setPermissionsList([...newPermissions]);
        }
        console.log(permissionsList);
    }
    
    const [seeListCheckedAll, setSeeListCheckedAll] = useState(false);
    const [seeListSubSectionChecked, setListSeeSubSectionChecked] = useState(false);
    
    const [seeDetailsCheckedAll, setSeeDetailsCheckedAll] = useState(false);
    const [seeDetailsSubSectionChecked, setDetailsSeeSubSectionChecked] = useState(false);

    //const [checkedPermissions, setCheckedPermissions] = useState([]);
    
    useEffect(() =>{
        setListSeeSubSectionChecked(seeListCheckedAll);
    },[seeListCheckedAll])

    useEffect(() =>{
        setDetailsSeeSubSectionChecked(seeDetailsCheckedAll);
    },[seeDetailsCheckedAll])

    function handleChangeSeeListCheckAll(event) {
        setSeeListCheckedAll(event.target.checked)
    };

    function handleChangeSeeDetailsCheckAll(event) {
        setSeeDetailsCheckedAll(event.target.checked)
    };


    function handleExpandSection(sectionId) {
        let tempSectionIdExpandMap = {...sectionByIdExpandMap};
        tempSectionIdExpandMap[sectionId] = !sectionByIdExpandMap[sectionId];
        setSectionByIdExpandMap(tempSectionIdExpandMap);

    };


    useEffect(() =>{
        let objectMap = {};
        data.forEach(section => {

            objectMap[section.id] = false;
        });
        setSectionByIdExpandMap(objectMap);

    },[]);

    return (
        <TableStyled data-cy="my-table">
            <thead>

                <tr>
                    <colgroup span="1"></colgroup>
                
                    <th scope="colgroup">
                        Ver Listagem
                    </th>
                    <th scope="colgroup">
                        Ver Detalhes
                    </th>
                    <th scope="colgroup">
                        Criar
                    </th>
                    <th scope="colgroup">
                        Editar
                    </th>
                    <th scope="colgroup">
                        Deletar
                    </th>
                </tr>
            </thead>
            <tbody>
            <td>
                <td>Todos</td>
                    </td>
                        <td>
                            <Checkbox
                                data-cy="can-see-list-all-checkbox"
                                color="default"
                                checked={seeListCheckedAll}
                                onChange={handleChangeSeeListCheckAll}
                            />
                            </td>
                            <td>
                            <Checkbox
                                color="default"
                                checked={seeDetailsCheckedAll}
                                onChange={handleChangeSeeDetailsCheckAll}
                            />
                            </td>
                            <td>
                            <Checkbox
                                color="default"
                            />
                            </td>
                            <td>
                            <Checkbox
                                color="default"
                            />
                            </td>
                            <td>
                            <Checkbox
                                color="default"
                            />
                    </td>
                {data.map(section => (
                    <>
                        
                        <SectionTr  key={section.id}>
                            <td>
                                
                                {section.name}
                                {sectionByIdExpandMap[section.id] ? 
                                <IconSpan data-cy="close-section"  onClick ={() => (handleExpandSection(section.id))} ><BiChevronDown/></IconSpan> : 
                                <IconSpan data-cy="open-section"   onClick ={() => (handleExpandSection(section.id))}><BiChevronUp /></IconSpan>}
                            
                            </td>
                            <td>
                            <Checkbox
                                data-cy="can-see-checkbox-section"
                                checked={seeListCheckedAll}
                                onChange={()=>setSeeListCheckedAll(!seeListCheckedAll)}
                                color="default"
                            />
                            </td>
                            <td>
                            <Checkbox
                                color="default"
                                checked={seeDetailsCheckedAll}
                                onChange={()=>setSeeDetailsCheckedAll(!seeDetailsCheckedAll)}
                            />
                            </td>
                            <td>
                            <Checkbox
                                color="default"
                            />
                            </td>
                            <td>
                            <Checkbox
                                color="default"
                            />
                            </td>
                            <td>
                            <Checkbox
                                color="default"
                            />
                            </td>
                        </SectionTr>
                            {sectionByIdExpandMap[section.id] && section.subSections.map(subSection => (
                                <tr key={subSection.name}>
                                    <td>{subSection.name}</td>
                                    <td>
                                    <Checkbox
                                        data-cy="can-see-checkbox-subsection"
                                        checked={seeListSubSectionChecked}
                                        onChange={(event) => handleSetPermission(event, subSection.name)}
                                        color="default"
                                    />
                                    </td>
                                    <td>
                                    <Checkbox
                                        checked={seeDetailsSubSectionChecked}
                                        color="default"
                                    />
                                    </td>
                                    <td>
                                    <Checkbox
                                        color="default"
                                    />
                                    </td>
                                    <td>
                                    <Checkbox
                                        color="default"
                                    />
                                    </td>
                                    <td>
                                    <Checkbox
                                        color="default"
                                    />
                                    </td>
                                </tr>
                            ))}
                    </>
                    
                ))
                }
            </tbody>
            
        </TableStyled>
    )
}