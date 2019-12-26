const InputTextForm = ({ placeholder, buttonText }) => (
  <div className="input-group-wrapper">
    <input type="text" placeholder={placeholder} />
    {/*<div className="input-append">
      <span className="input-append-text">@example.com</span>
    </div>*/}
    <div className="button">{buttonText}</div>
    <style jsx>{`
      .input-group-wrapper {
        width: 100%;
        display: flex;
        align-items: stretch;
      }
      input {
        border-radius: 0.25rem;
        padding: 0.2rem 1rem;
        font-size: 1rem;
        background-color: #fff;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        outline: none;
        flex: 1 1 auto;
        width: 1%;
        margin-bottom: 0;
        color: #495057;
      }
      .input-append {
        background-color: #e9ecef;
        border-radius: 5px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border: 1px solid #ced4da;
        margin-left: -3px;
        padding: 0.2rem 1rem;
        text-align: center;
        line-height: 2;
      }
      .button {
        background-color: #0275D8;
        border: 1px solid #0275D8;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        line-height: 1.5;
        padding: .375rem .75rem;
        min-width: 90px;
        margin-left: 15px;
        transition: background-color 0.5s ease;
      }
      .button:hover {
        background-color: #fff;
        color: #0275D8;
        cursor: pointer;
      }
      .button:active {
        filter: brightness(98%);
      }
    `}</style>
  </div>
)

export default InputTextForm
