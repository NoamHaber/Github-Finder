

function Footer(){
    const footerYear = new Date().getFullYear();

    return(
        <footer>
            Copyright &copy; {footerYear} by FakeMock corp.
        </footer>
    )
}

export default Footer