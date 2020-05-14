import { withRouter } from 'next/router'

const A = ( {router, name} ) => {
    return (
        <>
            <div className="aa"> A {router.query.id} {name}
            </div>
            <style jsx>
                {
                    `
                        .aa {
                            color: red;
                        }
                    `
                }
            </style>
            <style jsx global>
                {
                    `
                        .aa {
                            color: green;
                        }
                    `
                }
            </style>
        </>
        
    )
}

A.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'ming1'
            })
        }, 1000) 
    })
    return await promise
}

export default withRouter(A)