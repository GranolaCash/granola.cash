import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Comfortaa } from 'next/font/google'
import { ArrowDown, ArrowUp } from 'lucide-react'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export default function LandingPage() {
  const topEmojis = ['🌰', '🥜', '🫘', '🌾']
  const bowlEmoji = '🥣'

  return (
    <div className={`min-h-screen bg-[#FFF8E1] text-[#5D4037] ${comfortaa.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and other sections remain unchanged */}
        
        <main className="mt-16 text-center">
          {/* Hero section remains unchanged */}

          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">From Nature to Your Bowl</h2>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center gap-4 mb-4">
                {topEmojis.map((emoji, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg text-3xl mb-2">
                      {emoji}
                    </div>
                      <div className="flex gap-0">
                        <ArrowDown className="w-6 h-6 text-[#8D6E63]" />
                        <ArrowUp className="w-6 h-6 text-[#8D6E63]" />
                      </div>
                  </div>
                ))}
              </div>
              <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg text-4xl my-4">
                {bowlEmoji}
              </div>
              
            </div>
          </section>

          {/* About, Features, and Partners sections remain unchanged */}
        </main>
      </div>

      {/* Footer remains unchanged */}
    </div>
  )
}