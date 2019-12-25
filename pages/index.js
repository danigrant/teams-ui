import Card from '../components/Card'
import InputTextForm from '../components/InputTextForm'
import Table from '../components/Table'

class Index extends React.Component {
  state = { members: [
    { id: 1, "email": 'dani@usv.com', "roles": ['Administrator', 'Owner'], "two_factor": true, "status": "active" },
    { id: 2, "email": 'ddanigrant@gmail.com', "roles": ['Administrator', 'Owner'], "two_factor": true, "status": "pending" }
  ] }
  render() {
    return (
      <div>
        <Card header="Card Name" description="The short description of what this card does goes here">
          <InputTextForm placeholder="email" />
          <Table which="members" data={this.state.members} />
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
