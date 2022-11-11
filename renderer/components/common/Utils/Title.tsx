import Head from 'next/head';
import { APP_NAME } from '@constants/static/configurations';

interface ITitleProps {
  title?: string;
}

export default function Title({ title }: ITitleProps) {
  return (
    <Head>
      <title>
        {`${APP_NAME}
        ${title ? ` ${'\u00B7'} ${title}` : ''}`}
      </title>
    </Head>
  );
}
