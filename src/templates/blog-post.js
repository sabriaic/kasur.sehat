import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledDiv = styled.div`
  & h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
  }
  & h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.2;
  }
  & h3 {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2;
  }
  & h4 {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 2;
  }
  & a {
    color: #6b46c1;
  }
`

const BlogPost = props => {
  const { pageContext } = props
  const nextSlug = pageContext.next ? pageContext.next.fields.slug : "/"
  const previousSlug = pageContext.previous
    ? pageContext.previous.fields.slug
    : "/"

  const post = props.data.markdownRemark
  const date = new Date(post.frontmatter.date)
  const isoDate = date.toISOString().split("T")[0]

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto max-w-2xl">
            <h1 className="mb-4 text-3xl font-bold">
              {post.frontmatter.title}
            </h1>

            {post.frontmatter.featuredimage && (
              <GatsbyImage
                image={getImage(post.frontmatter.featuredimage)}
                alt={post.frontmatter.title}
                className="rounded-xl mb-4"
              />
            )}

            <time dateTime={isoDate} className="text-gray-500">
              {post.frontmatter.date}
            </time>

            <StyledDiv
              className="mt-6"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="flex justify-between pt-10">
              {pageContext.previous && (
                <a href={previousSlug} className="flex items-center gap-2">
                  <span>←</span>
                  <span>{pageContext.previous.frontmatter.title}</span>
                </a>
              )}

              {pageContext.next && (
                <a href={nextSlug} className="flex items-center gap-2">
                  <span>{pageContext.next.frontmatter.title}</span>
                  <span>→</span>
                </a>
              )}
            </div>
          </article>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
