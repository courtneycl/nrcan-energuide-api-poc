import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table, Column, Cell } from 'fixed-data-table-2'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

const TextCell = ({ rowIndex, field, data }) => (
  <Cell>{data[rowIndex][field]}</Cell>
)

TextCell.propTypes = {
  rowIndex: PropTypes.number,
  field: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
}

class DataTable extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  createColumns(data) {
    let cols = []
    if (data.length > 0) {
      Object.keys(data[0]).forEach(attr => {
        // ignore graphql __type
        if (attr !== '__typename') {
          cols.push(
            <Column
              header={capitalize(attr)}
              key={attr}
              cell={<TextCell data={data} field={attr} />}
              width={200}
            />,
          )
        }
      })
      return cols
    }
  }

  render() {
    return (
      <Table
        rowsCount={this.props.data.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}
      >
        {this.createColumns(this.props.data)}
      </Table>
    )
  }
}

export default DataTable
