const Card = ({ header, children }) => (
  <div className="card-wrapper">
    <div className="card-header">
      <h1>{header}</h1>
    </div>
    <div className="card-content-wrapper">
      { children }
    </div>
    <style jsx>{`
      .card-wrapper {
        font-family: -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 5px;
        background-color: #fff;
        width: 95%;
        max-width: 840px;
        margin: 0 auto;
      }
      .card-header {
        border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
        padding: .75rem 1.25rem;
        margin-bottom: 0;
        background-color: rgba(0,0,0,.03);
        border-bottom: 1px solid rgba(0,0,0,.125);
      }
      .card-header h1 {
        font-size: 1rem;
        font-weight: bold;
      }
      .card-content-wrapper {
        padding: .75rem 1.25rem;
      }
    `}</style>
  </div>

)

export default Card
