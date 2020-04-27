import React from "react";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import Main from "../../components/Main";
import { configureStore } from "../store/configStore";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
export const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
      <Main />
    </Provider>
  );
};

export default App;
