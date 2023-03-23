// The component can have any name, but you must export it as a `default` export.
import Link from "next/link"

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    )
}