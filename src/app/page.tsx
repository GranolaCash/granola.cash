import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Comfortaa } from 'next/font/google'
import { ArrowRight } from 'lucide-react'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export default function LandingPage() {
  const emojis = ['🌰', '🥜', '🫘', '🌾', '🥣']

  return (
    <div className={`min-h-screen bg-[#FFF8E1] text-[#5D4037] ${comfortaa.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Added container with padding */}
        <header className="py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="/granola.png?height=40&width=40" alt="Granola Logo" width={40} height={40} className="rounded-full" />
            <span className="text-2xl font-bold">GRANOLA</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#partners" className="hover:underline">Partners</a></li>
            </ul>
          </nav>
        </header>

        <main className="mt-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Trade privately with Granola</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">We have no way of knowing who you are or what you're doing – Your identity and activities stay 100% private.</p>
          <Link href="https://wallet.granola.cash">
            <Button className="bg-[#8D6E63] hover:bg-[#6D4C41] text-white px-8 py-3 rounded-full text-lg">
              Get Started
            </Button>
          </Link>

          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">A New Era in Bitcoin Exchanges</h2>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {emojis.map((emoji, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg text-4xl">
                    {emoji}
                  </div>
                  {index < emojis.length - 1 && (
                    <ArrowRight className="w-8 h-8 text-[#8D6E63] mx-2" />
                  )}
                </div>
              ))}
            </div>
          </section>

          <div id="about" className="mt-24">
            <h2 className="text-3xl font-semibold mb-6">About Granola</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Image src="/granola.png?height=300&width=300" alt="Granola Bowl" width={300} height={300} className="mx-auto rounded-lg shadow-lg" />
              <div className="text-left space-y-4">
                <p>
                    Granola is the first exchange built on Cashu and Nostr, allowing atomic cross-mint swaps
                    and Chaumian eCash transactions for enhanced privacy.
                </p>
                <p>
                    With integrations for Taproot Assets and Liquid, we bring flexible
                    private asset management to Bitcoin and stablecoins.
                </p>
              </div>
            </div>
          </div>

          <div id="features" className="mt-24">
            <h2 className="text-3xl font-semibold mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Nostr Integration</h3>
                  <p>Post and fill swap orders from a nostr based orderbook.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Zero Knowledge, Atomic and Permissionless</h3>
                  <p>Leveraging Cashu's HTLCs, NUT-10 and NUT-11, swaps are atomic, which means no counterparty risk.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Depix Integration</h3>
                  <p>By integrating Depix, we allow for BRL denominated ecash tokens. Great for the brazillian market.</p>
              </div>
            </div>
          </div>

          <div id="partners" className="mt-24">
            <h2 className="text-3xl font-semibold mb-12 text-center">Our Partners</h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 place-items-center"> {/* Changed this line */}
                {[1].map((_, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md w-fit"> {/* Added w-fit */}
                    <Image 
                      src="/depix.jpeg" 
                      alt={`Partner ${index + 1}`} 
                      width={100} 
                      height={100} 
                      className="mx-auto" 
                    />
                    <p className="mt-2 text-center text-sm">Depix</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="mt-24 bg-[#8D6E63] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 (c) Granola. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
