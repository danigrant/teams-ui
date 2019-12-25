import Card from '../components/Card'
import InputTextForm from '../components/InputTextForm'

const Index = () => (
  <div>
    <Card header="Card Name" description="The short description of what this card does goes here">
      <InputTextForm placeholder="email" />
    </Card>
    <style jsx>{`

    `}</style>
    <style global>{`
      body {
        background-color: #F2F2F2;
        color: #495057;
      }
    `}</style>
  </div>
)

export default Index
