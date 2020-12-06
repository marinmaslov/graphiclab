/**
 * Blog Cards
 */
import React from "react"
  
import { Link } from "gatsby"

const BlogCard = ({ article }) => {
    const classNames = []
    article.category.map(({ name: name }) => {
      classNames.push(name.toLowerCase().replace(" ", "-"))
    })

    const articleText = article.text.text.substring(0, 300)

    return (
        <article id="{article.id}" className={ classNames.join(" ") }>
          <div>
            <h2>
              <Link key={ article.id } to={`/post/${ article.id }`} state={ article }>
                {article.title}
              </Link>
            </h2>
            <figure>
              <Link key={ article.id } to={`/post/${ article.id }`} state={ article }>
                <img src={article.image.fluid.src} />
              </Link>
            </figure>
            <p>{articleText}...</p>
            <Link key={ article.id } to={`/post/${ article.id }`} state={ article }>
              <button>Read more</button>
            </Link>
          </div>
        </article>
    )
}

export default BlogCard