import {Metadata} from "next";

export async function generateMetadata({ params }) {
    const {param}=params
    return {
        title: `${param}`,
        description: `${param}`,
    }
}