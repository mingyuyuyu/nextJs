import Link from 'next/link'
import { Button } from 'antd'

export default ( {children} ) => (
    <>
        <header>
            <Link href="/a?id=1" as="/a/1">
                <Button>Header To A</Button>
            </Link>
        </header>
        { children }
    </>
)