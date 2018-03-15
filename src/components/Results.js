import React from 'react'
import Footer from './Footer'
import { NavLink } from 'redux-first-router-link'

const Results = () => (
  <main>
    <section>
      <nav aria-label="Breadcrumb">
        <ol>
          <li>
            <NavLink to="/">
              <a>
                <Trans>EnerGuide API</Trans>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search">
              <a aria-current="page">
                <Trans>Search by</Trans>
              </a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search-location">
              <a aria-current="page">
                <Trans>Location</Trans>
              </a>
            </NavLink>
          </li>
        </ol>
      </nav>
    </section>

    <section>
      <div className="background">
        <div className="api-content">
          <h1>Results</h1>
        </div>
      </div>
    </section>
  </main>
)

export default Results
