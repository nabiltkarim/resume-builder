# Resume-Builder

This project contains the react application of a resume builder.

### Procedure to run

1. Install necessary packages using `npm install`.
2. Run `npm run start`.
3. This will trigger the building and running of the service.
4. Go to any preferred browser and paste this url `http://localhost:8080` and hit enter.

### Homepage

Homepage will show the list of templates made from theme form generator. Since there is no backend involved, hence the templates are stored in localStorage at the moment. Clicking upon `+ Add`, will trigger the template form. Initially it will ask for the following:

1. Name of the template.
2. Choosing a layout template. Currently, there are two options at the moment.
3. Choose primary color (CV template will follow this color), choose a font color and choose a font family.

Upon going through this workflow, the template will be stored in localStorage. Clicking on any of the created templates will take to the `preview` page.

### Preview

Preview page consists of two sections. 

1. Resume Form Builder to take inputs for different sections of the resume.
2. Resume Preview Section.

- #### Resume Form Builder

  Resume Form builder shows a series of form which takes input for Personal Information, Work Experiences, Education, Certifications, Profile Picture, and Watermark Logo. Mulitple inputs can be taken for work experiences, education and certifications.

  Resume Form also shows a download button which will convert the existing preview section into a pdf and will be downloaded into client machine.

- #### Resume Preview Section

  Based on the inputs given on the previous section, the preview will be shown in real time based on changes made and it will be reflected on appropriate sections. The preview section is transformed into a size of A4 page in order for user convenience. 


