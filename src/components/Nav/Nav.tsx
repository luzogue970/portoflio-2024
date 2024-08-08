import React, {Component} from 'react';
class Nav extends Component {
    render() {
        return (
            <div className={"bg-duck-blue h-16 flex flex-col justify-center align-middle"}>
                <ul className={"flex flex-row justify-around align text-xl"}>
                    <a href="" className={"p-3 hover:text-white transition duration-200"}>Services</a>
                    <a href="" className={"p-3 hover:text-white transition duration-200"}>Mes réalisation</a>
                    <a href="" className={"p-3 hover:text-white transition duration-200"}>A propos</a>
                    <a href="" className={"p-3 hover:text-white transition duration-200"}>Contact</a>

                </ul>
            </div>
        );
    }
}

export default Nav;