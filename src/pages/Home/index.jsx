import React from 'react';

import { Wrapper, Container, TableContainer } from './styles';

import Table from '../../components/Table';

import data from '../../mock';


export default function Home() {
    
    return(
        <Wrapper>
            <Container>
                <h1>Tabela de Permissões</h1>
                <TableContainer>
                    <Table data={data} />
                </TableContainer>
            </Container>
        </Wrapper>
    )
}