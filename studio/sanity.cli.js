import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '38nlo03o',
    dataset: 'production'
  },
  project: {
    basePath: "/studio"
  }
})
