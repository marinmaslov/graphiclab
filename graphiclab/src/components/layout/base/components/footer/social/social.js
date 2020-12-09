/**
 * Urls component that is part of the site Footer
 */
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faGithubSquare, faYoutubeSquare, faFacebookSquare, faTwitterSquare, faRedditSquare  } from '@fortawesome/free-brands-svg-icons'

const Social = ({ }) => {
    return (
        <>
        <div class="social-box">
            <a href="/" title="Behance"><i><FontAwesomeIcon icon={ faBehanceSquare }/></i></a>
            <a href="/" title="GitHub"><i><FontAwesomeIcon icon={ faGithubSquare }/></i></a>
            <a href="/" title="YouTube"><i><FontAwesomeIcon icon={ faYoutubeSquare }/></i></a>
            <a href="/" title="Facebook"><i><FontAwesomeIcon icon={ faFacebookSquare }/></i></a>
            <a href="/" title="Twitter"><i><FontAwesomeIcon icon={ faTwitterSquare }/></i></a>
            <a href="/" title="Reddit"><i><FontAwesomeIcon icon={ faRedditSquare }/></i></a>
        </div>
        </>
    )
}

export default Social