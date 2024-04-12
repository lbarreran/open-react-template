import VideoThumb from '@/public/images/DOGFILE.png'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Cuidado 360º para tu perro</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Una aplicación para tener el control total sobre el cuidado de tu mejor amigo peludo. Con recordatorios, alarmas y recomendaciones para darle lo mejor.</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-800 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://dogfile.netlify.app/">Empezar</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-gray-800 bg-gray-200 hover:bg-gray-400 w-full sm:w-auto sm:ml-4" href="mailto:dogfileproject@gmail.com">Contacto</a>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}
