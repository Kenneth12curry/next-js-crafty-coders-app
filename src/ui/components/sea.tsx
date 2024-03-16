import Head from "next/head"

// Pour déclarer des variables
interface Props {
    title:string,
    description:string
}

export const Sea = ({title,description} : Props) =>{
    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
        </>
    )
}