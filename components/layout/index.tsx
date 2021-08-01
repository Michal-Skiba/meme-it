import { ReactNode } from 'react';
import styles from './layout.module.scss'
import { Navigation } from 'components/';
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Meme it</title>
        <meta name="description" content="MEME - IT !" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {children}
    </div>
  )
};
