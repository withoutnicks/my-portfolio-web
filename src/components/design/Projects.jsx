import { CardProject } from '../CardProject'
import { IconLink } from '../icons/IconLink'
import { ButtonCard } from '../ButtonCard'
import { SVGReact } from '../../assets/svgs/SVGReact'
import { SVGJavascript } from '../../assets/svgs/SVGJavascript'
import { SVGTailwind } from '../../assets/svgs/SVGTailwind'
import { SVGHtml } from '../../assets/svgs/SVGHtml'
import { SVGCss } from '../../assets/svgs/SVGCss'
import { SVGAstro } from '../../assets/svgs/SVGAstro'

export const Projects = () => {
  return (
    <section>
      <article>
        <CardProject
          image='https://illustrations.popsy.co/gray/podcast-man.svg'
          projectName='My personal blog'
          description='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
          stack={(
            <>
              <SVGAstro /> <SVGTailwind />
            </>
          )}
          buttons={(
            <>
              <ButtonCard link='#' text='Code' />
              <ButtonCard link='#' text='Preview' icon={<IconLink />} />
            </>
          )}
        />
        <div className='divider' />
        <CardProject
          image='https://illustrations.popsy.co/gray/online-shopping.svg'
          projectName='Basic Shopping Cart'
          description='Una proyecto donde pongo en practica temas de React como el useContext y useReducer'
          stack={(
            <>
              <SVGReact /> <SVGJavascript /> <SVGTailwind />
            </>
          )}
          buttons={(
            <>
              <ButtonCard link='https://github.com/withoutnicks/shopping-cart-react' text='Code' />
              <ButtonCard link='https://my-whopping-cart.netlify.app/' text='Preview' icon={<IconLink />} />
            </>
          )}
          reverse
        />
        <div className='divider' />
        <CardProject
          image='https://illustrations.popsy.co/gray/web-design.svg'
          projectName='Mini Projects Webs'
          description='Recopilacion de pequeños proyectos para aprender desarrollo web'
          stack={(
            <>
              <SVGHtml /> <SVGCss /> <SVGJavascript />
            </>
          )}
          buttons={(
            <>
              <ButtonCard link='https://github.com/withoutnicks/mini-projects-web' text='Code' />
            </>
          )}
        />
      </article>
    </section>
  )
}
