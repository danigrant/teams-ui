import Card from './Card'
import Loading from './Loading'
import InputTextForm from './InputTextForm'
import TableWithSearch from './TableWithSearch'
import { isEmpty } from '../utils/utils'

class TeamsUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, team: {} }
  }
  componentDidMount() {
    const { teamId } = this.props

    // get team from teamId or return null team

    let team = {}

    if (teamId) {
      team = {
        members: [
          { id: 1, "email": 'dani@usv.com', "roles": ['Administrator', 'Owner'], "two_factor": true, "status": "active" },
          { id: 2, "email": 'ddanigrant@gmail.com', "roles": ['Administrator', 'Owner'], "two_factor": true, "status": "pending" }
        ],
        ip_policies: [
          { "id": 1, "ip_range": '198.49.23.0/24', "description": 'Only allow logins from our VPN', "action": 'allow' },
          { "id": 2, "ip_range": '198.21.23.0/8', "description": 'Do not allow logins from Russia', "action": 'block' }
        ]
      }
    }

    this.setState({ team: team, loading: false })

  }

  render() {
    const { team, loading } = this.state

    if (loading) {
      return (
        <Loading />
      )
    } else {
      /* no team? create a team! */
      if (isEmpty(team)) {
        return (
          <div>
            <Card header="Create A Team" description="Teamwork makes the dream work">
              <InputTextForm placeholder="Your Team Name" buttonText="Create A Team" />
            </Card>
          </div>
        )
      }

      /* a team? what a team! */
      else {
        return (
          <div>
            <Card header="Invite Members" description="Invite someone special to join your team">
              <InputTextForm placeholder="email" buttonText="Submit" />
            </Card>
            <Card header="Members" description="The who's who of your A-list team">
              <TableWithSearch which="members" data={team.members} />
            </Card>
            <Card header="IP Whitelist" description="Location, location, location">
              <TableWithSearch which="policies" data={team.ip_policies} />
            </Card>
          </div>
        )
      }
    }
  }
}

export default TeamsUI
