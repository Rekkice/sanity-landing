import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { deskTool } from "sanity/desk"
import { DocumentIcon } from "@sanity/icons"

//import {googleMapsInput} from '@sanity/google-maps-input'

const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["header", "footer"])

export default defineConfig({
  name: 'default',
  title: 'sanity-landing',
  basePath: '/studio',

  projectId: '38nlo03o',
  dataset: 'production',

  plugins: [


    deskTool({
        structure: (S) => 
            S.list()
              .title("Content title")
              .items([
                S.documentTypeListItem("page").title("Pages"),
                S.listItem()
                .title("Header")
                .id("header")
                .icon(DocumentIcon)
                .child(
                    S.document()
                        .schemaType("header")
                        .documentId("header")
                ),
                S.listItem()
                .title("Footer")
                .id("footer")
                .icon(DocumentIcon)
                .child(
                    S.document()
                        .schemaType("footer")
                        .documentId("footer")
                ),
                // S.documentTypeListItem("blogPost").title("Blog Posts")
                ])
    }),


    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => 
        templates.filter(({ schemaType }) => !singletonTypes.has(schemaType))
  },

  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
    },
})
