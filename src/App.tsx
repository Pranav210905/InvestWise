import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { SavedSchemesProvider } from './contexts/SavedSchemesContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { Home } from './pages/Home';
import { SchemeDetails } from './pages/SchemeDetails';
import { SavedSchemes } from './pages/SavedSchemes';
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'
import { InvestmentsAdvisor } from './pages/InvestmentsAdvisor';
import { VideoGuides } from './pages/VideoGuides';
import { Advice } from './components/Advicers';
import Invest2 from './pages/InvestmentsAdvisor2'
import { LICPolicyExplorer } from './components/LICPolicyExplorer';

function App() {
  return (
    <ThemeProvider>
      <SavedSchemesProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 flex flex-col">
            <Navbar />
            <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/scheme/:id" element={<SchemeDetails />} />
                <Route path="/saved" element={<SavedSchemes />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path="/investments" element={<InvestmentsAdvisor/>}/>
                <Route path="/video-guides" element={<VideoGuides />} />
                <Route path="/advice" element={<Advice/>}/>
                <Route path='/investments_2' element={<Invest2 />}/>
                <Route path="/lic" element={<LICPolicyExplorer/>}/>
              </Routes>
            </main>
            <Footer />
            <ChatBot />
          </div>
        </Router>
      </SavedSchemesProvider>
    </ThemeProvider>
  );
}

export default App;