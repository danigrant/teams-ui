import Card from '../components/Card'
import InputTextForm from '../components/InputTextForm'
import TableWithSearch from '../components/TableWithSearch'

class Index extends React.Component {
  state = {
    members: [
      { id: 1, "email": 'dani@usv.com', "roles": ['Administrator', 'Owner'], "two_factor": true, "status": "active" },
      { id: 2, "email": 'ddanigrant@gmail.com', "roles": ['Administrator', 'Owner'], "two_factor": true, "status": "pending" }
    ],
    ip_policies: [
      { "id": 1, "ip_range": '198.49.23.0/24', "description": 'Only allow logins from our VPN', "action": 'allow' },
      { "id": 2, "ip_range": '198.21.23.0/8', "description": 'Do not allow logins from Russia', "action": 'block' }
    ]
  }
  render() {
    return (
      <div>
        <Card header="Invite Members" description="Invite someone special to join your team">
          <InputTextForm placeholder="email" />
        </Card>
        <Card header="Members" description="The who's who of your A-list team">
          <TableWithSearch which="members" data={this.state.members} />
        </Card>
        <Card header="IP Whitelist" description="Who's allowed to enter">
          <TableWithSearch which="policies" data={this.state.ip_policies} />
        </Card>
        <style jsx>{`

        `}</style>
        <style jsx global>{`
          body {
            background-color: #F2F2F2;
            color: #495057;
          }
        `}</style>
      </div>
    )
  }
}

export default Index
