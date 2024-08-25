import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            placeat, fugit minus iure voluptatum soluta impedit expedita sunt
            modi sint omnis eveniet quidem asperiores corporis molestiae ad
            nihil laudantium sit.
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
