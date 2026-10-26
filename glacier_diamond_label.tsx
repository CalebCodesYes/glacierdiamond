import React, { useState } from 'react';
import { Diamond, Music, Mail, MapPin, Disc3, ChevronRight, Instagram, Twitter, Youtube, X, Headphones, Link2 } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const artists = [
    { name: 'gxrfy', genre: 'Alternative / Rap', track: 'Glacier Walk', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', spotify: 'https://open.spotify.com/artist/51qZzXhS8b6yeNCJQ4o0Zx', apple: 'https://music.apple.com/us/artist/gxrfy/1618084689', instagram: 'https://www.instagram.com/gxrfy_2200/', twitter: 'https://x.com/GxrfyGlacierD' },
    { name: 'EXEYEA', genre: 'Hip-Hop', track: 'Vision', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', spotify: 'https://open.spotify.com/artist/7yXJzytvs9yJB8dguwB6Xf', apple: 'https://music.apple.com/us/artist/exeyea/1691589403', instagram: 'https://www.instagram.com/theexecutionergd/' },
    { name: 'Twinsemiis', genre: 'Electronic / Pop', track: 'Double Vision', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', image: 'Twinsemiis_photo.jpg', spotify: 'https://open.spotify.com/artist/21Zc2nlxSeCgaXDV57JyaJ', apple: 'https://music.apple.com/us/artist/twinsemiis/1645812959', instagram: 'https://www.instagram.com/j5keepgen5/' },
    { name: 'RIP', genre: 'Underground Hip-Hop', track: 'Tombstone', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', spotify: 'https://open.spotify.com/artist/6uraA4yut8S7CfIi9zzoKv' },
    { name: 'TeeJae', genre: 'R&B / Soul', track: 'Smooth Ice', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', spotify: 'https://open.spotify.com/artist/0QhkbO8EDDxGOrzJCstQE7', apple: 'https://music.apple.com/us/artist/teejae/1631154594' },
    { name: 'Mxlo', genre: 'Trap / Hip-Hop', track: 'Bando', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
    { name: 'M90', genre: 'Experimental', track: 'Orbit', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', spotify: 'https://open.spotify.com/artist/1fSol7TlbagsoYyoqmOhuM' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'artists':
        return <Artists artists={artists} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <Diamond className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={28} />
            <span className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200 uppercase">
              Glacier Diamond
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <button 
              onClick={() => setActiveTab('home')}
              className={`hover:text-cyan-400 transition-colors ${activeTab === 'home' ? 'text-cyan-400' : 'text-slate-400'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setActiveTab('artists')}
              className={`hover:text-cyan-400 transition-colors ${activeTab === 'artists' ? 'text-cyan-400' : 'text-slate-400'}`}
            >
              Artists
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className={`hover:text-cyan-400 transition-colors ${activeTab === 'contact' ? 'text-cyan-400' : 'text-slate-400'}`}
            >
              About / Contact
            </button>
          </div>

          {/* Mobile Menu Toggle (Simplified for snippet) */}
          <div className="md:hidden flex gap-4 text-xs font-bold uppercase">
             <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-cyan-400' : 'text-slate-400'}>Home</button>
             <button onClick={() => setActiveTab('artists')} className={activeTab === 'artists' ? 'text-cyan-400' : 'text-slate-400'}>Artists</button>
             <button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'text-cyan-400' : 'text-slate-400'}>Contact</button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-20 min-h-[calc(100vh-80px)] flex flex-col">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-cyan-900/30 py-8 text-center mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Glacier Diamond Records. All rights reserved.
          </p>
          <div className="flex gap-4 text-slate-400">
            <a href="#" className="hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-cyan-400 transition-colors"><Youtube size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- View Components ---

const Home = ({ setActiveTab }) => (
  <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden px-6 py-20">
    {/* Abstract background elements */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-4xl mx-auto text-center z-10">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800/50 text-cyan-300 text-sm font-medium mb-8">
        <Disc3 size={16} className="animate-spin-slow" />
        Independent Record Label
      </div>
      
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-100 to-cyan-600">
        COLD CUTS.<br/>BRILLIANT SOUNDS.
      </h1>
      
      <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
        Glacier Diamond is shaping the future of underground and mainstream music. 
        Forged under pressure, delivering flawless artistry.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          onClick={() => setActiveTab('artists')}
          className="w-full sm:w-auto px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all flex items-center justify-center gap-2 group"
        >
          Discover Our Roster
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => setActiveTab('contact')}
          className="w-full sm:w-auto px-8 py-4 bg-transparent border border-cyan-800 hover:border-cyan-500 hover:bg-cyan-950/30 text-white font-bold rounded-lg transition-all"
        >
          Contact Us
        </button>
      </div>
    </div>
  </div>
);

const Artists = ({ artists }) => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <div className="flex-1 w-full max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">THE ROSTER</h2>
        <div className="inline-flex items-center justify-center gap-2 text-cyan-400 bg-cyan-950/30 px-6 py-3 rounded-full border border-cyan-900/50">
          <MapPin size={20} />
          <span className="font-semibold tracking-wide uppercase text-sm md:text-base">
            Proudly From Grand Rapids, Michigan
          </span>
        </div>
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          Seven unique visions. One city. Meet the talent shaping the Glacier Diamond soundscape.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artists.map((artist, index) => (
          <div 
            key={index}
            onClick={() => setSelectedArtist(artist)}
            className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] cursor-pointer"
          >
            {/* Conditional check for artist image */}
            {artist.image ? (
               <div className="h-64 w-full bg-slate-800 relative overflow-hidden">
                 <img src={artist.image} alt={artist.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
               </div>
            ) : (
               <div className="h-64 w-full bg-gradient-to-br from-slate-800 to-slate-950 relative">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.4)_0%,transparent_100%)] group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Music size={48} className="text-slate-700 group-hover:text-cyan-500/50 transition-colors duration-300" />
                  </div>
               </div>
            )}
            
            <div className="p-6 relative bg-slate-900 z-10">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {artist.name}
              </h3>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {artist.genre}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
          onClick={() => setSelectedArtist(null)}
        >
          <div 
            className="bg-slate-900 border border-cyan-900/50 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedArtist(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 p-2 rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>
            
            {/* Modal Header */}
            {selectedArtist.image ? (
               <div className="h-64 w-full relative">
                 <img src={selectedArtist.image} alt={selectedArtist.name} className="w-full h-full object-cover object-top" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
               </div>
            ) : (
               <div className="h-48 w-full bg-gradient-to-r from-cyan-900 to-slate-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                     <Diamond size={80} className="text-cyan-400" />
                  </div>
               </div>
            )}

            {/* Modal Content */}
            <div className="p-8 -mt-16 relative z-10">
              <div className="bg-slate-950 inline-flex items-center justify-center p-4 rounded-xl border border-slate-800 mb-6 shadow-lg h-20 w-20">
                <Music size={40} className="text-cyan-400" />
              </div>
              
              <h3 className="text-4xl font-black text-white mb-2">{selectedArtist.name}</h3>
              <p className="text-cyan-400 font-medium tracking-wide uppercase text-sm mb-8">{selectedArtist.genre}</p>

              <div className="space-y-8">
                {/* Audio Player */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                  <h4 className="text-sm text-slate-400 font-semibold mb-3 flex items-center gap-2">
                    <Headphones size={16} className="text-cyan-500" /> Latest Release: {selectedArtist.track}
                  </h4>
                  {/* Styled basic audio element */}
                  <audio 
                    controls 
                    className="w-full h-12 rounded-lg outline-none opacity-90 hover:opacity-100 transition-opacity" 
                    src={selectedArtist.audio}
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>

                {/* Pre-saves */}
                <div className="bg-cyan-950/20 p-5 rounded-xl border border-cyan-900/30">
                  <h4 className="text-sm text-cyan-400 font-bold mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Disc3 size={16} className="animate-spin-slow" /> Upcoming Release
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex-1 min-w-[140px] bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 border border-slate-700 hover:border-cyan-500/50">
                       Pre-Save on Spotify
                    </button>
                    <button className="flex-1 min-w-[140px] bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 border border-slate-700 hover:border-cyan-500/50">
                       Pre-Add on Apple Music
                    </button>
                  </div>
                </div>

                {/* Streaming Links */}
                <div>
                  <h4 className="text-sm text-slate-400 font-semibold mb-3 uppercase tracking-wider">Listen Now</h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedArtist.spotify ? (
                       <a href={selectedArtist.spotify} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-lg shadow-[#1DB954]/20">
                          Spotify
                       </a>
                    ) : (
                       <button disabled className="flex-1 min-w-[140px] bg-slate-800 text-slate-500 font-bold py-3 px-4 rounded-lg cursor-not-allowed flex justify-center items-center gap-2">
                          Spotify (N/A)
                       </button>
                    )}
                    
                    {selectedArtist.apple ? (
                       <a href={selectedArtist.apple} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] bg-[#fa243c] hover:bg-[#ff3b52] text-white font-bold py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 shadow-lg shadow-[#fa243c]/20">
                          Apple Music
                       </a>
                    ) : (
                       <button disabled className="flex-1 min-w-[140px] bg-slate-800 text-slate-500 font-bold py-3 px-4 rounded-lg cursor-not-allowed flex justify-center items-center gap-2">
                          Apple Music (N/A)
                       </button>
                    )}
                  </div>
                </div>

                {/* Socials & Links */}
                <div>
                  <h4 className="text-sm text-slate-400 font-semibold mb-3 uppercase tracking-wider">Connect</h4>
                  <div className="flex gap-4">
                    {selectedArtist.instagram && (
                       <a href={selectedArtist.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="p-3 bg-slate-800 hover:bg-cyan-900/50 hover:text-cyan-400 rounded-lg transition-all text-slate-300">
                         <Instagram size={20} />
                       </a>
                    )}
                    {selectedArtist.twitter && (
                       <a href={selectedArtist.twitter} target="_blank" rel="noopener noreferrer" title="Twitter / X" className="p-3 bg-slate-800 hover:bg-cyan-900/50 hover:text-cyan-400 rounded-lg transition-all text-slate-300">
                         <Twitter size={20} />
                       </a>
                    )}
                    <a href="#" title="Official Website" className="px-4 py-3 bg-slate-800 hover:bg-cyan-900/50 hover:text-cyan-400 rounded-lg transition-all text-slate-300 flex items-center gap-2">
                      <Link2 size={20} /> <span className="text-sm font-medium">Web / Links</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Contact = () => (
  <div className="flex-1 w-full max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 items-start">
    {/* About Section */}
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-4xl font-black tracking-tight text-white mb-6">ABOUT THE LABEL</h2>
      <p className="text-slate-300 leading-relaxed text-lg">
        Founded on the frozen streets of <span className="text-cyan-400 font-semibold">Grand Rapids, Michigan</span>, 
        Glacier Diamond is more than an independent record label—it's a movement. 
      </p>
      <p className="text-slate-400 leading-relaxed">
        We specialize in unearthing raw, undeniable talent and polishing it until it shines. 
        Our roster represents the diverse, gritty, and forward-thinking sounds of the Midwest. 
        We give our artists the creative freedom they need while providing the structural backing 
        to pierce through the noise of the modern music industry.
      </p>
      <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 mt-8">
        <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
        <p className="text-sm text-slate-400">
          To maintain independence, foster creative brilliance, and put Grand Rapids on the global map for music.
        </p>
      </div>
    </div>

    {/* Contact Section */}
    <div className="w-full md:w-1/2 bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]"></div>
      
      <h2 className="text-3xl font-black tracking-tight text-white mb-2 relative z-10">GET IN TOUCH</h2>
      <p className="text-slate-400 mb-8 relative z-10">
        Booking, press inquiries, or demo submissions? Drop us a line.
      </p>

      <div className="space-y-8 relative z-10">
        <a 
          href="mailto:contact@glacierdiamondlabel.com"
          className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500 hover:bg-cyan-950/20 transition-all group"
        >
          <div className="bg-cyan-950 p-3 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
            <Mail size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Direct Email</p>
            <p className="text-lg font-semibold text-white">contact@glacierdiamondlabel.com</p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="bg-slate-800 p-3 rounded-lg text-slate-400">
            <MapPin size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Headquarters</p>
            <p className="text-lg font-semibold text-white">Grand Rapids, MI</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;