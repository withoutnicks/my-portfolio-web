import { CardProject } from '../CardProject'
import { IconLink } from '../icons/IconLink'
import { ButtonCard } from '../ButtonCard'
import { SVGReact } from '../../assets/svgs/SVGReact'
import { SVGJavascript } from '../../assets/svgs/SVGJavascript'
import { SVGTailwind } from '../../assets/svgs/SVGTailwind'
import { SVGHtml } from '../../assets/svgs/SVGHtml'
import { SVGCss } from '../../assets/svgs/SVGCss'
import { SVGAstro } from '../../assets/svgs/SVGAstro'
import { IconSource } from '../icons/IconSource'

export const Projects = () => {
  return (
    <section>
      <article>
        <CardProject
          image='https://illustrations.popsy.co/gray/podcast-man.svg'
          projectName='My personal blog'
          description='Blog in Spanish where I publish articles that seek to help other programmers'
          stack={(
            <>
              <SVGAstro /> <SVGTailwind />
            </>
          )}
          buttons={(
            <>
              <ButtonCard link='https://wts-blog.netlify.app/' text='Preview' icon={<IconLink />} />
            </>
          )}
        />
        <div className='divider' />
        <CardProject
          image='https://illustrations.popsy.co/gray/sales.svg'
          projectName='Basic Shopping Cart'
          description='A project where I put into practice important React topics such as useContext and useReducer'
          stack={(
            <>
              <SVGReact /> <SVGJavascript /> <SVGTailwind />
            </>
          )}
          buttons={(
            <>
              <ButtonCard
                link='https://github.com/withoutnicks/shopping-cart-react'
                text='Code'
                icon={<IconSource />}
              />
              <ButtonCard link='https://my-whopping-cart.netlify.app/' text='Preview' icon={<IconLink />} />
            </>
          )}
          reverse
        />
        <div className='divider' />
        <CardProject
          image='https://illustrations.popsy.co/gray/web-design.svg'
          projectName='Mini Projects Webs'
          description='Repository that compiles small projects to learn concepts of web development using the basic stack'
          stack={(
            <>
              <SVGHtml /> <SVGCss /> <SVGJavascript />
            </>
          )}
          buttons={(
            <>
              <ButtonCard
                link='https://github.com/withoutnicks/mini-projects-web'
                text='Code'
                icon={<IconSource />}
              />
            </>
          )}
        />
      </article>
    </section>
  )
}
