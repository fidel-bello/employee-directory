import Btn from '../Btn'
import React from 'react';
import Row from '../Row';
import Search from '../Search';
import Table from '../Table'
import TableHeader from '../TableHeader';






function Container() {

  //returns components
    return (
        <div className='container'>
            <Row>
                <Search />
                <Btn />
            </Row>
            <Table>
            <TableHeader />
            
            </Table>
        </div>
    );

};

export default Container;