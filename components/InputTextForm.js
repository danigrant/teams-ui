import Select from 'react-select'

const InputTextForm = ({ placeholder, buttonText, roles }) => (
  <div>
    <div className="input-group-wrapper">
      <input type="text" placeholder={placeholder} />
        <div className="input-append">
        <span className="input-append-text">@example.com</span>
      </div>
      { !roles && <div className="button">{buttonText}</div> }
      </div>
      {
        roles &&
        <div>
          <Select options={roles} isMulti  placeholder="Select role..." />
          <div id="custom-invite-button-placement" className="button">{buttonText}</div>
        </div>
      }
    <style jsx>{`
      .input-group-wrapper {
        width: 100%;
        display: flex;
        align-items: stretch;
        margin-bottom: 18px;
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
        line-height: 1.5;
        width: 1%;
        box-sizing: border-box;
        height: 40px;
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
        width: 115px;
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
      #custom-invite-button-placement {
        margin-top: 18px;
        margin-left: 0;
      }
    `}</style>
  </div>
)

export default InputTextForm
