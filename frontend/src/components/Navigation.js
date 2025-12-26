import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Navigation() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <nav className="navbar navbar--primary">
      <div className="container">
        <Link className="navbar__brand" to={useBaseUrl('/')}>
          <span className="navbar__title">{siteConfig.title}</span>
        </Link>
        <ul className="navbar__items">
          <li className="navbar__item">
            <Link className="navbar__link" to={useBaseUrl('/docs/intro')}>
              Textbook
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to={useBaseUrl('/docs/module-1/chapter-1')}>
              Module 1
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to={useBaseUrl('/docs/module-2/chapter-1')}>
              Module 2
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to={useBaseUrl('/docs/module-3/chapter-1')}>
              Module 3
            </Link>
          </li>
          <li className="navbar__item">
            <Link className="navbar__link" to={useBaseUrl('/docs/module-4/chapter-1')}>
              Module 4
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}