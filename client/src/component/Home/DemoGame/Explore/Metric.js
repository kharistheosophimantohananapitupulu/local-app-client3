import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
const routes = [
  {
    path: '/movies',
    exact: true,
    // sidebar: () => <div>home!</div>,
    //main/styledcontentbody/componnet
    main: () => <li><h2>Home1</h2>
    <h2>Home2</h2>
    <h2>Home3</h2></li>,
    
  },

  {
    path: '/bubblegum',
    // sidebar: () => <div>bubblegum!</div>,
    main: () =>  <li><h2><Link to='/bubblegum/api' >Bubblegum</Link></h2>
    <h2>Bubblegum2</h2>
    <h2>Bubblegum3</h2></li>,
  },

  {
    path: '/shoelaces',
    // sidebar: () => <div>shoelaces</div>,
    main: () => <h2>Shoelaces</h2>,
  },
]

class Metric extends Component{
  render() {
    return (
      <Router>
        <div style={{ display: 'flex' }}>
          <div style={{
            padding: '10px',
            width: '40%',
            background: '#fffff'
          }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link to='/movies'>Home</Link></li>
              <li><Link to='/bubblegum' >Bubblegum</Link></li>
              <li><Link to='/shoelaces' >Shoelaces</Link></li>
            </ul>
{/*             
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
                />
        ))} */}


          </div>

          <div style={{flex:1, padding:'10px'}}>
            
          {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
                />
                ))}
             
          </div>
          

        </div>
      </Router>
    )
  }
}
export default Metric
