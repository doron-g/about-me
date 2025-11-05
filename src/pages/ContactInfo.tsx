function ContactInfo() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Contact Info</h1>
      <p className="mb-4">I am a passionate professional with expertise in modern web development and a strong focus on creating user-friendly applications.</p>
      <p className="mb-4">My experience includes working with cutting-edge technologies and frameworks to deliver high-quality solutions.</p>
      <p className="mb-4">I am committed to continuous learning and staying up-to-date with the latest industry trends and best practices.</p>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Find me on</h2>
        <ul className="space-y-2">
          <li>
            <a href="https://www.instagram.com/doron_g_/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 hover:underline">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/doron.gescheidt/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 hover:underline">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://x.com/Doron_g" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-500 hover:underline">
              X (formerly Twitter)
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default ContactInfo
