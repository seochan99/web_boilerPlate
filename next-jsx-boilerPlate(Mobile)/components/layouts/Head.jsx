import Head from "next/head";

export default function HeadTitle(){
    return(
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <title>DGU Bamboo</title>
            <meta name="description" content="둥국대학교 대나무 숲입니다." />
        </Head>
    )
}