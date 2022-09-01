import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2em;
    width: 100%;
` 
export const TableContainer = styled.div`
    background-color: #FFFFFF;
    max-width: 75%;
    width: 75%;
    padding: 3em 3em 2em 3em;
    border-radius: 5px;
`

export const Table = styled.table`
    padding: 1em;
    width: 100%;
`;

export const TableRow = styled.tr`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 4em;
    border-bottom: 1px solid #C4C4C4;
`


export const TableColumnTitle = styled.td`
    color: #333333;
    font-weight: 700;
    font-size: 16px;
    margin-right: 0.8em;
    padding-bottom: 0.5em;
`

export const TableColumnContent = styled.td`
    color: #333333;
    font-weight: 400;
    font-size: 14px;
    margin-right: 0.8em;
    padding-bottom: 0.5em;
`