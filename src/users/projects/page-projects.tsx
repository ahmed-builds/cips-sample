import React from "react";
import { useParams } from "react-router-dom";

export default function PageProjects(){
    const { projectType } = useParams();

    return(
        <div>{projectType}</div>
    );
}