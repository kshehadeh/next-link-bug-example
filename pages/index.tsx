/* eslint-disable no-console */
/* eslint-disable no-param-reassign */

import Link from "next/link";

export default function Test() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/product/shirts_and_tops/mens_ua_playoff_polo_2.0/1327037.html">
                        Does not work
                    </Link>
                </li>
                <li>
                    <Link href="/product/shirts_and_tops/mens_ua_playoff_polo_2.0/1327037">
                        Works
                    </Link>
                </li>
            </ul>
        </>
    );
}
