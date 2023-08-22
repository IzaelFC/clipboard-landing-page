export default function App() {
  return (
    <div className="flex flex-col text-xl font-['Bai_Jamjuree,_sans-serif']">
      <header className="flex flex-col relative sm:my-40 my-10 sm:mx-0 mx-auto z-0">
        <img className="absolute sm:-mt-40 -mt-10 z-0" src="images/bg-header-desktop.png" alt="" />
        <img className="w-28 h-28 mx-auto mb-5 z-10" src="images/logo.svg" alt="" />
        <h1 className="w-[90%] font-bold text-center text-[--dark-grayish-blue] sm:text-5xl text-3xl mx-auto z-10">A history of everything you copy</h1>

        <p className="z-10 sm:text-xl text-sm">
          Clipboard allows you to track and organize everything you
          copy. Instantly access your clipboard on all your devices.
        </p>

        <div className="flex sm:flex-row flex-col mx-auto my-10 gap-5 z-10">
          <button className="bg-[--strong-cyan] hover:shadow-[--strong-cyan]">Download for iOS</button>
          <button className="bg-[--light-blue] hover:shadow-[--light-blue]">Download for Mac</button>
        </div>
      </header>

      <h2 className="sm:text-4xl text-2xl sm:px-0 px-10">Keep track of your snippets</h2>

      <p className="text-base px-[20%] mb-20">
        Clipboard instantly stores any item you copy in the cloud,
        meaning you can access your snippets immediately on all your
        devices. Our Mac and iOS apps will help you organize everything.
      </p>

      <div className="sm:flex lg:gap-36 gap-20">
        <img className="lg:w-full md:w-[70%] sm:w-[50%] w-full md:-ml-40 sm:-ml-20 mx-auto sm:px-0 px-5" src="images/image-computer.png" alt="" />
        <div className="space-y-10 sm:my-auto mt-20 sm:text-left text-center md:pr-40 sm:pr-20 pr-0">
          <div className="space-y-2">
            <h3>Quick Search</h3>
            <p className="sm:text-left text-center text-base p-0">Easily search your snippets by content, category, web address, application, and more.</p>
          </div>
          
          <div className="space-y-2">
            <h3>iCloud Sync</h3>
            <p className="sm:text-left text-center text-base p-0">Instantly saves and syncs snippets across all your devices.</p>
          </div>
          
          <div className="space-y-2">
            <h3>Complete History</h3>
            <p className="sm:text-left text-center text-base p-0">Retrieve any snippets from the first moment you started using the app.</p>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h2 className="sm:text-4xl text-2xl sm:px-0 px-10">Access Clipboard anywhere</h2>
        
        <p>
          Whether you’re on the go, or at your computer, you can access all your Clipboard
          snippets in a few simple clicks.
        </p>
      </div>

      <img className="w-[50%] h-full mx-auto" src="images/image-devices.png" alt="" />
      <h2 className="mt-10 sm:text-4xl text-2xl sm:px-0 px-10">Supercharge your workflow</h2>
      <p>We’ve got the tools to boost your productivity.</p>


      <section className="md:grid grid-cols-3 gap-10 my-10 mx-20">
        <div className="text-center">
          <img className="mx-auto mb-10" src="images/icon-blacklist.svg" alt="" />
          <h3>Create blacklists</h3>
          <p className="text-base px-0">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
        </div>

        <div className="text-center">
          <img className="mx-auto mb-10" src="images/icon-text.svg" alt="" />
          <h3>Plain text snippets</h3>
          <p className="text-base px-0">Remove unwanted formatting from copied text for a consistent look.</p>
        </div>
        
        <div className="text-center">
          <img className="mx-auto mb-10" src="images/icon-preview.svg" alt="" />
          <h3>Sneak preview</h3>
          <p className="text-base px-0">Quick preview of all snippets on your Clipboard for easy access.</p>
        </div>
      </section>

      <section className="grid md:grid-cols-5 sm:grid-cols-2 sm:gap-10 gap-20 px-10 mx-auto md:my-20 my-10">
        <img src="images/logo-google.png" alt="" />
        <img src="images/logo-ibm.png" alt="" />
        <img src="images/logo-microsoft.png" alt="" />
        <img src="images/logo-hp.png" alt="" />
        <img src="images/logo-vector-graphics.png" alt="" />
      </section>

      <section className="flex flex-col my-20">
        <h2 className="sm:text-4xl text-2xl sm:px-0 px-10">Clipboard for iOS and Mac OS</h2>

        <p>
          Available for free on the App Store. Download for Mac or iOS, sync with iCloud
          and you’re ready to start adding to your clipboard.
        </p>

        <div className="flex sm:flex-row flex-col mx-auto my-10 gap-5">
          <button className="bg-[--strong-cyan] hover:shadow-[--strong-cyan]">Download for iOS</button>
          <button className="bg-[--light-blue] hover:shadow-[--light-blue]">Download for Mac</button>
        </div>
      </section>

      <footer className="flex sm:flex-row sm:gap-0 gap-10 flex-col justify-between mb-10">
        <img className="w-14 h-14 m-auto" src="images/logo.svg" alt="" />

        <div className="grid sm:grid-cols-3 gap-x-10 gap-y-5 text-[--dark-grayish-blue] sm:text-left text-center">
          <a href="">FAQs</a>
          <a href="">Privacy Policy</a>
          <a href="">Install Guide</a>
          <a href="">Contact Us</a>
          <a href="">Press Kit</a>
        </div>

        <div className="flex gap-5 m-auto">
          <a href="https://facebook.com"><img src="images/icon-facebook.svg" alt="" /></a>
          <a href="https://twitter.com"><img src="images/icon-twitter.svg" alt="" /></a>
          <a href="https://instagram.com"><img src="images/icon-instagram.svg" alt="" /></a>
        </div>
      </footer>
    </div>
  )
}


/* ADICIONANDO TAILWIND NO CSS */
/* https://tailwindcss.com/docs/adding-custom-styles#adding-component-classes */