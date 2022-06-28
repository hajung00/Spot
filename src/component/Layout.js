import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
import './Layout.css'

const Layout = ()=>{
    return(
        <div className="Layout">
            <Header/>
            <Banner/>
             <main className="Main">
              
             </main>
            <Footer/>
        </div>
    )
}

export default Layout