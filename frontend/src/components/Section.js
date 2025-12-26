import React from 'react';
import clsx from 'clsx';
import styles from './Section.module.css';

const Section = ({ title, children, className = '', ...props }) => {
  return (
    <section className={clsx(styles.section, className)} {...props}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;