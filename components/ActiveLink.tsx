import { useRouter } from 'next/router';

import Link from 'next/link';
import { FC } from 'react';

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink:FC = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? style : null }>{ text }</a>
        </Link>
        );
};



