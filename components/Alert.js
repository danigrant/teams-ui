// alertType can be: success, warning

const Alert = ({ message, type }) => (
  <div className={type == "success" ? "success alert-container" : "warning alert-container"}>
    <div className="alert-message">{message}</div>
    {
      type === "warning" &&
      <div className="alert-action-buttons">
        <div className="button cancel-button">Cancel</div>
        <div className="button proceed-button">Proceed</div>
      </div>
    }
    <style jsx>{`
      .alert-container {
        overflow-wrap: break-word;
        border-radius: 5px;
        width: 100%;
        border: 1px solid;
        padding: 8px 8px 8px 16px;
        box-sizing: border-box;
        margin-bottom: 35px;
        display: flex;
        flex-direction: row;
      }
      .alert-message {
        width: 75%;
        line-height: 2.5;
      }
      .alert-action-buttons {
        display: flex;
        flex-direction: row;
        position: relative;
        right: 0;
      }
      .button {
        border: 1px solid;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        line-height: 1.5;
        padding: .375rem .75rem;
        max-width: 70px;
        margin-left: 8px;
        transition: background-color 0.5s ease;
      }
      .button:hover {
        background-color: #fff;
        cursor: pointer;
      }
      .button:active {
        filter: brightness(98%);
      }
      .cancel-button {
        background-color: #ccc;
        border-color: #ccc;
      }
      .cancel-button:hover {
        color: #ccc;
      }
      .warning .proceed-button {
        background-color: rgb(113, 20, 35);
        border-color: rgb(113, 20, 35);
      }
      .warning .proceed-button:hover {
        background-color: #fff;
        color: rgb(113, 20, 35);
      }
      .success .proceed-button {
        background-color: rgb(176, 221, 194);
        border-color: #90d4ab;
      }
      .success .proceed-button:hover {
        background-color: #fff;
        color: #90d4ab;
      }
      .warning {
        background-color: rgb(252, 240, 242);
        color: rgb(113, 20, 35);
        border-color: rgb(243, 186, 195);
      }
      .success {
        border-color: rgb(176, 221, 194);
        background-color: rgb(239, 248, 243);
        color: #90d4ab;
      }
    `}</style>
  </div>
)

export default Alert
