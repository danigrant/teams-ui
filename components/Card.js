const Card = ({ header, description, children }) => (
  <div className="card-wrapper">
    <div className="card-header">
      <h1>{ header }</h1>
      <h2>{ description }</h2>
    </div>
    <div className="card-content-wrapper">
      { children }
    </div>
    <style jsx>{`
      .card-wrapper {
        font-family: -apple-system, BlinkMacSystemFont, Helvetica, sans-serif;
        box-shadow: 0px 0px 15px rgba(120, 120, 120, 0.1);
        border-radius: 5px;
        background-color: #fff;
        width: 95%;
        max-width: 840px;
        margin: 0 auto;
        margin-top: 35px;
        margin-bottom: 35px;
        box-sizing: border-box;
        padding: 50px 45px;
      }
      .card-header {
        border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
        margin-top: 0;
        margin-bottom: 0;
      }
      .card-header h1, .card-header h2 {
        font-size: 24px;
        font-weight: 450;
      }
      .card-header h1 {
        margin-top: 0;
        margin-bottom: 5px;
      }
      .card-header h2 {
        margin-top: 0;
        color: #999999;
      }
      .card-content-wrapper {
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .card-wrapper {
        color: #495057;
      }
    `}</style>
    <style jsx global>{`

    `}</style>
  </div>

)

export default Card
