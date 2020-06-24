import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { formatDate, truncateTripleText } from '../../utils/helpers'
import { TmColors } from '../../components/Common'

const STATUS = {
    DEPOSITING: <FormattedMessage id="portfolioPage.deposit.status.depositing" />,
    DEPOSITED: <FormattedMessage id="portfolioPage.deposit.status.deposited" />,
}

function renderHeader(columns, widths) {
    return (
        <Row widths={widths}>
            { columns.map((column, index) => <CellHeader key={index} width={column.width}>{ column.title }</CellHeader>) }
        </Row>
    )
}

function renderCell(item, field) {
    switch (field) {
        case 'date':
            return formatDate(Number(item[field]) * 1000, 'LL-dd HH:mm:ss')
        case 'txHash':
            return <ExteralLink href={`${item.scanUrl}tx/${item[field]}`} target="_blank">{truncateTripleText(item[field], 15)}</ExteralLink>
        case 'depositAddress':
            return <ExteralLink href={`${item.scanUrl}address/${item[field]}`} target="_blank">{truncateTripleText(item[field], 15)}</ExteralLink>
        case 'status':
            return STATUS[item[field]]
        default:
            return item[field]
    }
}

function renderBody(columns, data, widths) {
    return (
        data.map((item, index) => {
            return (
                <Row key={index} widths={widths}>
                    {
                        columns.map((column, index) => {
                            return (
                                <Cell key={index} width={column.width}>
                                    {
                                        renderCell(item, column.field)
                                    }
                                </Cell>
                            )
                        })
                    }
                </Row>
            )
        })
    )
}

export default function TableData({ columns, data }) {
    const widths = columns.map(column => column.width).join(' ')
    
    return (
        <Table>
            { renderHeader(columns, widths) }
            { renderBody(columns, data, widths) }
        </Table>
    )
}

const Table = styled.div``

const Row = styled.div`
    display: grid;
    grid-template-columns: ${props => props.widths}

    &:nth-child(2n) {
        background-color: ${props => props.theme.subBg};
    }
`

const Cell = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 15px;
`

const ExteralLink = styled.a`
    color: ${props => props.theme.mainColor};
    text-decoration: underline;

    &:hover {
        color: ${TmColors.ORANGE};
    }
`

const CellHeader = styled(Cell)``