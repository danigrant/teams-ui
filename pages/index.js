import TeamsUI from '../components/TeamsUI'

class Index extends React.Component {
  render() {
    return (
      <div>
        <TeamsUI teamId="0" />
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
