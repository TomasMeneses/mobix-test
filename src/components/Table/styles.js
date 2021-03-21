import styled from 'styled-components';

export const TableStyled = styled.table`
    border-radius: 5px;
    
    overflow: hidden;
    border-collapse: collapse;

    text-align: left;
    width: 100%;
    
    tbody>td {
        background: #bdbdbd;
    }


    th, td {
        padding: 14px 15px;
        max-width: 50px;
        
    }
`;
export const IconSpan = styled.span`
    padding: 10px;
    cursor: pointer;
`;


export const SectionTr = styled.tr`
    background: #d3d3d3;
`;