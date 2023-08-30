import Head from "next/head";

function HeaderTitle({ title }: { title?: string }) {
    return (
        <Head>
            <title>
                {title}
            </title>
        </Head>
    );
}

export default HeaderTitle;