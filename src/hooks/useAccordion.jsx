import React, { useState } from 'react';
import AccordianCollapseIcon from "../assets/accordianPlus.svg"
import AccordianExpandIcon from "../assets/accordianPlus.svg"
import "../assets/accordion.css"



const Accordion = ({ data, icons, animation }) => (
    <div className="react-flare-accordion">
        <section className="accordion">
            {data.length > 0 ? (
                data.map((item, index) =>
                    <div className="accordion-item">
                        <input type="checkbox" id={`faq${item.id || index}`} />
                        <label htmlFor={`faq${item.id || index}`} className={`accordion-title ${animation}`}>
                            <span>{item.title}</span>
                            <span className={`icon`}>
                                <span className="collapse-icon">{icons.collapse}</span>
                                <span className="expand-icon">{icons.expand}</span>
                            </span>
                        </label>
                        <div className="accordion-content">
                            <p>{item.content}</p>
                        </div>
                    </div>
                )
            ) : (
                <div>No Data</div>
            )}
        </section>
    </div>
);

const useAccordion = (initialData = [], options = {}) => {
    const [accordionData, setAccordionData] = useState(initialData);
    const defaultIcons = {
        collapse: <img src={AccordianCollapseIcon} alt="collapse" />,
        expand: <img src={AccordianExpandIcon} alt="expand" />
    };

    const icons = {
        collapse: options.icons?.collapse || defaultIcons.collapse,
        expand: options.icons?.expand || defaultIcons.expand
    };

    const animation = options.animation || "rotate";
    const setAccordion = (data) => {
        if (!Array.isArray(data)) {
            throw new Error("Data must be an array of objects with 'title' and 'content' properties.");
        }
        if (!data.every(item => typeof item === 'object' && 'title' in item && 'content' in item)) {
            throw new Error("Each item must be an object with 'title' and 'content' properties.");
        }
        setAccordionData(data)
    }

    return [() => <Accordion data={accordionData} icons={icons} animation={animation} />, setAccordion];
};

export default useAccordion;