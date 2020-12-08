/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const queries = await graphql(`{
        allContentfulBlogPost {
            edges {
                node {
                    id
                    category {
                        name
                    }
                }
            }
        },
        allContentfulBlogPostCategory {
            edges {
                node {
                    name
                    blog_post {
                        id
                    }
                }
            }
        },
        allContentfulStoreProduct {
            edges {
                node {
                    id
                }
            }
        },
        allContentfulProductCategories {
            edges {
                node {
                    name
                    product {
                        id
                    }
                }
            }
        }
      }
    `)

    /* BLOG */
    /* BLOG PAGES */
    const posts = queries.data.allContentfulBlogPost.edges
    const postsPerPage = 1
    const numPages = Math.ceil(posts.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve("./src/components/blog/blog.js"),
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1,
            },
        })
    })
    /* BLOG TAG PAGES */
    const allTagPosts = queries.data.allContentfulBlogPostCategory.edges
    const tagPostsPerPage = 1
    
    allTagPosts.forEach(({ node }) => {
        const tagPosts = node.blog_post
        let numTagPosts = Math.ceil(tagPosts.length / tagPostsPerPage)
        Array.from({ length: numTagPosts }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog/tag/` + node.name.replace(" ", "-").toLowerCase()  : `/blog/tag/` + node.name.replace(" ", "-").toLowerCase() + `/${i + 1}`,
                component: path.resolve("./src/components/blog/components/tag/tag.js"),
                context: {
                    id: node.name,
                    limit: tagPostsPerPage,
                    skip: i * tagPostsPerPage,
                    numTagPosts,
                    currentPage: i + 1,
                },
            })
        })
    })
    /* BLOG ARTICLES */
    queries.data.allContentfulBlogPost.edges.forEach(({ node }) => {

        createPage({
            path: '/post/' + node.id + '/',
            component: path.resolve(`./src/components/blog/components/article/article.js`),
            context: {
                id: node.id,
            },
        })
    })

    /* STORE */
    /* STORE PAGES */
    const products = queries.data.allContentfulStoreProduct.edges
    const productsPerPage = 6
    const numProducts = Math.ceil(products.length / productsPerPage)
    Array.from({ length: numProducts }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/store` : `/store/${i + 1}`,
            component: path.resolve("./src/components/store/store.js"),
            context: {
                limit: productsPerPage,
                skip: i * productsPerPage,
                numProducts,
                currentPage: i + 1,
            },
        })
    })
    /* STORE TAG PAGES */
    const allTagProducts = queries.data.allContentfulProductCategories.edges
    const tagProductsPerPage = 1
    
    allTagProducts.forEach(({ node }) => {
        const tagProducts = node.product
        let numTagProducts = Math.ceil(tagProducts.length / tagProductsPerPage)
        Array.from({ length: numTagProducts }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/store/tag/` + node.name.replace(" ", "-").toLowerCase()  : `/store/tag/` + node.name.replace(" ", "-").toLowerCase() + `/${i + 1}`,
                component: path.resolve("./src/components/store/components/tag/tag.js"),
                context: {
                    id: node.name,
                    limit: tagProductsPerPage,
                    skip: i * tagProductsPerPage,
                    numTagProducts,
                    currentPage: i + 1,
                },
            })
        })
    })
    /* STORE PRODUCTS */
    queries.data.allContentfulStoreProduct.edges.forEach(({ node }) => {
        createPage({
            path: '/store/' + node.id + '/',
            component: path.resolve(`./src/components/store/components/product/product.js`),
            context: {
                id: node.id,
            },
        })
    })
}