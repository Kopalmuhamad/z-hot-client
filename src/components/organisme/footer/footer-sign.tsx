const FooterSign = () => {
    return (
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} <span className="font-montserrat-alt text-primary">ZHOT</span>. All rights reserved.
            </p>
        </div>
    )
}

export default FooterSign