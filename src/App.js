import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";

const items = [
    {
        title: "What is React?",
        content: 'React is a front-end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite js library among engineers'
    },
    {
        title: "How do you use React?",
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The red color',
        value: 'red'
    },
    {
        label: 'The green color',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    },
]

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />;
    }
};

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />;
    }
};

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />;
    }
};

export default () => {
    const [selected, setSelected] = useState(options[0]);
    
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label='Select a color'
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}