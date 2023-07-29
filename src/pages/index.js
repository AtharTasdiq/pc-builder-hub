import Head from "next/head";
import { useSession } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";
import Banner from "@/components/Banner";
import Allproduct from "@/components/ui/Allproduct";
import Categories from "@/components/Categories";
const HomePage = ({product}) => {
  //console.log(product)
  const { data: session } = useSession();
  // console.log(session);

  return (
    <div>
      <Head>
        <title>PC Builder Hub</title>
      </Head>
      <Banner></Banner>
      <Allproduct product={product}/>
      <Categories/>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export async function getStaticProps() {
  // Fetch data from your API or other data source
  const res = await fetch('https://pc-builder-server-nu.vercel.app/product');
  const data = await res.json();
  console.log(data)

  // Pass the fetched data as props to the page component
  return {
    props: {
      product: data,
    },
  };
}

