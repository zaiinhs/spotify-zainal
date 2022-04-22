import React from 'react';
import { Helmet } from 'react-helmet-async';

interface IProps {
  title: string;
  suffixTitle?: boolean;
}

const Seo: React.FC<IProps> = ({ title, suffixTitle }) => {
  const titlePage = `${title}${suffixTitle ? ' - spotify' : ''}`;

  return (
    <Helmet>
      <title>{titlePage}</title>
      <meta property="og:title" content={titlePage} />
    </Helmet>
  );
};

export default Seo;
