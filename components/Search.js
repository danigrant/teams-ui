const Search = ({ prompt }) => (
  <div className="search-wrapper">
    <div className="input-append">
      <span className="input-append-text">{prompt}</span>
    </div>
    <input type="text" placeholder={`Search ${prompt}...`} />
    <div className="button">Search</div>
    <style jsx>{`
      .search-wrapper {
        width: 100%;
        display: flex;
        align-items: stretch;
        margin-bottom: 20px;
      }
      input {
        border: none;
        font-size: 1rem;
        outline: none;
        color: #495057;
        width: 100%;
        box-sizing: border-box;
        border-radius: 0.25rem;
        padding: 0.2rem 1rem;
        background-color: #fff;
        border: 1px solid #ced4da;
      }
      .input-append {
        background-color: #e9ecef;
        border-radius: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: 1px solid #ced4da;
        margin-right: -2px;
        z-index: 1;
        padding: 0.2rem 1rem;
        text-align: center;
        line-height: 2;
      }
      .input-append-text {
        text-transform: capitalize;
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

export default Search
