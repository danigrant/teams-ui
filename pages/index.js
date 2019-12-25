import Card from '../components/Card'
import InputTextForm from '../components/InputTextForm'
import Table from '../components/Table'

const Index = () => (
  <div>
    <Card header="Card Name" description="The short description of what this card does goes here">
      <InputTextForm placeholder="email" />
      <Table columns="[first, second, third]" />
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

export default Index
