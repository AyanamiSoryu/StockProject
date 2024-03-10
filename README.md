# Stock Project

Stock project is a pet project inspired by the principles of Atomic design and Block Element Modifier (BEM). It serves as a platform for implementing ideas and incorporating the latest technical solutions in both frontend and backend development. At its core, Stock project is a shop catalog application.

**Project Structuring Rules for Stock Project on React.js**

The project structure for Stock Project in React.js consists of four main directories:

1. **Atoms:**
- Definition: Atoms represent the simplest units of the application, often in the form of components like `<StyledButton>`.
- Usage: Atoms are building blocks for more complex, composite components.
- Restrictions: Components in the Atoms directory are not allowed to reference other components. This restriction ensures a clear vertical hierarchy and avoids subordination conflicts.
- Best Practice: The primary logic for UI elements should be defined in components one level above Atoms.
- Atom Tasks: Declare interface elements with the ability for styling and reuse.

2. **Organisms:**
- Definition: Organisms are components of unrestricted structure and complexity, tasked with implementing the core project logic. Examples include components like `<Card>`.
- No Restrictions: There are no specific prohibitions within this directory.
- Best Practice: Avoid referencing components from the same Organisms directory, maintaining a logical sequence in inheritance.

3. **Symbiosis:**
- Definition: Symbiosis components essentially act as routers on the path to App, combining two or more components from the Organisms directory.
- Restrictions: Components in this directory are not allowed to reference other components within the same directory.
- Tasks: Simplify the logical readability of code structure.

4. **Page:**
- Definition: The Page directory corresponds to the App, responsible for rendering the code.
- Tasks: Render the code.

These rules aim to bring clarity and organization to the project structure, promoting a clean separation of concerns and logical flow within the React.js application.

# Project Structure

The StockProject follows a well-organized structure for maintaining clarity and modularity.

```
/StockProject
  /node_modules
  /public
  /src
    /@types
    /assests
    /data
    /ui
      /components
        /atoms
        /organisms
        /symbiosis
      /pages
        /App.tsx
    /utils
  /package.json
  /tsconfig.json
  /webpack.config.js
```

## `/src`

The source code of the project is organized under the `/src` directory, containing subdirectories for different aspects of the application.

### `/@types`

Contain a declarations for TypeScript.

### `/assets`

Contain an image data and fonts for application.

### `/data`

Contain a mock data for components.

### `/ui`

Frontend part of project's web interface.

#### `/pages`

The highest level of fidelity, the "pages" directory represents specific instances of templates. Pages serve as concrete implementations where the design and functionality come together. This is where we witness the actualization of our design and the creation of unique, specific user interface instances.

#### `/components`

The `/components` directory holds reusable components categorized by functionality.

##### `/atoms`

The "atoms" directory serves as the home for Atoms, the basic building blocks of matter in our design system. In a web interface context, atoms are equivalent to components such as form labels, inputs, or buttons. These are the smallest, indivisible elements that form the foundation of our user interface.

##### `/organisms`

Moving up the hierarchy, the "organisms" directory houses Organisms. Organisms are groups of molecules joined together to create relatively complex and distinct sections of the interface. These entities are more intricate than molecules and contribute to the overall structure of the application.

##### `/symbiosis`

The "templates" directory contains Templates that consist mostly of groups of organisms stitched together. Templates represent higher-level structures where we begin to see the design coming together. This level introduces concepts like layout and represents a more comprehensive view of the application structure.

### `/utils`

The `/utils` directory contains utility files, including API configuration and helper functions.

### `App.tsx`

The main application file responsible for orchestrating the components and defining the application's structure.


## Usage

To use StockProject, follow these steps:

1. Clone the repository: `git clone https://github.com/AyanamiSoryu/StockProject.git`
2. Navigate to the project directory: `cd StockProject`
3. Install dependencies: `npm install`

### Scripts

The project includes several useful scripts:

- **eslint**: Run ESLint to analyze and identify issues in the source code.
  ```bash
  npm run eslint
  ```

- **serve**: Start the development server using webpack.
  ```bash
  npm run serve
  ```

- **build**: Build the project using webpack.
  ```bash
  npm run build
  ```

4. Start the application: `npm start`

Feel free to explore and contribute to the project. We welcome your ideas and suggestions.

## Contribution

If you would like to contribute to StockProject, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.

We appreciate your contributions and look forward to making StockProject even better together!

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
