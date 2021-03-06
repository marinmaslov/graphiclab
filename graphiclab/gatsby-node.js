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
                        relativePath
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
                    relativePath
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
                    store_product {
                        id
                    }
                    relativePath
                }
            }
        }
      }
    `)

    /* BLOG */
    /* BLOG PAGES */
    const posts = queries.data.allContentfulBlogPost.edges
    const postsPerPage = 6
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
    /* BLOG TAG PAGES ALL */
    const postsAll = queries.data.allContentfulBlogPost.edges
    const postsPerPageAll = 6
    const numPagesAll = Math.ceil(postsAll.length / postsPerPageAll)
    Array.from({ length: numPagesAll }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog/tag/all` : `/blog/tag/all/${i + 1}`,
            component: path.resolve("./src/components/blog/components/tag/all/all.js"),
            context: {
                limit: postsPerPageAll,
                skip: i * postsPerPageAll,
                numPagesAll,
                currentPageAll: i + 1,
            },
        })
    })
    /* BLOG TAG PAGES */
    const allTagPosts = queries.data.allContentfulBlogPostCategory.edges
    const tagPostsPerPage = 6
    
    allTagPosts.forEach(({ node }) => {
        const tagPosts = node.blog_post
        let numTagPosts = Math.ceil(tagPosts.length / tagPostsPerPage)
        Array.from({ length: numTagPosts }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog/tag/` + node.relativePath.toLowerCase()  : `/blog/tag/` + node.relativePath.toLowerCase() + `/${i + 1}`,
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
    /* BLOG Page */
    createPage({
        path: `/store/tag/all`,
        component: path.resolve("./src/components/store/components/tag/all/all.js")
    })
    /* STORE TAG PAGES */
    const allTagProducts = queries.data.allContentfulProductCategories.edges
    const tagProductsPerPage = 6
    
    allTagProducts.forEach(({ node }) => {
        const tagProducts = node.store_product
        let numTagProducts = Math.ceil(tagProducts.length / tagProductsPerPage)
        Array.from({ length: numTagProducts }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/store/tag/` + node.relativePath.toLowerCase()  : `/store/tag/` + node.relativePath.toLowerCase() + `/${i + 1}`,
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
            path: '/store/product/' + node.id + '/',
            component: path.resolve(`./src/components/store/components/product/product.js`),
            context: {
                id: node.id,
            },
        })
    })
}