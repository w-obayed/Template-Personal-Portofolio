import React from 'react'

function Form() {
  return (
        <div className="bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone No"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500 transition-all"
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white placeholder:text-white/50 focus:outline-none focus:border-purple-500 transition-all resize-y"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-purple-500/50"
              >
                Send Message
              </button>
            </form>
        </div>
  )
}

export default Form
