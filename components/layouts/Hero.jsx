
const Hero = () => {
  return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://assets.vogue.com/photos/5891584df88f7c2037365553/master/pass/00-black-designers-fit-install.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
      <button className="btn btn-success mx-1">Login</button>

    </div>
  </div>
</div>  )
}

export default Hero