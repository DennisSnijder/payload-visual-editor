import { CollectionConfig } from "payload/types";
import { Tags } from "./Tags";
import { Categories } from "./Categories";

export const Posts: CollectionConfig = {
    slug: "posts",
    admin: {
        useAsTitle: "title",
    },
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                label: 'General',
                fields: [
                    {
                        name: "title",
                        type: "text",
                        required: true,
                    },
                    {
                        name: "subtitle",
                        type: "text",
                        required: true,
                    },
                    {
                        name: "category",
                        type: "relationship",
                        relationTo: Categories.slug,
                        hasMany: false,
                    },
                    {
                        name: "tags",
                        type: "relationship",
                        relationTo: [Tags.slug, Categories.slug],
                        hasMany: true,
                    },
                ]
            }]
        },
        {
            name: "description",
            type: "text",
            admin: {
                position: 'sidebar'
            }
        },
        
    ],
};
