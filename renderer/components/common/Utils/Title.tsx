import Head from 'next/head';
import { APP_NAME } from 'constants/static/conf';

interface ITitleProps {
  title: string;
}

export default function Title({ title }: ITitleProps) {
  return (
    <Head>
      <title>
        {APP_NAME} {'\u00B7'} {title}
      </title>
    </Head>
  );
}
