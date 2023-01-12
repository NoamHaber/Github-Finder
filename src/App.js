
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom"
import Navbar from "./components/layout/navbar"
import Footer from "./components/layout/footer"
import Home from "./pages/home"
import About from "./pages/about"
import NotFound from "./pages/notfound"
import Search from "./pages/search"
import { GitHubProvider } from "./context/github/GitHubContext"
import UserProfile from "./pages/UserProfile"

function App(){
    return (
        <GitHubProvider>
            <Router>
                <div id='main-flow'>
                    <Navbar title="Github finder"/>
                        <div>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/search" element={<Search />} />
                                <Route path="/user/:login" element={<UserProfile />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/notfound" element={<NotFound />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </div>
                    <Footer />
                </div>
            </Router>
        </GitHubProvider>
    )
}

export default App