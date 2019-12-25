/*

  takes as a prop an object. members obj:
  {
    members: [
      { id: 1, email: 'dani@usv.com', roles: ['Administrator' 'Owner'], two_factor: true, status: active },
      { id: 2, email: 'ddanigrant@gmail.com', roles: ['Administrator' 'Owner'], two_factor: true, status: pending }
    ]
  }

  ip whitelist obj:
  {
    ip_policies: [
      { id: 1, ip_range: '198.49.23.0/24', description: 'Only allow logins from our VPN', action: 'allow' },
      { id: 1, ip_range: '198.21.23.0/8', description: 'Do not allow logins from Russia', action: 'block' }
    ]
  }

*/

class Table extends React.Component {
  renderTableData = props => {
    const { columns } = props

  }
  render() {
    return (
      <div>
        table goes here
      </div>
    )
  }
}

export default Table
