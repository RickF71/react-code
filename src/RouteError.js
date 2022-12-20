import React from 'react';
//import { Route, RouteError } from 'react-router-dom';

function RouteError(props) {
    return (
        <div>
            {(error, errorInfo) => (
            <div>
              <h1>An error occurred</h1>
              <p>{error.message}</p>
              <pre>{errorInfo.componentStack}</pre>
            </div>
          )}
           {/* <Route path="/some-route" component={SomeComponent} /> */}
        </div>
    );
}

export default RouteError;