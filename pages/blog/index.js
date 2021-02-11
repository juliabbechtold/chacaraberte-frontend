import React from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import axios from "axios";
import Image from "next/image";

import {
  Container,
  Header,
  BigTitle,
  PostsGrid,
  PostItem,
} from "../../styles/blog";

export async function getStaticProps() {
  // Fetch data from external API
  const res = await axios.get(
    "https://agenciaade.com.br/wp-json/wp/v2/posts?per_page=8"
  );

  // Pass data to the page via props
  return {
    props: {
      posts: res.data,
    },
    revalidate: 5,
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Agência Ade!</title>
      </Head>
      <Container>
        <Header>
          <BigTitle>Ade Blog.</BigTitle>
        </Header>

        <PostsGrid>
          {posts.map((post, index) => (
            <PostItem key={index}>
              <a href={`/blog/${post.slug}`}>
                <div className="shadow">
                  {post.acf.imagem_capa && (
                    <Image
                      src={post.acf.imagem_capa.sizes.large}
                      width={970}
                      height={545}
                      className="teste"
                    />
                  )}
                </div>
                <p className="title">{post.title.rendered}</p>
                {ReactHtmlParser(post.excerpt.rendered)}
              </a>
            </PostItem>
          ))}
        </PostsGrid>
      </Container>
    </>
  );
}
