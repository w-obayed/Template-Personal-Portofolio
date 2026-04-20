import React from 'react'

function ContactInfo() {
  return (
        <div className="space-y-10 pt-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Get In Touch</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl border border-white/20">
                  ✉️
                </div>
                <div>
                  <p className="text-purple-300 text-sm">E-mail</p>
                  <a href="mailto:ferthoz2001@gmail.com" className="text-white hover:text-purple-300 transition-colors">
                    ferthoz2001@gmail.com
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl border border-white/20">
                  ☎️
                </div>
                <div>
                  <p className="text-purple-300 text-sm">Call</p>
                  <a href="tel:9150369790" className="text-white hover:text-purple-300 transition-colors">
                    9150369790
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl border border-white/20">
                  in
                </div>
                <div>
                  <p className="text-purple-300 text-sm">Linked In</p>
                  <a 
                    href="https://linkedin.com/in/ferthoz-begam0605/" 
                    target="_blank"
                    className="text-white hover:text-purple-300 transition-colors break-all"
                  >
                    linkedin.com/in/ferthoz-begam0605/
                  </a>
                </div>
              </div>

              {/* Behance */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl border border-white/20 font-bold">
                  B
                </div>
                <div>
                  <p className="text-purple-300 text-sm">Behance</p>
                  <a 
                    href="https://www.behance.net/014ferthozbegam" 
                    target="_blank"
                    className="text-white hover:text-purple-300 transition-colors break-all"
                  >
                    behance.net/014ferthozbegam
                  </a>
                </div>
              </div>
            </div>
        </div>
  )
}

export default ContactInfo