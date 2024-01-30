import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/store';
import { AntdConfigProvier } from './Components/Providers/AntdConfigProvider';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <AntdConfigProvier>
                    <App />
            </AntdConfigProvier>
        </Provider>
    </BrowserRouter>
);
