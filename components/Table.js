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
  renderTableHead = () => {
    const { data, which } = this.props

    // if members table, render it one way
    if (which === "members") {
      return (
        <tr>
          <th>Member</th>
          <th>Roles</th>
          <th>2FA</th>
          <th>Status</th>
        </tr>
      )
    }
  }
  renderTableBody = () => {
    const { data, which } = this.props

    // if members table, render it one way
    if (which === "members") {
      return data.map((member) => {
        const { id, email, roles, two_factor, status } = member

        return (
            <tr key={id}>
               <td>{email}</td>
               <td>{roles.join(', ')}</td>
               <td>{two_factor ? '✓' : ''}</td>
               <td>{status}</td>
            </tr>
         )
      })
    }

  }
  render() {
    return (
      <div>
        <table>
          {}
          <thead>
            { this.renderTableHead() }
          </thead>
           <tbody>
              { this.renderTableBody() }
           </tbody>
        </table>
      </div>
    )
  }
}

export default Table
