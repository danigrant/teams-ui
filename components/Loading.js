const Loading = () => (
  <div id="loading">
    <span></span>
    <span></span>
    <span></span>
    <style jsx>{`
      #loading {
        margin: 0 auto;
        position: absolute;
        top: 50%;
        left: 50%;
      }
      #loading span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background-color: #3498db;
        margin: 35px 5px;
      }
      #loading span:nth-child(1){
        animation: bounce 1s ease-in-out infinite;
      }

      #loading span:nth-child(2){
        animation: bounce 1s ease-in-out 0.33s infinite;
      }

      #loading span:nth-child(3){
        animation: bounce 1s ease-in-out 0.66s infinite;
      }

      @keyframes bounce{
        0%, 75%, 100%{
          -webkit-transform: translateY(0);
          -ms-transform: translateY(0);
          -o-transform: translateY(0);
          transform: translateY(0);
        }

        25%{
          -webkit-transform: translateY(-20px);
          -ms-transform: translateY(-20px);
          -o-transform: translateY(-20px);
          transform: translateY(-20px);
        }
      }
    `}</style>
  </div>
)

export default Loading
