import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <img id="footerImage" src="static/img/CBI_logo_sm.png" alt=''/>
                <div id="footerText">
                    © 2017
                    <a href="https://consbio.org" target="_new">Conservation Biology Institute</a> |
                    <a href="mailto:info@consbio.org">info@consbio.org</a>
                </div>
            </div>
        )
    }
}

export default Footer;
