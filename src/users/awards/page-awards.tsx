import React from "react";
import Pages from "../layout/pages/pages";
import PageYearWiseAwards from "./page-year-wise-awards";
import { useParams } from "react-router-dom";

export function DefaultAwardsPage() {
    return (
        <div>Default Awards Page</div>
    );
}

export default function PageAwards() {
    const pageParams = useParams();

    return (
        <Pages
            pageContent={pageParams ? <DefaultAwardsPage /> : <PageYearWiseAwards />}
        />
    );
}