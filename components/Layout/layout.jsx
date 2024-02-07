import Nav from '../Nav/nav'
import Footer from '../Footer/footer'

const Layout = newFunction()

function newFunction() {
    return ({ children }) => {
        return (
            <>
                <Nav />
                <main>{children}</main>
                <Footer />
            </>
        )
    }
}

export default Layout
