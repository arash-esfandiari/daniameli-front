import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const menuData = [
    {
        title: 'Foundry',
        link: './',
        subMenu: [
            { title: 'Furnaces', link: '/' },
            { title: 'Induction Furnaces', link: '/' },
            { title: 'Electric Arc Furnaces', link: '/' },
            { title: 'Ladle Furnaces', link: '/' },
            { title: 'CCM Lines', link: '/' },
            { title: 'Sand Plants', link: '/' },
            { title: 'Disa Lines', link: '/' },
            { title: 'HWS Lines', link: '/' },
            { title: 'Mixers', link: '/' },
        ],
    },
    {
        title: 'Rolling Mill Lines',
        link: './',
        subMenu: [
            { title: 'Hot Rolling Mill', link: '/' },
            { title: 'Cold Rolling Mill', link: '/' },
            { title: 'Bending Machines', link: '/' },
        ],
    },
    {
        title: 'Industrial Equipment',
        link: './',
        subMenu: [
            { title: 'Industrial Equipment', link: '/' },
            { title: 'Spare Parts', link: '/' },
            { title: 'Food and Dairy Equipment', link: '/' },
            { title: 'Electromotors', link: '/about' },
            { title: 'Drivers and Inverters', link: '/about' },
            { title: 'Electropumps', link: '/about' },
            { title: 'Hydraulic and Pneumatic Equipment', link: '/' },
            { title: 'Industrial Valves', link: '/' },
            { title: 'Industrial Pumps', link: '/' },
            { title: 'Heat Exchangers', link: '/' },
            { title: 'Compressors', link: '/' },
            { title: 'Fans and Blowers', link: '/' },
            { title: 'Industrial Ovens', link: '/' },
        ],
    },
    {
        title: 'Raw Material',
        link: './',
        subMenu: [{ title: 'Raw Material', link: '/' }],
    },
    {
        title: 'Reagents',
        link: null,
        subMenu: [
            { title: 'Reference Standards', link: '/' },
        ],
    },
    {
        title: 'About Us',
        link: '/about',
    },
];

export class Menu extends Component {

    renderSubMenu(subMenu) {
        return (
            <ul className="menu-dropdown">
                {subMenu.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    {menuData.map((menuItem, index) => (
                        <li key={index} className="menu-hasdropdown">
                            {menuItem.link ? (
                                <a href={menuItem.link}>{menuItem.title}</a>
                            ) : (
                                <a>{menuItem.title}</a>
                            )}
                            {menuItem.subMenu && this.renderSubMenu(menuItem.subMenu)}
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}