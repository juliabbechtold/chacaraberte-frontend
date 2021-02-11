import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import { parseISO, formatDistance } from "date-fns";

import pt from "date-fns/locale/pt";

import ReactHtmlParser from "react-html-parser";
import axios from "axios";

import { Container, BigTitle, PostItem } from "../../styles/singleBlog";

export async function getStaticProps({ params }) {
  // Fetch data from external API
  const res = await axios.get(
    `https://agenciaade.com.br/wp-json/wp/v2/posts?slug=${params.slug}`
  );

  // Pass data to the page via props
  return {
    props: {
      post: res.data[0],
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const res = await axios.get(
    "https://agenciaade.com.br/wp-json/wp/v2/posts?per_page=8"
  );

  const paths = res.data.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: true };
}

export default function Single({ post }) {
  const router = useRouter();

  // Fallback
  if (router.isFallback) {
    return <p>carregando...</p>;
  }

  return (
    <>
      <Head>
        <title>{`${post.title.rendered} | Agência Ade!`}</title>
      </Head>
      <Container>
        <h1>{post.title.rendered}</h1>
        <div className="capa-img">
          <Image
            src={post.acf.imagem_capa.sizes.large}
            width={1240}
            height={678}
          />
        </div>
        <div className="content">{ReactHtmlParser(post.content.rendered)}</div>
      </Container>
    </>
  );
}
