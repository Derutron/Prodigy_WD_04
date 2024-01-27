const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

  return (
    <div className="w-screen h-[400px] bg-gray-200 ">
  <div className="flex">
    <div className="w-[1000px] h-[300px] mt-10 ml-10">
      <p className="text-[30px] font-[700]">
        Copyright © 2023 DERUTRON. All rights reserved.<br /><br /><br />
        </p>

        <p  className="text-[20px] font-[700]">Derek Fidoro<br />
        11 Third Lane off Summit Road<br />
        Osisioma, Aba, Abia State<br />
        Nigeria.<br />
        Email: <a href="mailto:fidg_1@yahoo.com">fidg_1@yahoo.com</a><br />
        Website: <a href="https://www.derutron.com" target="_blank" rel="noopener noreferrer">https://www.derutron.com</a><br />
        GitHub: <a href="https://github.com/Derutron?tab=repositories" target="_blank" rel="noopener noreferrer">https://github.com/Derutron?tab=repositories</a>
      </p>
    </div>

    {/* social media icons */}
    <div className='flex gap-10 ml-10 absolute bottom-10 right-20'>
      <a href='https://web.facebook.com/fidoro/' target='_blank' rel='noopener noreferrer' onClick={scrollToTop}>
        <img
          className="w-[60px] h-[60px] rounded-md"
          src="src/resources/facebook.png"
          alt="Facebook"
        />
      </a>

      <a href='https://twitter.com/Derefid' target='_blank' rel='noopener noreferrer' onClick={scrollToTop}>
        <img
          className="w-[60px] h-[60px] rounded-md"
          src="src/resources/x.png"
          alt="Twitter"
        />
      </a>

      <a href='https://www.instagram.com/derutron_23/?hl=en' target='_blank' rel='noopener noreferrer' onClick={scrollToTop}>
        <img
          className="w-[60px] h-[60px] rounded-md"
          src="src/resources/instagram.png"
          alt="Instagram"
        />
      </a>
    </div>
  </div>
</div>

       
  )
}

export default Footer