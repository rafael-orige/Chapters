import React from "react";

export default function AdvancedSearch(props) {
    return (
        <div className="adv-search--body">
                <div className="select per-page">
                    <p>Results per page:</p>
                    <select defaultValue={"30"} onChange={props.perPages}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                        <option value="60">60</option>
                        <option value="70">70</option>
                        <option value="80">80</option>
                    </select>
                </div>
                <div className="select image-size">
                    <p>Image size:</p>
                    <select defaultValue={"large"} onChange={props.imageSize}>
                        <option value="large">24MP</option>
                        <option value="medium">12MP</option>
                        <option value="small">4MP</option>
                    </select>
                </div>
                <div className="select locale">
                    <p>Search locale:</p>
                    <select defaultValue={"en-US"} onChange={props.locale}>
                        <option value="en-US">English</option>
                        <option value="pt-BR">Português</option>
                        <option value="en-ES">Español</option>
                    </select>
                </div>
        </div>
    );
}