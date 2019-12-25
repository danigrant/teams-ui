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
          <th className="center">2FA</th>
          <th>Status</th>
          <th></th>
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
               <td className="tfa center" >{two_factor ? '✓' : ''}</td>
               <td>{status}</td>
               <td className="delete center">×</td>
            </tr>
         )
      })
    }

  }
  render() {
    return (
      <div>
        <table>
          <thead>
            { this.renderTableHead() }
          </thead>
           <tbody>
              { this.renderTableBody() }
           </tbody>
        </table>
        <style jsx global>{`
          table {
            border-collapse: collapse;
            border-spacing: 2px;
            text-align: left;
            font-size: 12px;
            width: 100%;
          }
          thead tr {
            font-weight: bold;
          }
          tr:nth-child(even) {
            background: #f3f3f3;
          }
          tbody {
            display: table-row-group;
            vertical-align: middle;
          }
          tr {
            height: 35px;
            border-bottom: 1px solid #ccc;
          }
          th, td {
            padding: .75rem 0.25rem;
          }
          .tfa {
            color: #8bc34a !important;
          }
          .delete:hover {
            filter: brightness(97%);
          }
          .delete:active {
            filter: brightness(95%);
          }
          .center {
            text-align: center !important;
          }
        `}</style>
      </div>
    )
  }
}

export default Table
