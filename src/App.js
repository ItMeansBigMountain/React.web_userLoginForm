import './App.css';
import LoginForm from './components/LoginForm';
import Oauth from './components/Oauth';

function App() {
  return (
    <div className="App">


      < LoginForm  />


      <ul className="links__list"  >

        < Oauth
          redirect_uri="https://www.google.com"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          service_name="Google"
        />


        < Oauth
          redirect_uri="https://www.twitter.com"
          url="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/934px-Twitter-logo.svg.png"
          service_name="Twitter"
        />


        < Oauth
          redirect_uri="https://www.github.com"
          url="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          service_name="GitHub"
        />


      </ul>





    </div>
  );
}

export default App;