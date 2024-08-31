import { Metadata } from "next";
// export async function generateMetadata({ params }, parent) {
//   // read route params
//   const id = params.id
 
//   // fetch data
//   const product = await fetch(`https://backapi.bitcoinworld.news/api/blog/${params.articleID}`).then((res) => res.json())
 
//   const previousImages = (await parent).openGraph.images || []

//   return {
//     title: product.data.title,
//     openGraph: {
//       images: [`https://backapi.bitcoinworld.news/api/media/${product.data.blog_img}`, ...previousImages],
//     },
//   }
// }
export async function generateMetadata({ params }, parent) {
  const product = await fetch(`https://backapi.bitcoinworld.news/api/blog/${params.articleID}`).then((res) => res.json())
  
  return{
    title: product?.data.title,
    // title: `product?.data.title`,
    openGraph: {
      images: `https://backapi.bitcoinworld.news/api/media/${product?.data.blog_img}`
      // images: `https://backapi.bitcoinworld.news/api/media/${params.articleID}`
    }
  }
}

export default function Layout({children}) {
  return (
    <> 
      {children}
    </>
  );
}
