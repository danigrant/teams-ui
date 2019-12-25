import Table from './Table'
import Search from './Search'
import Alert from './Alert'

// alertType can be: success, warning

class TableWithSearch extends React.Component {
  state = { alert: 'big alert you need to pay attention', alertType: 'warning' }

  render() {
    const { which, data } = this.props
    const { alert, alertType } = this.state

    return (
      <div>
        { alert && <Alert type={alertType} message={alert} />}
        <Search prompt={which} />
        <Table which={which} data={data} />
      </div>
    )
  }
}

export default TableWithSearch
