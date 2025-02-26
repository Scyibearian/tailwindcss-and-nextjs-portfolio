import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
        name: "Learning Using Magic",
        description: "A website built using Django to assist in the learning of natural languages via the vehicle of popular card game Magic the Gathering",
        image: "/learningusingmagicIMG.png",
        github: "https://github.com/Scyibearian/learning-using-magic",
        link: "",
    },
    {
        name: "BoomScrolling",
        description: "A randomly generated rogulike built using GameMaker and GameMaker Language (GML) with randomised sprites, moves and a JRPG style combat system",
        image: "/boomscrollingGM.png",
        github: "https://github.com/Scyibearian/BoomScrolling",
        link: "",
    },
    {
        name: "NextJS Dashboard",
        description: "A dashboard web application for viewing, creating and editing invoices of clients as well as viewing graphs of invoice statistics",
        image: "/nextjsdashboardIMG.png",
        github: "https://github.com/Scyibearian/nextjs-dashboard",
        link: "",
    }
]

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
        </section>
    )
}

export default ProjectsSection