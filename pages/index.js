import Card from '../components/Card'

const Index = () => (
  <div>
    <Card header="Invite Members To Join Your Team">
      <p>Members will be invited to join <span className="bold">team123</span> <span className="action-text">Change name</span></p>
    </Card>
    <style jsx>{`
      .bold {
        font-weight: bold;
      }
      .action-text {
        color: #2A7DF7;
        margin-left: 15px;
      }
      .action-text:hover {
        filter: brightness(90%);
      }
      .action-text:active {
        filter: brightness(80%);
      }
    `}</style>
  </div>
)

export default Index
