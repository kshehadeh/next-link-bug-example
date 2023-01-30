import { GetServerSideProps } from 'next'
import React from 'react'

export interface ProductPageProps {
	test: string	
}

const ProductPage = (params: ProductPageProps) => {

	return (
		<>
			<h1>Param found: {params.test}</h1>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {

    return {
        props: {
            test: params ? params["product-params"] : "Not Found"
        },
    }
}

export default ProductPage
