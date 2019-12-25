import Table from './Table'
import Search from './Search'

const TableWithSearch = ({ which, data }) => (
  <div>
    <Search prompt={which} />
    <Table which={which} data={data} />
  </div>
)

export default TableWithSearch
