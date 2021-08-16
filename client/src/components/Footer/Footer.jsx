import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div id="copy-right">
                Copyright © <span>John Robison</span> All Rights Reserved | {" "}
                <a
            href="https://github.com/robisonJohn"
            target="_blank"
            rel="noreferrer"
                >
                    See More Work by John Robison
                </a>{" "}
            </div>
            <div id="github-logo">
            <a
            href="https://github.com/robisonJohn/Portfolio-Revised"
            target="_blank"
            rel="noreferrer"
            >
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                width="30"
                alt="github-logo"
                />
            </a>
            </div>
            <div id="freepik">Icons made by <strong><a href="https://www.freepik.com" title="Freepik" id="free-pik">Freepik</a></strong> from <strong><a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></strong></div>
        </div>
    )
}

export default Footer;