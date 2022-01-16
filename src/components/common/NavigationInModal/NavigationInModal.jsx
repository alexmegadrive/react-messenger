import React from "react";

import './NavigationInModal.css';
import { Link } from "react-router-dom";

const NavigationInModal = ({
    subtitle,
    textLink,
    pathLink,
}) => {
    return (
        <div className="navigation-in-modal">
            <p className="navigation-in-modal__subtitle">{subtitle}</p>
            <Link to={pathLink} className="navigation-in-modal__link">{textLink}</Link>
        </div>
    )
}

export default NavigationInModal;