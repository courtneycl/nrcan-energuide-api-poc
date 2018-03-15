import React, { Component } from 'react'
import { NavLink } from 'redux-first-router-link'
import Breadcrumbs from './Breadcrumbs'
import Radio from './forms/Radio'
import FieldSet from './forms/FieldSet'
import { Trans } from 'lingui-react'

class Search extends Component {
  render() {
    return (
      <main role="main">
        <Breadcrumbs>
          <NavLink to="/">
            <Trans>EnerGuide API</Trans>
          </NavLink>
          <Trans>Search</Trans>
        </Breadcrumbs>

        <div id="page-body">
          <header>
            <h1>
              <Trans>Which parameter would you like to search by?</Trans>
            </h1>
          </header>
          <p>
            <Trans>
              To test the API, you are able to search by Location or File
              number.
            </Trans>
          </p>
          <form aria-labelledby="search-by-description">
            <FieldSet name="search">
              <legend id="search-by-description">
                <Trans>Search by Location or File number</Trans>
              </legend>
              <Radio label={<Trans>Location</Trans>} value="location" />
              <Radio label={<Trans>File number</Trans>} value="file-number" />
            </FieldSet>
            <button type="submit">
              <Trans>Search</Trans>
            </button>
          </form>

          <aside>
            <h3>
              <Trans>To see all of the available data,&nbsp;</Trans>
              <a href="https://github.com/cds-snc/nrcan_api">
                <Trans>view the EnerGuide API documentation</Trans>
              </a>
              <Trans>&nbsp;on GitHub.</Trans>
            </h3>
          </aside>
        </div>
      </main>
    )
  }
}

export default Search
