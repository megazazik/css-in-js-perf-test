/// @ts-check
import Link from "next/link";

export function Menu() {
    return (
        <ul>
            <li>
                <Link href="/">index</Link>
            </li>
            <li>
                <Link href="/web-vitals/module">css modules</Link>
            </li>
            <li>
                <Link href="/web-vitals/jsx">styled jsx</Link>
            </li>
            <li>
                <Link href="/web-vitals/jss">jss</Link>
            </li>
            <li>
                <Link href="/web-vitals/jsx-dynamic">jsx-dynamic</Link>
            </li>
            <li>
                <Link href="/web-vitals/jss-dynamic">jss dynamic</Link>
            </li>
        </ul>
    )
}