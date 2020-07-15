import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const notFound = () => {
    return(
        <Layout>
            <Head title="Error"/>
            <h1>Page is not found !</h1>
            <Link to="/">Click here to go to Homepage</Link> 
        </Layout>
    )
}

export default notFound